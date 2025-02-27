import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          Connect with the Perfect
          <span className="text-blue-600 dark:text-blue-500"> Partners</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          The premier platform connecting content creators with brands for authentic sponsorships and collaborations.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <Link
              href="/creators/signup"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              I'm a Creator
            </Link>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <Link
              href="/companies/signup"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              I'm a Company
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* For Creators */}
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">For Creators</h3>
              <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Find relevant sponsorship opportunities</li>
                  <li>Showcase your audience demographics</li>
                  <li>Track your campaign performance</li>
                  <li>Secure brand deals easily</li>
                </ul>
              </div>
            </div>
          </div>

          {/* For Companies */}
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">For Companies</h3>
              <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Find creators that match your brand</li>
                  <li>Access detailed analytics</li>
                  <li>Manage campaigns efficiently</li>
                  <li>Track ROI in real-time</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Platform Benefits */}
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Platform Benefits</h3>
              <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Secure payment processing</li>
                  <li>Contract management</li>
                  <li>Performance analytics</li>
                  <li>24/7 Support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 