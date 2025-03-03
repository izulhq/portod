export default function Education() {
  return (
    <div className="bg-white py-4 border border-[#e5e5e5] rounded-lg">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">
          Education and Volunteering Experience
        </h2>
        <div className="space-y-4">
          {/* Kuliah */}
          <div className="grid grid-cols-1 gap-1">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold">
                Bachelor of Education in Geography
              </h3>
              <span className="text-gray-400">2021 - 2025</span>
            </div>
            <p className="text-gray-500">
              Sebelas Maret University - Indonesia
            </p>
          </div>

          {/* SMA - Sekolah Menengah Atas */}
          <div className="grid grid-cols-1 gap-1">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold">Senior High School</h3>
              <span className="text-gray-400">2018 - 2021</span>
            </div>
            <p className="text-gray-500">
              SMA Negeri 1 Karanganyar - Indonesia
            </p>
          </div>

          {/* Volunteering */}
          <div className="grid grid-cols-1 gap-1">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold">UNS Esport Community</h3>
              <span className="text-gray-400">2021 - 2023</span>
            </div>
            <p className="text-gray-500">
              An Esports community in Sebelas Maret University.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-1">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold">Himpunan Mahasiswa Geografi</h3>
              <span className="text-gray-400">2022 - 2023</span>
            </div>
            <p className="text-gray-500">
              A student organization for Geography Education in Sebelas Maret
              University.
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
                <ul className="text-gray-500 dark:text-gray-500">
                  <li>
                    Became the best staff of the year for Humas (Public
                    Relations) division.
                  </li>
                  <li>
                    Contributing into all crucials events in the organization.
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
