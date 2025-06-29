export default function Work() {
  return (
    <div className="bg-white py-4 border border-[#e5e5e5] rounded-lg shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-2xl font-bold mb-8 text-gray-900">
          Working Experience
        </h2>

        <div className="space-y-6">
          {/* Geography Education S1*/}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800 leading-none">
                Geography Education (Bachelor)
              </h3>
              <span className="text-sm text-gray-500 leading-none">
                2022 - Present
              </span>
            </div>
            <p className="text-base text-gray-700">Website Developer</p>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Redesigned the UI/UX for the Geography Education&apos;s platform,
              resulting in a 20% increase in user engagement and 30% faster load
              times.
            </p>
            <a
              href="https://geografi.fkip.uns.ac.id"
              className="text-sm text-blue-600 hover:underline"
              target="_blank"
            >
              View website ↗
            </a>
          </div>

          {/* Geography Education S2*/}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800 leading-none">
                Geography Education (Master)
              </h3>
              <span className="text-sm text-gray-500 leading-none">
                2025 - Present
              </span>
            </div>
            <p className="text-base text-gray-700">Website Developer</p>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Led a complete UI/UX overhaul of the Geography Education
              Master&apos;s platform, enhancing visual coherence and user
              experience while restoring critical functionality that had
              previously been compromised.
            </p>
            <a
              href="https://s2geo.fkip.uns.ac.id"
              className="text-sm text-blue-600 hover:underline"
              target="_blank"
            >
              View website ↗
            </a>
          </div>

          {/* LPPM UNS */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800 leading-none">
                LPPM UNS - Research Center
              </h3>
              <span className="text-sm text-gray-500 leading-none">
                2023 - 2025
              </span>
            </div>
            <p className="text-base text-gray-700">Assistant Researcher</p>
            <ul className="list-disc pl-4 text-sm text-gray-600 space-y-2 mt-2 text-justify">
              <li>
                Developed tourism village design for 10 villages in Kediri
                Regency, Indonesia. Aiming to unlock each village&apos;s true
                tourism potentials.
              </li>
              <li>
                Developed a design for a small lake to attract more tourism in
                Kemiri, Kebakkramat, Indonesia.
              </li>
            </ul>
          </div>

          {/* De Goedang Resto */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800 leading-none">
                De Goedang Resto
              </h3>
              <span className="text-sm text-gray-500 leading-none">
                2023 - 2024
              </span>
            </div>
            <p className="text-base text-gray-700">
              Digital Designer and Marketing
            </p>
            <ul className="list-disc pl-4 text-sm text-gray-600 space-y-2 mt-2 text-justify">
              <li>
                Developed a design that unified the brand across multiple
                platforms, improving design consistency and looks by 40%.
              </li>
              <li>
                Doing rebranding for De Goedang Resto&apos;s such as banner,
                foods menu, social media, etc.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
