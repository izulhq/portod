export default function Education() {
  return (
    <div className="bg-white py-4 border border-[#e5e5e5] rounded-lg shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Education and Volunteering Experience
        </h2>

        <div className="space-y-6">
          {/* Bachelor Education */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800 leading-none">
                Bachelor of Education in Geography
              </h3>
              <span className="text-sm text-gray-500 leading-none">
                2021 - 2025
              </span>
            </div>
            <p className="text-base text-gray-700">
              Sebelas Maret University - Indonesia
            </p>
          </div>

          {/* Senior High School */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800 leading-none">
                Senior High School
              </h3>
              <span className="text-sm text-gray-500 leading-none">
                2018 - 2021
              </span>
            </div>
            <p className="text-base text-gray-700">
              SMA Negeri 1 Karanganyar - Indonesia
            </p>
          </div>
          <div className="border-t border-[#e5e5e5] my-0" />
          {/* UNS Esport Community */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800 leading-none">
                UNS Esport Community
              </h3>
              <span className="text-sm text-gray-500 leading-none">
                2021 - 2023
              </span>
            </div>
            <p className="text-base text-gray-700">
              An Esports community in Sebelas Maret University
            </p>
            <ul className="list-disc pl-4 text-sm text-gray-600 space-y-2 mt-2">
              <li>
                Became the Manager of Valorant Division (2023)
              </li>
              <li>
                Became the General Admin of Genshin Impact Division (2021)
              </li>
            </ul>
          </div>

          {/* Himpunan Mahasiswa Geografi */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800 leading-none">
                Himpunan Mahasiswa Geografi
              </h3>
              <span className="text-sm text-gray-500 leading-none">
                2022 - 2023
              </span>
            </div>
            <p className="text-base text-gray-700">
              A student organization for Geography Education in Sebelas Maret
              University
            </p>
            <ul className="list-disc pl-4 text-sm text-gray-600 space-y-2 mt-2">
              <li>
                Became the best staff of the year for Humas (Public Relations)
                division
              </li>
              <li>Contributing into all crucial events in the organization</li>
            </ul>
          </div>

          {/* Brawl Stars Community Tournament */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800 leading-none">
                Brawl Stars Community Tournament 2020
              </h3>
              <span className="text-sm text-gray-500 leading-none">
                2020
              </span>
            </div>
            <p className="text-base text-gray-700">
              Documentation & Social Media Lead
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Organized a national-level community tournament supported by Line as Supercell&apos;s official representative in Indonesia.
            </p>
            <ul className="list-disc pl-4 text-sm text-gray-600 space-y-2 mt-2">
              <li>
                Managed social media publication and administrative tasks as the admin and the owner o community page (@brawlstars.ind)
              </li>
              <li>
                Coordinated complete tournament documentation, including content publication and real-time event coverage.
              </li>
            </ul>
            <p className="mt-2">
              <a
              href="https://drive.google.com/file/d/1nWKQVgWnVFHDdVvW5auwW0b9CCUU8ecz/view?usp=sharing"
              className="text-sm text-blue-600 hover:underline"
              target="_blank"
            >
              View event report ↗
            </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
