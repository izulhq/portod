export default function Education() {
  return (
    <div className="bg-white py-4 border border-[#e5e5e5] rounded-lg">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">My Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">
              Bachelor of Education in Geography
            </h3>
            <p className="text-gray-400">
              Sebelas Maret University - Indonesia
            </p>
            <p className="text-gray-400">2021 - 2025</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Senior High School</h3>
            <p className="text-gray-400">
              SMA Negeri 1 Karanganyar - Indonesia
            </p>
            <p className="text-gray-400">2018 - 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}
