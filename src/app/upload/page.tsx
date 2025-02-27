import SocialMediaPost from '@/components/SocialMediaPost';

export default function UploadPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Create New Post</h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Share your content across multiple platforms</p>
        </div>
        <SocialMediaPost />
      </div>
    </main>
  );
} 