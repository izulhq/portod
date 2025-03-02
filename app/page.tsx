import Projects from "@/components/Projects";
import Stacks from "@/components/Stacks";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Education from "@/components/Education";

export default function Portfolio() {
  return (
    <div className="min-h-screen text-black">
      <div className="max-w-7xl mx-auto p-6">
        <Header />

        {/* Two-column layout container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left column - Projects */}
          <div className="w-full">
            <Projects />
          </div>

          {/* Right column - Stacks */}
          <div className="w-full">
            <Stacks />
          </div>
        </div>

        {/* Two-column layout container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left column - Projects */}
          <div className="w-full">
            <Education />
          </div>

          {/* Right column - Stacks */}
          <div className="w-full">
            <Stacks />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
