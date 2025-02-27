import Link from "next/link";
import SocialMediaPost from '@/components/SocialMediaPost';

export default function Home() {
  return (
    <main className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative">
          {/* Decorative elements */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-pink-200 to-purple-200 dark:from-pink-900 dark:to-purple-900 rounded-full blur-3xl opacity-30 dark:opacity-20"></div>
          
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Welcome to{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                SocialSync
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-600 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Share your anime content across multiple social media platforms with just one click. Save time and maintain consistency across all your social channels.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link
                href="/upload"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 dark:from-purple-500 dark:to-pink-500 dark:hover:from-purple-600 dark:hover:to-pink-600 transform hover:scale-105 transition-all duration-200 md:py-4 md:text-lg md:px-10"
              >
                Create Post
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root backdrop-blur-md bg-white/50 dark:bg-gray-800/50 rounded-lg px-6 pb-8 border border-purple-100 dark:border-purple-800">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 rounded-md shadow-lg transform hover:scale-105 transition-transform duration-200">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">Upload Once</h3>
                  <p className="mt-5 text-base text-gray-600 dark:text-gray-300">
                    Upload your anime content once and share it across all your social media accounts.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root backdrop-blur-md bg-white/50 dark:bg-gray-800/50 rounded-lg px-6 pb-8 border border-purple-100 dark:border-purple-800">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 rounded-md shadow-lg transform hover:scale-105 transition-transform duration-200">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">Save Time</h3>
                  <p className="mt-5 text-base text-gray-600 dark:text-gray-300">
                    No more switching between apps. Post your anime content to all platforms simultaneously.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root backdrop-blur-md bg-white/50 dark:bg-gray-800/50 rounded-lg px-6 pb-8 border border-purple-100 dark:border-purple-800">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 rounded-md shadow-lg transform hover:scale-105 transition-transform duration-200">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">Multiple Platforms</h3>
                  <p className="mt-5 text-base text-gray-600 dark:text-gray-300">
                    Share your anime content across all major social media platforms with one click.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
