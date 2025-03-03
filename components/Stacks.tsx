import Image from "next/image";
import { Button } from "@/components/ui/button";
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
} from "@/app/images";
import { BsThreeDots } from "react-icons/bs";

export default function Stacks() {
  return (
    <section
      id="stack"
      className="bg-gradient-to-br from-blue-700 to-blue-500 rounded-xl p-6"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-2xl font-bold">My Stacks</h2>
      </div>

      {/* Added prolog */}
      <p className="text-white text-sm mb-5">
        These are the technologies and tools I use daily in my workflow.
        <br></br>From GIS software to web development frameworks.
      </p>

      <div className="flex gap-4">
        <HoverCard openDelay={0} closeDelay={0}>
          <HoverCardTrigger asChild>
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden cursor-pointer">
              <Image
                src={arcgis}
                alt="ArcGIS"
                width={36}
                height={36}
                className="object-cover"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="p-2 bg-white rounded-lg shadow-md border border-[#e5e5e5]">
            <p className="text-sm font-medium">ArcMap and ArcGIS Pro</p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard openDelay={0} closeDelay={0}>
          <HoverCardTrigger asChild>
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden cursor-pointer">
              <Image
                src={qgis}
                alt="QGIS"
                width={36}
                height={36}
                className="object-cover"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="p-2 bg-white rounded-lg shadow-md border border-[#e5e5e5]">
            <p className="text-sm font-medium">QGIS</p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard openDelay={0} closeDelay={0}>
          <HoverCardTrigger asChild>
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden cursor-pointer">
              <Image
                src={gee}
                alt="Google Earth Engine"
                width={36}
                height={36}
                className="object-cover"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="p-2 bg-white rounded-lg shadow-md border border-[#e5e5e5]">
            <p className="text-sm font-medium">Google Earth Engine</p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard openDelay={0} closeDelay={0}>
          <HoverCardTrigger asChild>
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden cursor-pointer">
              <Image
                src={js}
                alt="Javascript"
                width={36}
                height={36}
                className="object-cover rounded-lg"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="p-2 bg-white rounded-lg shadow-md border border-[#e5e5e5]">
            <p className="text-sm font-medium">Javascript</p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard openDelay={0} closeDelay={0}>
          <HoverCardTrigger asChild>
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden cursor-pointer">
              <Image
                src={nextjs}
                alt="NextJS"
                width={36}
                height={36}
                className="object-cover"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="p-2 bg-white rounded-lg shadow-md border border-[#e5e5e5]">
            <p className="text-sm font-medium">NextJS</p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard openDelay={0} closeDelay={0}>
          <HoverCardTrigger asChild>
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden cursor-pointer">
              <Image
                src={photoshop}
                alt="Photoshop"
                width={36}
                height={36}
                className="object-cover"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="p-2 bg-white rounded-lg shadow-md border border-[#e5e5e5]">
            <p className="text-sm font-medium">Photoshop</p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard openDelay={0} closeDelay={0}>
          <HoverCardTrigger asChild>
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden cursor-pointer">
              <Image
                src={premiere}
                alt="Premiere Pro"
                width={36}
                height={36}
                className="object-cover"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="p-2 bg-white rounded-lg shadow-md border border-[#e5e5e5]">
            <p className="text-sm font-medium">Premiere Pro</p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard openDelay={0} closeDelay={0}>
          <HoverCardTrigger asChild>
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden">
              <BsThreeDots className="w-6 h-6" />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="p-2 bg-white rounded-lg shadow-md border border-[#e5e5e5]">
            <p className="text-sm font-medium">And more ...</p>
          </HoverCardContent>
        </HoverCard>
      </div>
    </section>
  );
}
