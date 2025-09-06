const Background = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-sky-600 text-3xl font-bold mb-12 text-center">
        BACKGROUND
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Row 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-sky-600 text-xl font-bold mb-6">Prompt</h2>
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
          <h2 className="text-sky-600 text-xl font-bold mb-6">
            Problem Statement
          </h2>
          <p className="text-gray-600">
            Runners need a convenient way to plan their running schedule and
            connect with other runners in their community.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-sky-600 text-xl font-bold mb-6">Goal</h2>
          <p className="text-gray-600">
            Design a mobile app that simplifies run scheduling and builds
            connections through shared running experiences.
          </p>
        </div>

        {/* Row 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-sky-600 text-xl font-bold mb-6">Target Users</h2>
          <p className="text-gray-600">
            Recreational and serious runners who want to maintain consistent
            training schedules and meet like-minded people.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-sky-600 text-xl font-bold mb-6">Key Features</h2>
          <p className="text-gray-600">
            Run scheduling, progress tracking, social connections, and community
            challenges.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-sky-600 text-xl font-bold mb-6">
            Success Metrics
          </h2>
          <p className="text-gray-600">
            User engagement, successful run completions, community interactions,
            and app retention rates.
          </p>
        </div>

        {/* Row 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg md:col-span-2 lg:col-span-3">
          <h2 className="text-sky-600 text-xl font-bold mb-6">
            Research Insights
          </h2>
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
