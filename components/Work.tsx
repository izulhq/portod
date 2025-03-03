export default function Work() {
  return (
    <div className="bg-white py-4 border border-[#e5e5e5] rounded-lg">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Working Experience</h2>
        <div className="space-y-4">
          {/* Bagian Isi */}
          <div className="grid grid-cols-1 gap-1">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold">Geography Education</h3>
              <span className="text-gray-400">2022 - Present</span>
            </div>
            <p className="text-gray-700 font-semibold">
              As a Website Developer
            </p>
            <p className="text-gray-500">
              Redesigned the UI/UX for the Geography Education's platform,
              resulting in a 20% increase in user engagement and 30% faster load
              times.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-1">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold">LPPM UNS - Research Center</h3>
              <span className="text-gray-400">2023 - 2025</span>
            </div>
            <p className="text-gray-700 font-semibold">
              As an Assistant Researcher
            </p>
            <div className="grid grid-cols-12 gap-2 text-gray-600">
              <div className="col-span-1 ml-2">
                <ul className="list-disc list-inside">
                  <li></li>
                  <br></br>
                  <li></li>
                </ul>
              </div>
              <div className="col-span-11 -ml-4">
                <ul className="text-gray-500">
                  <li>
                    Developed tourism village design for 10 villages in Kediri
                    Regency, Indonesia. Aiming to unlock each village's true
                    tourism potentials.
                  </li>
                  <li>
                    Developed a design for a small lake to attract more tourism
                    in Kemiri, Kebakkramat, Indonesia.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold">De Goedang Resto</h3>
              <span className="text-gray-400">2023 - 2024</span>
            </div>
            <p className="text-gray-700 font-semibold">
              As a Digital Designer and Marketing
            </p>
            <div className="grid grid-cols-12 gap-2 text-gray-600">
              <div className="col-span-1 ml-2">
                <ul className="list-disc list-inside">
                  <li></li>
                  <br></br>
                  <li></li>
                </ul>
              </div>
              <div className="col-span-11 -ml-4">
                <ul className="text-gray-500">
                  <li>
                    Developed a design that unified the brand across multiple
                    platforms, improving design consistency and looks by 40%.
                  </li>
                  <li>
                    Doing rebranding for De Goedang Resto's such as banner,
                    foods menu, social media, etc.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
