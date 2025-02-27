'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import HashtagSuggestions from './HashtagSuggestions';

export default function SocialMediaPost() {
    const [mediaPreview, setMediaPreview] = useState<string | null>(null);
    const [caption, setCaption] = useState('');
    const [mediaType, setMediaType] = useState<'image' | 'video' | null>(null);

    const handleMediaUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const fileType = file.type.split('/')[0];
        if (fileType !== 'image' && fileType !== 'video') {
            alert('Please upload an image or video file');
            return;
        }

        setMediaType(fileType as 'image' | 'video');
        const previewUrl = URL.createObjectURL(file);
        setMediaPreview(previewUrl);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // This is where we'll add the actual posting functionality later
        console.log('Post data:', { mediaPreview, caption });
    };

    const handleHashtagClick = (hashtag: string) => {
        setCaption(prev => {
            // Add a space before the hashtag if the caption doesn't end with one
            const space = prev.endsWith(' ') || prev === '' ? '' : ' ';
            return `${prev}${space}${hashtag}`;
        });
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Create Social Media Post</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Media Upload Section */}
                <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Upload Media
                    </label>
                    <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
                        <div className="space-y-1 text-center">
                            <div className="flex flex-col items-center">
                                <svg className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className="flex text-sm text-gray-600 dark:text-gray-400">
                                    <label className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300">
                                        <span>Upload a file</span>
                                        <input 
                                            type="file" 
                                            className="sr-only" 
                                            accept="image/*,video/*"
                                            onChange={handleMediaUpload}
                                        />
                                    </label>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, GIF, MP4 up to 10MB</p>
                            </div>
                        </div>
                    </div>

                    {/* Media Preview */}
                    {mediaPreview && (
                        <div className="mt-4 relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                            {mediaType === 'image' ? (
                                <Image
                                    src={mediaPreview}
                                    alt="Preview"
                                    fill
                                    className="object-contain"
                                />
                            ) : (
                                <video
                                    src={mediaPreview}
                                    controls
                                    className="w-full h-full"
                                />
                            )}
                        </div>
                    )}
                </div>

                {/* Caption Input */}
                <div>
                    <label htmlFor="caption" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Caption
                    </label>
                    <div className="mt-1">
                        <textarea
                            id="caption"
                            rows={4}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            placeholder="Write your caption here..."
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)}
                        />
                    </div>
                </div>

                {/* Hashtag Suggestions */}
                <HashtagSuggestions onHashtagClick={handleHashtagClick} />

                {/* Submit Button */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                        Post to All Platforms
                    </button>
                </div>
            </form>
        </div>
    );
} 