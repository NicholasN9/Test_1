import { NextResponse } from 'next/server';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

const COMMON_PREFIXES = ['trending', 'best', 'top', 'amazing', 'awesome', 'daily', 'weekly', 'love', 'my', 'our', 'your'];
const COMMON_SUFFIXES = ['life', 'lifestyle', 'lover', 'lovers', 'community', 'world', 'gram', 'daily', 'photo', 'pics'];
const ENGAGEMENT_TAGS = ['follow', 'followme', 'like4like', 'instagood', 'photooftheday', 'picoftheday', 'trending'];
const CONTENT_TYPES = ['photo', 'photos', 'pic', 'pics', 'picture', 'photography', 'video', 'content', 'post', 'story'];

async function fetchTrendingHashtags(topic: string): Promise<string[]> {
  try {
    // Fetch from Best-Hashtags.com
    const response = await fetch(`https://best-hashtags.com/hashtag/${encodeURIComponent(topic)}/`);
    const html = await response.text();
    const $ = cheerio.load(html);
    
    // Extract hashtags from the response
    const hashtags = new Set<string>();
    
    // Parse hashtags from different sections of the page
    $('.tag-box p1').each((_, element) => {
      const text = $(element).text();
      const tags = text.match(/#[a-zA-Z0-9_]+/g) || [];
      tags.forEach(tag => hashtags.add(tag));
    });

    return Array.from(hashtags);
  } catch (error) {
    console.error('Error fetching trending hashtags:', error);
    return [];
  }
}

async function generateLocalHashtags(topic: string): Promise<string[]> {
  const cleanTopic = topic.toLowerCase().trim().replace(/[^\w\s]/g, '');
  const words = cleanTopic.split(/\s+/);
  const hashtags = new Set<string>();

  // Add basic topic hashtags
  hashtags.add(`#${words.join('')}`);
  if (words.length > 1) {
    hashtags.add(`#${words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}`);
  }

  // Add prefix combinations
  COMMON_PREFIXES.forEach(prefix => {
    hashtags.add(`#${prefix}${words.join('')}`);
  });

  // Add suffix combinations
  COMMON_SUFFIXES.forEach(suffix => {
    hashtags.add(`#${words.join('')}${suffix}`);
  });

  // Add content type combinations
  CONTENT_TYPES.forEach(type => {
    hashtags.add(`#${words.join('')}${type}`);
  });

  // Add topic with common patterns
  hashtags.add(`#${words.join('')}oftheday`);
  hashtags.add(`#${words.join('')}ofinstagram`);
  hashtags.add(`#${words.join('')}ofinsta`);
  hashtags.add(`#best${words.join('')}`);
  hashtags.add(`#trending${words.join('')}`);

  // Add some engagement hashtags
  ENGAGEMENT_TAGS.forEach(tag => {
    hashtags.add(`#${tag}`);
  });

  return Array.from(hashtags);
}

export async function POST(req: Request) {
  try {
    const { topic } = await req.json();
    
    if (!topic || typeof topic !== 'string') {
      return NextResponse.json(
        { error: 'Topic is required' },
        { status: 400 }
      );
    }

    // Fetch trending hashtags and generate local ones in parallel
    const [trendingHashtags, localHashtags] = await Promise.all([
      fetchTrendingHashtags(topic),
      generateLocalHashtags(topic)
    ]);

    // Combine and deduplicate hashtags
    const allHashtags = new Set([
      ...trendingHashtags,
      ...localHashtags,
      ...ENGAGEMENT_TAGS.map(tag => `#${tag}`)
    ]);

    // Get the top 30 hashtags
    const finalHashtags = Array.from(allHashtags).slice(0, 30);

    // If we couldn't fetch any trending hashtags, use our local generation as fallback
    if (finalHashtags.length === 0) {
      const fallbackHashtags = await generateLocalHashtags(topic);
      return NextResponse.json({ 
        hashtags: fallbackHashtags.slice(0, 30),
        source: 'fallback'
      });
    }

    return NextResponse.json({ 
      hashtags: finalHashtags,
      source: trendingHashtags.length > 0 ? 'trending' : 'local'
    });
  } catch (error) {
    console.error('Error generating hashtags:', error);
    return NextResponse.json(
      { error: 'Failed to generate hashtags' },
      { status: 500 }
    );
  }
} 