import Projects from "@/components/Projects";
import Stacks from "@/components/Stacks";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-black p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <Header />
        <div className="space-y-12">
          <Projects />
          <Stacks />
          <Footer />
        </div>
      </div>
    </div>
  );
}
