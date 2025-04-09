"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import {
  arcgis,
  qgis,
  js,
  gee,
  nextjs,
  premiere,
  photoshop,
  wp, // Added WordPress import
} from "@/app/images";

export default function Skills() {
  const [openStates, setOpenStates] = useState({
    arcgis: false,
    qgis: false,
    gee: false,
    js: false,
    nextjs: false,
    photoshop: false,
    premiere: false,
    wordpress: false, // Added WordPress state
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpenStates({
          arcgis: false,
          qgis: false,
          gee: false,
          js: false,
          nextjs: false,
          photoshop: false,
          premiere: false,
          wordpress: false, // Added WordPress state
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="stack"
      className="bg-white rounded-lg p-6 border border-[#e5e5e5] shadow-md"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-black text-2xl font-bold">Technical Skills</h2>
      </div>

      <p className="text-black text-sm mb-5">
        These are the technologies and tools I use daily in my workflow.
        <br />
        From GIS software to web development frameworks.
      </p>

      <div className="grid grid-cols-4 md:grid-cols-8 gap-4 justify-center">
        {/* ArcGIS */}
        <HoverCard
          open={openStates.arcgis}
          onOpenChange={(open) =>
            setOpenStates((prev) => ({ ...prev, arcgis: open }))
          }
          openDelay={100}
          closeDelay={100}
        >
          <HoverCardTrigger asChild>
            <div
              className="w-16 h-16 md:w-12 md:h-12 border border-[#e5e5e5] shadow bg-white rounded-xl flex items-center justify-center overflow-hidden cursor-pointer"
              onClick={() => {
                if (window.innerWidth < 768) {
                  setOpenStates((prev) => ({ ...prev, arcgis: !prev.arcgis }));
                }
              }}
            >
              <Image
                src={arcgis}
                alt="ArcGIS"
                width={36}
                height={36}
                className="object-cover"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="p-2 bg-white rounded-lg shadow-md border border-[#e5e5e5] z-50">
            <p className="text-sm font-medium">ArcMap and ArcGIS Pro</p>
          </HoverCardContent>
        </HoverCard>

        {/* QGIS */}
        <HoverCard
          open={openStates.qgis}
          onOpenChange={(open) =>
            setOpenStates((prev) => ({ ...prev, qgis: open }))
          }
          openDelay={100}
          closeDelay={100}
        >
          <HoverCardTrigger asChild>
            <div
              className="w-16 h-16 md:w-12 md:h-12 border border-[#e5e5e5] shadow bg-white rounded-xl flex items-center justify-center overflow-hidden cursor-pointer"
              onClick={() => {
                if (window.innerWidth < 768) {
                  setOpenStates((prev) => ({ ...prev, qgis: !prev.qgis }));
                }
              }}
            >
              <Image
                src={qgis}
                alt="QGIS"
                width={36}
                height={36}
                className="object-cover"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="p-2 bg-white rounded-lg shadow-md border border-[#e5e5e5] z-50">
            <p className="text-sm font-medium">QGIS</p>
          </HoverCardContent>
        </HoverCard>

        {/* GEE */}
        <HoverCard
          open={openStates.gee}
          onOpenChange={(open) =>
            setOpenStates((prev) => ({ ...prev, gee: open }))
          }
          openDelay={100}
          closeDelay={100}
        >
          <HoverCardTrigger asChild>
            <div
              className="w-16 h-16 md:w-12 md:h-12 border border-[#e5e5e5] shadow bg-white rounded-xl flex items-center justify-center overflow-hidden cursor-pointer"
              onClick={() => {
                if (window.innerWidth < 768) {
                  setOpenStates((prev) => ({ ...prev, gee: !prev.gee }));
                }
              }}
            >
              <Image
                src={gee}
                alt="Google Earth Engine"
                width={36}
                height={36}
                className="object-cover"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="p-2 bg-white rounded-lg shadow-md border border-[#e5e5e5] z-50">
            <p className="text-sm font-medium">Google Earth Engine</p>
          </HoverCardContent>
        </HoverCard>

        {/* JS */}
        <HoverCard
          open={openStates.js}
          onOpenChange={(open) =>
            setOpenStates((prev) => ({ ...prev, js: open }))
          }
          openDelay={100}
          closeDelay={100}
        >
          <HoverCardTrigger asChild>
            <div
              className="w-16 h-16 md:w-12 md:h-12 border border-[#e5e5e5] shadow bg-white rounded-xl flex items-center justify-center overflow-hidden cursor-pointer"
              onClick={() => {
                if (window.innerWidth < 768) {
                  setOpenStates((prev) => ({ ...prev, js: !prev.js }));
                }
              }}
            >
              <Image
                src={js}
                alt="Javascript"
                width={36}
                height={36}
                className="object-cover rounded-lg"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="p-2 bg-white rounded-lg shadow-md border border-[#e5e5e5] z-50">
            <p className="text-sm font-medium">Javascript</p>
          </HoverCardContent>
        </HoverCard>

        {/* NextJS */}
        <HoverCard
          open={openStates.nextjs}
          onOpenChange={(open) =>
            setOpenStates((prev) => ({ ...prev, nextjs: open }))
          }
          openDelay={100}
          closeDelay={100}
        >
          <HoverCardTrigger asChild>
            <div
              className="w-16 h-16 md:w-12 md:h-12 border border-[#e5e5e5] shadow bg-white rounded-xl flex items-center justify-center overflow-hidden cursor-pointer"
              onClick={() => {
                if (window.innerWidth < 768) {
                  setOpenStates((prev) => ({ ...prev, nextjs: !prev.nextjs }));
                }
              }}
            >
              <Image
                src={nextjs}
                alt="NextJS"
                width={36}
                height={36}
                className="object-cover"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="p-2 bg-white rounded-lg shadow-md border border-[#e5e5e5] z-50">
            <p className="text-sm font-medium">NextJS</p>
          </HoverCardContent>
        </HoverCard>

        {/* WordPress */}
        <HoverCard
          open={openStates.wordpress}
          onOpenChange={(open) =>
            setOpenStates((prev) => ({ ...prev, wordpress: open }))
          }
          openDelay={100}
          closeDelay={100}
        >
          <HoverCardTrigger asChild>
            <div
              className="w-16 h-16 md:w-12 md:h-12 border border-[#e5e5e5] shadow bg-white rounded-xl flex items-center justify-center overflow-hidden cursor-pointer"
              onClick={() => {
                if (window.innerWidth < 768) {
                  setOpenStates((prev) => ({
                    ...prev,
                    wordpress: !prev.wordpress,
                  }));
                }
              }}
            >
              <Image
                src={wp}
                alt="WordPress"
                width={36}
                height={36}
                className="object-cover"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="p-2 bg-white rounded-lg shadow-md border border-[#e5e5e5] z-50">
            <p className="text-sm font-medium">WordPress</p>
          </HoverCardContent>
        </HoverCard>

        {/* Photoshop */}
        <HoverCard
          open={openStates.photoshop}
          onOpenChange={(open) =>
            setOpenStates((prev) => ({ ...prev, photoshop: open }))
          }
          openDelay={100}
          closeDelay={100}
        >
          <HoverCardTrigger asChild>
            <div
              className="w-16 h-16 md:w-12 md:h-12 border border-[#e5e5e5] shadow bg-white rounded-xl flex items-center justify-center overflow-hidden cursor-pointer"
              onClick={() => {
                if (window.innerWidth < 768) {
                  setOpenStates((prev) => ({
                    ...prev,
                    photoshop: !prev.photoshop,
                  }));
                }
              }}
            >
              <Image
                src={photoshop}
                alt="Photoshop"
                width={36}
                height={36}
                className="object-cover"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="p-2 bg-white rounded-lg shadow-md border border-[#e5e5e5] z-50">
            <p className="text-sm font-medium">Photoshop</p>
          </HoverCardContent>
        </HoverCard>

        {/* Premiere */}
        <HoverCard
          open={openStates.premiere}
          onOpenChange={(open) =>
            setOpenStates((prev) => ({ ...prev, premiere: open }))
          }
          openDelay={100}
          closeDelay={100}
        >
          <HoverCardTrigger asChild>
            <div
              className="w-16 h-16 md:w-12 md:h-12 border border-[#e5e5e5] shadow bg-white rounded-xl flex items-center justify-center overflow-hidden cursor-pointer"
              onClick={() => {
                if (window.innerWidth < 768) {
                  setOpenStates((prev) => ({
                    ...prev,
                    premiere: !prev.premiere,
                  }));
                }
              }}
            >
              <Image
                src={premiere}
                alt="Premiere Pro"
                width={36}
                height={36}
                className="object-cover"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="p-2 bg-white rounded-lg shadow-md border border-[#e5e5e5] z-50">
            <p className="text-sm font-medium">Premiere Pro</p>
          </HoverCardContent>
        </HoverCard>

        {/* More Button - Commented out
        <HoverCard
          open={openStates.more}
          onOpenChange={(open) =>
            setOpenStates((prev) => ({ ...prev, more: open }))
          }
        >
          <HoverCardTrigger asChild>
            <div
              className="w-16 h-16 md:w-12 md:h-12 border border-[#e5e5e5] shadow bg-white rounded-xl flex items-center justify-center overflow-hidden cursor-pointer"
              onClick={() => {
                if (window.innerWidth < 768) {
                  setOpenStates((prev) => ({ ...prev, more: !prev.more }));
                }
              }}
            >
              <BsThreeDots className="w-6 h-6" />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="p-2 bg-white rounded-lg shadow-md border border-[#e5e5e5] z-50">
            <p className="text-sm font-medium">And more ...</p>
          </HoverCardContent>
        </HoverCard>
        */}
      </div>
    </section>
  );
}
