import Image from "next/image";
import { Button } from "@/components/ui/button";
import { arcgis, qgis, js, gee, nextjs } from "@/app/images";

export default function Stacks() {
  return (
    <section
      id="stack"
      className="bg-gradient-to-br from-blue-700 to-blue-500 rounded-xl p-8"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white text-2xl font-bold">My Stack</h2>
        <Button variant="ghost" size="icon" className="text-white">
          <span className="sr-only">View all tools</span>→
        </Button>
      </div>
      <div className="flex gap-4">
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden">
          <Image
            src={arcgis}
            alt="ArcGIS"
            width={36}
            height={36}
            className="object-cover"
          />
        </div>
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden">
          <Image
            src={qgis}
            alt="QGIS"
            width={36}
            height={36}
            className="object-cover"
          />
        </div>
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden">
          <Image
            src={gee}
            alt="Google Earth Engine"
            width={36}
            height={36}
            className="object-cover"
          />
        </div>
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden">
          <Image
            src={js}
            alt="Javascript"
            width={36}
            height={36}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden">
          <Image
            src={nextjs}
            alt="NextJS"
            width={36}
            height={36}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
