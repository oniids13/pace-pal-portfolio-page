const Background = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-sky-600 text-3xl font-bold mb-12 text-center">
        BACKGROUND
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Row 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-600 text-lg">💡</span>
            </div>
            <h2 className="text-xl font-bold">Prompt</h2>
          </div>
          <p className="text-gray-600">
            Many runners struggle to stay consistent and motivated when running
            alone, often leading to skipped workouts and less enjoyment. Finding
            reliable running partners can be difficult due to mismatched
            schedules, pace, or lack of a simple way to connect. This gap
            highlights the need for an easy, community-driven solution to bring
            runners together.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-red-600 text-lg">⚠️</span>
            </div>
            <h2 className="text-xl font-bold">Problem Statement</h2>
          </div>
          <p className="text-gray-600">
            Runners need a convenient way to plan their running schedule and
            connect with other runners in their community.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-green-600 text-lg">🎯</span>
            </div>
            <h2 className="text-xl font-bold">Goal</h2>
          </div>
          <p className="text-gray-600">
            Design a mobile app that simplifies run scheduling and builds
            connections through shared running experiences.
          </p>
        </div>

        {/* Row 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-purple-600 text-lg">👥</span>
            </div>
            <h2 className="text-xl font-bold">Target Users</h2>
          </div>
          <p className="text-gray-600">
            Recreational and serious runners who want to maintain consistent
            training schedules and meet like-minded people.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-orange-600 text-lg">⚡</span>
            </div>
            <h2 className="text-xl font-bold">Key Features</h2>
          </div>
          <p className="text-gray-600">
            Run scheduling, progress tracking, social connections, and community
            challenges.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-indigo-600 text-lg">📊</span>
            </div>
            <h2 className="text-xl font-bold">Success Metrics</h2>
          </div>
          <p className="text-gray-600">
            User engagement, successful run completions, community interactions,
            and app retention rates.
          </p>
        </div>

        {/* Row 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg md:col-span-2 lg:col-span-3">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-teal-600 text-lg">🔍</span>
            </div>
            <h2 className="text-xl font-bold">Research Insights</h2>
          </div>
          <p className="text-gray-600">
            User research revealed that runners struggle with motivation,
            finding running partners, and maintaining consistent schedules. They
            want a simple, social solution that enhances their running
            experience without overwhelming complexity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Background;
