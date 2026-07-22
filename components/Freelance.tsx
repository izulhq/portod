export default function Freelance() {
  return (
    <div className="bg-white py-4 border border-[#e5e5e5] rounded-lg shadow-md mt-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Paid Freelance Projects
        </h2>

        <div className="space-y-6">
          {/* Tele Chatbot */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800 leading-none">
                AI-Powered Telegram Learning Chatbot
              </h3>
              <span className="text-sm text-gray-500 leading-none">
                2026
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Developed an AI-integrated Telegram chatbot for High School geography education. The chatbot supports text-based learning, image generation upon user request, and image recognition through photo scanning. Integrated DeepSeek and Google Gemini APIs to provide intelligent responses and multimodal learning assistance.
            </p>
              <a
              href="https://t.me/GeoZenSphereBot"
              className="text-sm text-blue-600 hover:underline"
              target="_blank"
            >
              View bot on telegram ↗
            </a>
          </div>

          {/* GIS Mapping */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800 leading-none">
                GIS Mapping Projects (Freelance)
              </h3>
              <span className="text-sm text-gray-500 leading-none">
                2023 - Present
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Created a variety of professional maps for academic and planning purposes. Including administrative maps, RDTR (Detailed Spatial Plan) maps, location maps, and tourism maps. Performed spatial data processing, cartographic design, and layout preparation using GIS software (ArcGIS, QGIS, and Google Earth Engine) to produce accurate and publication-ready outputs.
            </p>
          </div>

          {/* Wordpress Educational */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800 leading-none">
                Educational Website Development
              </h3>
              <span className="text-sm text-gray-500 leading-none">
                2025
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Designed and developed a WordPress-based e-learning website for High School students. Build a structured learning platform featuring curriculum-based learning materials, practice exercies, interactive quizzes, and embedded educational videos to enhance the online learning experience. Customized the website layout, navigation, and content management to ensure accessibility and ease of use for both students and teachers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
