'use client';

import { useState } from 'react';

interface HashtagSuggestionsProps {
    onHashtagClick: (hashtag: string) => void;
}

export default function HashtagSuggestions({ onHashtagClick }: HashtagSuggestionsProps) {
    const [topic, setTopic] = useState('');
    const [hashtags, setHashtags] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [selectedHashtags, setSelectedHashtags] = useState<Set<string>>(new Set());

    const generateHashtags = async () => {
        if (!topic.trim()) {
            setError('Please enter a topic');
            return;
        }

        setIsLoading(true);
        setError('');
        setHashtags([]);

        try {
            const response = await fetch('/api/hashtags', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ topic: topic.trim() }),
            });

            if (!response.ok) {
                throw new Error('Failed to generate hashtags');
            }

            const data = await response.json();
            if (data.error) {
                throw new Error(data.error);
            }
            setHashtags(data.hashtags);
            setSelectedHashtags(new Set());
        } catch (err) {
            setError('Failed to generate hashtags. Please try again.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleHashtagClick = (hashtag: string) => {
        const newSelected = new Set(selectedHashtags);
        if (newSelected.has(hashtag)) {
            newSelected.delete(hashtag);
        } else {
            newSelected.add(hashtag);
        }
        setSelectedHashtags(newSelected);
        onHashtagClick(hashtag);
    };

    return (
        <div className="mt-8 space-y-4">
            <div className="flex flex-col space-y-2">
                <label htmlFor="topic" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Generate Trending Hashtags
                </label>
                <div className="flex space-x-2">
                    <input
                        type="text"
                        id="topic"
                        placeholder="Enter a topic (e.g., photography, food, travel)"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="flex-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                generateHashtags();
                            }
                        }}
                    />
                    <button
                        onClick={generateHashtags}
                        disabled={isLoading}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed dark:focus:ring-offset-gray-800"
                    >
                        {isLoading ? (
                            <div className="flex items-center space-x-2">
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Generating...</span>
                            </div>
                        ) : (
                            'Generate'
                        )}
                    </button>
                </div>
            </div>

            {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-4">
                    <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
                </div>
            )}

            {hashtags.length > 0 && (
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                            Click to add to your caption:
                        </h3>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                            {selectedHashtags.size} selected
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {hashtags.map((hashtag, index) => (
                            <button
                                key={index}
                                onClick={() => handleHashtagClick(hashtag)}
                                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                                    selectedHashtags.has(hashtag)
                                        ? 'bg-indigo-600 text-white dark:bg-indigo-500'
                                        : 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 hover:bg-indigo-200 dark:hover:bg-indigo-800'
                                }`}
                            >
                                {hashtag}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
} 