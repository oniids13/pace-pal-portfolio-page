import HandshakeIcon from "@mui/icons-material/Handshake";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

const Research = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" id="research">
      <h1 className="text-sky-600 text-3xl font-bold mb-12 text-center">
        RESEARCH
      </h1>
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Competitive Analysis
          </h2>
          <p className="text-gray-600 mb-8 text-base max-w-4xl mx-auto text-justify">
            I conducted a competitive analysis of five community-focused running
            apps— <strong>Runn, MyRunGroup, OuiRun, RunRun, and Runna</strong>
            —examining their features, usability, and pain point coverage to
            uncover their strengths, weaknesses, and gaps that PacePal can
            uniquely address.
          </p>
          <div className="w-full max-w-6xl mx-auto">
            <img
              className="w-full h-auto object-contain rounded-lg shadow-md"
              src="/images/comp_analysis.png"
              alt="Competitive Analysis"
            />
          </div>
          <p className="text-gray-600 mb-8 text-base pt-10 max-w-4xl mx-auto text-justify">
            After exploring the features of existing running apps, I summarized
            key pain points that became opportunity areas for me to design
            PacePal.
          </p>
          <p className="text-base">
            <strong>Pain Points:</strong>
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-8 text-base">
            <li>
              Difficulty in finding running partners who match pace and schedule
            </li>
            <li>Cumbersome coordination through messaging apps or groups</li>
            <li>
              Overly complex app interfaces, especially for older or less
              tech-savvy runners
            </li>
          </ul>
          <p className="text-base pb-5">
            <strong>Opportunity Areas for PacePal:</strong>
          </p>
          <div className="flex flex-col sm:flex-row justify-between gap-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-sky-300 p-4 rounded-lg shadow-lg flex flex-col items-center gap-2 flex-1">
              <HandshakeIcon fontSize="large" />
              <p className="text-sm text-center">
                Simplify partner matching by focusing on pace and schedule
                compatibility.
              </p>
            </div>
            <div className="bg-sky-300 p-4 rounded-lg shadow-lg flex flex-col items-center gap-2 flex-1">
              <EventNoteIcon fontSize="large" />
              <p className="text-sm text-center">
                Streamline run coordination with easy in-app scheduling and
                joining.
              </p>
            </div>
            <div className="bg-sky-300 p-4 rounded-lg shadow-lg flex flex-col items-center gap-2 flex-1">
              <PhoneIphoneIcon fontSize="large" />
              <p className="text-sm text-center">
                Design an intuitive, accessible interface suitable for all age
                groups.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Interview</h2>
          <p className="text-gray-600 mb-8 text-base pt-10 max-w-4xl mx-auto text-justify">
            To better understand our potential users, I interviewed 4 runners
            from different age brackets and running styles. The interviews were
            semi-structured with open-ended questions, allowing participants to
            think out loud and share details about their running habits,
            challenges in finding partners, and how they currently coordinate
            runs. From the interviews, I found that casual runners often
            struggled with motivation when running alone, while more experienced
            runners worried about pace mismatches and scheduling conflicts.
          </p>
          <p className="text-gray-600 mb-8 text-base pt-10 max-w-4xl mx-auto text-justify">
            Therefore,{" "}
            <strong>
              our target users would be casual and recreational runners,
              especially students and young professionals
            </strong>{" "}
            who are looking for consistent motivation and easier ways to
            coordinate runs.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Persona Development
          </h2>
          <p className="text-gray-600 mb-8 text-base pt-10 max-w-4xl mx-auto text-justify">
            Drawing from the research insights, I created two personas that
            reflects our target users, highlighting their key goals and pain
            points.
          </p>
          <div>
            <img
              className="w-full h-auto object-contain rounded-lg shadow-md"
              src="/images/persona_1.png"
              alt="Persona"
            />
            <img
              className="w-full h-auto object-contain rounded-lg shadow-md"
              src="/images/persona_2.png"
              alt="Persona"
            />
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Reframe Design Question
          </h2>
          <p className="text-gray-600 mb-8 text-base pt-10 max-w-4xl mx-auto text-justify">
            The above findings helped us further narrow down our problem
            statement, so we came up with our final design question:
          </p>
          <p className="text-sky-800 mb-8 text-2xl pt-10 max-w-4xl mx-auto text-justify">
            How might we help runners of all ages and abilities easily find
            compatible running partners and schedule runs that fit their pace,
            time, and location?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Research;
