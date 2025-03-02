import Image from "next/image";
import { Button } from "@/components/ui/button";
import { dpupr, geopedia, ijulwebgis, moreProjects } from "@/app/images";

export default function Projects() {
  return (
    <section id="projects">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Projects</h2>
        <Button variant="ghost" color="black" size="icon">
          <span className="sr-only">View all projects</span>→
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="relative aspect-square bg-gray-900 rounded-lg border-[2px] border-[#e5e5e5] overflow-hidden">
          <Image src={dpupr} alt="Project 1" fill className="object-cover" />
        </div>
        <div className="relative aspect-square bg-gray-900 rounded-lg border-[2px] border-[#e5e5e5] overflow-hidden">
          <Image src={geopedia} alt="Project 2" fill className="object-cover" />
        </div>
        <div className="relative aspect-square bg-gray-900 rounded-lg border-[2px] border-[#e5e5e5] overflow-hidden">
          <Image
            src={ijulwebgis}
            alt="Project 3"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square bg-gray-900 rounded-lg border-[2px] border-[#e5e5e5] overflow-hidden">
          <Image
            src={moreProjects}
            alt="Project 4"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
