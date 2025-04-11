"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { geopedia, gislab, gameServer } from "@/app/images";
// import { BsClockHistory } from "react-icons/bs";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";

export default function Projects() {
  const [openStates, setOpenStates] = useState({
    dpupr: false,
    geopedia: false,
    gislab: false,
    gameServer: false,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpenStates({
          dpupr: false,
          geopedia: false,
          gislab: false,
          gameServer: false,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="projects"
      className="border border-[#e5e5e5] bg-white p-4 rounded-lg shadow-md"
    >
      <div className="flex items-center mb-4 gap-4">
        <h2 className="text-2xl font-bold">Projects</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* GISLab Project */}
        <HoverCard
          open={openStates.gislab}
          onOpenChange={(open) =>
            setOpenStates((prev) => ({ ...prev, gislab: open }))
          }
          openDelay={100}
          closeDelay={100}
        >
          <HoverCardTrigger asChild>
            <div
              className="relative aspect-square bg-white rounded-lg border-[2px] border-[#e5e5e5] overflow-hidden cursor-pointer"
              onClick={() => {
                if (window.innerWidth < 768) {
                  setOpenStates((prev) => ({ ...prev, gislab: !prev.gislab }));
                }
              }}
            >
              <Image
                src={gislab}
                alt="Project 3"
                fill
                className="object-cover p-2"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 z-50">
            <div className="flex space-x-4 bg-white p-4 rounded-lg shadow-md border border-[#e5e5e5]">
              <div className="space-y-1">
                <h3 className="text-md font-bold">GIS Lab</h3>
                <p className="text-sm text-gray-500">
                  A comprehensive GIS (Geography Information System) laboratory
                  management system.
                  <a
                    href="https://gis.izulhq.me"
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
        <HoverCard
          open={openStates.geopedia}
          onOpenChange={(open) =>
            setOpenStates((prev) => ({ ...prev, geopedia: open }))
          }
          openDelay={100}
          closeDelay={100}
        >
          <HoverCardTrigger asChild>
            <div
              className="relative aspect-square bg-white rounded-lg border-[2px] border-[#e5e5e5] overflow-hidden cursor-pointer"
              onClick={() => {
                if (window.innerWidth < 768) {
                  setOpenStates((prev) => ({
                    ...prev,
                    geopedia: !prev.geopedia,
                  }));
                }
              }}
            >
              <Image
                src={geopedia}
                alt="Project 2"
                fill
                className="object-cover p-2"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 z-50">
            <div className="flex space-x-4 bg-white p-4 rounded-lg shadow-md border border-[#e5e5e5]">
              <div className="space-y-1">
                <h3 className="text-md font-bold">Geopedia</h3>
                <p className="text-sm text-gray-500">
                  An interactive geography (Indonesian) learning platform for
                  high school students.
                  <a
                    href="https://geopedia.izulhq.me"
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

        {/* game servers */}
        <HoverCard
          open={openStates.gameServer}
          onOpenChange={(open) =>
            setOpenStates((prev) => ({ ...prev, gameServer: open }))
          }
          openDelay={100}
          closeDelay={100}
        >
          <HoverCardTrigger asChild>
            <div
              className="relative aspect-square bg-white rounded-lg border-[2px] border-[#e5e5e5] overflow-hidden cursor-pointer"
              onClick={() => {
                if (window.innerWidth < 768) {
                  setOpenStates((prev) => ({
                    ...prev,
                    gameServer: !prev.gameServer,
                  }));
                }
              }}
            >
              <Image
                src={gameServer}
                alt="Project 1"
                fill
                className="object-cover p-2"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 z-50">
            <div className="flex space-x-4 bg-white p-4 rounded-lg shadow-md border border-[#e5e5e5]">
              <div className="space-y-1">
                <h3 className="text-md font-bold">Game Servers</h3>
                <p className="text-sm text-gray-500">
                  A collection of game servers I host for me and my friends.
                  <a
                    href="https://play.izulhq.me"
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
        <div className="relative aspect-square bg-white rounded-lg border-[2px] border-[#e5e5e5] overflow-hidden flex flex-col items-center justify-center gap-2">
          <div className="flex space-x-2 mb-2">
            <div
              className="w-3 h-3 bg-gray-600 rounded-full animate-pulse"
              style={{ animationDuration: "1.5s" }}
            ></div>
            <div
              className="w-3 h-3 bg-gray-600 rounded-full animate-pulse"
              style={{ animationDuration: "1.5s", animationDelay: "0.5s" }}
            ></div>
            <div
              className="w-3 h-3 bg-gray-600 rounded-full animate-pulse"
              style={{ animationDuration: "1.5s", animationDelay: "1s" }}
            ></div>
          </div>
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
