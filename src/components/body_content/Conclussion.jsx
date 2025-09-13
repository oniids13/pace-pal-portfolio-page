const Conclussion = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-sky-600 text-3xl font-bold mb-12 text-center">
        REFLECTIONS AND NEXT STEPS
      </h1>
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Constraints and concerns
          </h2>
          <div className="max-w-6xl mx-auto">
            <p className="text-gray-600 mb-4 text-base font-semibold">
              <strong>Technical feasibility:</strong>
            </p>
            <ul className="list-disc list-inside mb-8 text-gray-600 text-base space-y-2 ml-4">
              <li>
                What if GPS pinning is inaccurate, especially in crowded or
                rural areas?
              </li>
              <li>
                How to ensure reliable notifications for scheduled runs without
                draining phone battery?
              </li>
            </ul>

            <p className="text-gray-600 mb-4 text-base font-semibold">
              <strong>Product features and product thinking:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-600 text-base space-y-2 ml-4">
              <li>
                Lack of error recovery: what if users enter the wrong run
                details or time by mistake?
              </li>
              <li>
                What if there are too many scheduled runs nearby, causing
                clutter in the list?
              </li>
              <li>
                How do we incentivize users to consistently join or create runs?
                What keeps them engaged after the initial sign-up?
              </li>
              <li>
                Safety concerns: how do we ensure users feel secure when meeting
                new running partners?
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Future steps</h2>
          <div className="max-w-6xl mx-auto">
            <p className="text-gray-600 mb-4 text-base font-semibold">
              <strong>Product features:</strong>
            </p>
            <ul className="list-disc list-inside mb-8 text-gray-600 text-base space-y-2 ml-4">
              <li>
                Introduce rewards or gamification (badges, streaks, progress
                tracking) for consistent participation.
              </li>
              <li>
                Add a personal dashboard that visualizes completed runs, pace
                trends, and milestones.
              </li>
              <li>
                Double confirmation before joining or canceling a run to reduce
                user mistakes.
              </li>
              <li>
                Explore integrations with wearables or fitness apps for
                automatic data syncing.
              </li>
            </ul>

            <p className="text-gray-600 mb-4 text-base font-semibold">
              <strong>Design:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-600 text-base space-y-2 ml-4">
              <li>
                Improve accessibility with clear typography, high color
                contrast, and larger tap targets.
              </li>
              <li>
                Use intuitive icons and supportive visuals for quick run
                scanning and recognition.
              </li>
              <li>
                Provide map previews with highlighted meetup points for clarity.
              </li>
              <li>
                Consider future multi-modality options, e.g., smartwatch support
                for run reminders and check-ins.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conclussion;
