import Image from "next/image";
import { Button } from "@/components/ui/button";
import { dpuprText, geopediaText, gislabText } from "@/app/images";
import { BsClockHistory } from "react-icons/bs";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";

export default function Projects() {
  return (
    <section id="projects" className="border border-[#e5e5e5] p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">My Projects</h2>

        {/* <Button variant="ghost" color="black" size="icon">
          <span className="sr-only">View all projects</span>➜
        </Button> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* DPUPR Project */}
        <HoverCard openDelay={100} closeDelay={100}>
          <HoverCardTrigger asChild>
            <div className="relative aspect-square bg-white rounded-lg border-[2px] border-[#e5e5e5] overflow-hidden cursor-pointer">
              <Image
                src={dpuprText}
                alt="Project 1"
                fill
                className="object-cover p-2"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex space-x-4 bg-white p-4 rounded-lg shadow-md border border-[#e5e5e5]">
              <div className="space-y-1">
                <h3 className="text-md font-bold">DPUPR Project</h3>
                <p className="text-sm text-gray-500">
                  A GIS-based web application for public works and spatial
                  planning.
                  <a
                    href="https://izulhq.github.io/magangDPUPR"
                    className="text-sm text-blue-600 hover:underline ml-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View project ↗
                  </a>
                </p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>

        {/* Geopedia Project */}
        <HoverCard openDelay={100} closeDelay={100}>
          <HoverCardTrigger asChild>
            <div className="relative aspect-square bg-white rounded-lg border-[2px] border-[#e5e5e5] overflow-hidden cursor-pointer">
              <Image
                src={geopediaText}
                alt="Project 2"
                fill
                className="object-cover p-2"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex space-x-4 bg-white p-4 rounded-lg shadow-md border border-[#e5e5e5]">
              <div className="space-y-1">
                <h3 className="text-md font-bold">Geopedia</h3>
                <p className="text-sm text-gray-500">
                  An interactive geographic learning platform.
                  <a
                    href="https://geopedia.ijul.my.id"
                    className="text-sm text-blue-600 hover:underline ml-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View project ↗
                  </a>
                </p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>

        {/* GISLab Project */}
        <HoverCard openDelay={100} closeDelay={100}>
          <HoverCardTrigger asChild>
            <div className="relative aspect-square bg-white rounded-lg border-[2px] border-[#e5e5e5] overflow-hidden cursor-pointer">
              <Image
                src={gislabText}
                alt="Project 3"
                fill
                className="object-cover p-2"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex space-x-4 bg-white p-4 rounded-lg shadow-md border border-[#e5e5e5]">
              <div className="space-y-1">
                <h3 className="text-md font-bold">GISLab</h3>
                <p className="text-sm text-gray-500">
                  A comprehensive GIS laboratory management system.
                  <a
                    href="https://gis.ijul.my.id"
                    className="text-sm text-blue-600 hover:underline ml-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View project ↗
                  </a>
                </p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>

        {/* Coming Soon Card */}
        <div className="relative aspect-square bg-white rounded-lg border-[2px] border-[#e5e5e5] overflow-hidden flex flex-col items-center justify-center">
          <BsClockHistory className="text-4xl mb-2" />
          <p className="text-center text-xs font-bold">
            More Projects
            <br />
            Coming Soon
          </p>
        </div>
      </div>
    </section>
  );
}
