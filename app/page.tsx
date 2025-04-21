import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Education from "@/components/Education";
import Work from "@/components/Work";

export default function Portfolio() {
  return (
    <div className="min-h-screen text-black bg-[#f5f5f5]">
      <div className="max-w-[100%] md:max-w-7xl mx-auto px-6 pt-4 md:pt-8">
        <Header />
        <div className="invisible md:visible flex flex-col items-center space-y-4 pt-6 border-t border-[#e5e5e5]" />
        {/* Two-column layout container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 md:mt-2">
          {/* Left column - Projects */}
          <div className="w-full">
            <Projects />
          </div>

          {/* Right column - Stacks */}
          <div className="w-full">
            <Skills />
          </div>
        </div>

        {/* Two-column layout container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left column - Projects */}
          <div className="w-full">
            <Education />
          </div>

          {/* Right column - Stacks */}
          <div className="w-full">
            <Work />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
