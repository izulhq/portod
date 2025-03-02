import Image from "next/image";
import Link from "next/link";
import { Twitter, Linkedin, Youtube } from "lucide-react";
import {
  FaDiscord,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  iconUns,
  dpupr,
  geopedia,
  ijulwebgis,
  moreProjects,
  arcgis,
  qgis,
  js,
  gee,
} from "./images";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-black p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <Image
              src="/images/icon.png"
              alt="Profile"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <h1 className="text-2xl font-extrabold">Muhammad Izzulhaq</h1>
              <p className="text-gray-500 font-medium">
                Geography Enthusiast and Web Developer
              </p>
            </div>
          </div>

          <div className="max-w-4xl space-y-6">
            <p className="text-lg leading-relaxed">
              I am a student at
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button
                    variant="outline"
                    className="mx-2 rounded-lg text-black font-medium px-2"
                  >
                    Sebelas Maret University
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <Image
                        src={iconUns}
                        alt="Logo UNS"
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-md font-bold whitespace-nowrap">
                        Sebelas Maret University
                      </h3>
                      <p className="text-sm text-gray-500">
                        Sebelas Maret University is a public university in
                        Surakarta, Indonesia, and is ranked among the top 10
                        universities in Indonesia.
                        <a
                          href="https://uns.ac.id/en"
                          className="text-sm text-blue-600 hover:underline ml-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read more ↗
                        </a>
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              majoring in Geography.<br></br>I am also like to cook up some
              individuals projects that are geography-related.<br></br>
              So, welcome to my website, where I am the one who cooks!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="outline"
                className="rounded-full font-medium hover:bg-gradient-to-br from-blue-700 to-blue-400 hover:text-white flex items-center space-x-2"
                asChild
              >
                <Link
                  href="https://github.com/izulhq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>Github</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                className="rounded-full font-medium hover:bg-gradient-to-br from-blue-700 to-blue-400 hover:text-white flex items-center space-x-2"
                asChild
              >
                <Link
                  href="https://www.linkedin.com/in/izulhq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                  <span>Linkedin</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                className="rounded-full font-medium hover:bg-gradient-to-br from-blue-700 to-blue-400 hover:text-white flex items-center space-x-2"
                asChild
              >
                <Link
                  href="https://discordapp.com/users/296253359214690304"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDiscord className="w-5 h-5" />
                  <span>Discord</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                className="rounded-full font-medium hover:bg-gradient-to-br from-blue-700 to-blue-400 hover:text-white flex items-center space-x-2"
                asChild
              >
                <Link
                  href="https://www.instagram.com/izulhq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="w-5 h-5" />
                  <span>Instagram</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Projects Section */}
          <section id="projects">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">My Projects</h2>
              <Button variant="ghost" color="black" size="icon">
                <span className="sr-only">View all projects</span>→
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="relative aspect-square bg-gray-900 rounded-lg border-[2px] border-[#e5e5e5] overflow-hidden">
                <Image
                  src={dpupr}
                  alt="Project 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square bg-gray-900 rounded-lg border-[2px] border-[#e5e5e5] overflow-hidden">
                <Image
                  src={geopedia}
                  alt="Project 2"
                  fill
                  className="object-cover"
                />
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

          {/* Stack Section */}
          <section
            id="stack"
            className="bg-gradient-to-br from-blue-700 to-blue-500 rounded-xl p-8"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-white text-2xl font-medium">My Stack</h2>
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
                  src={ijulwebgis}
                  alt="IJUL WebGIS"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Contact and Clients Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Section */}
            <section
              id="contact"
              className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-8"
            >
              <h2 className="text-white text-2xl font-bold mb-4">Contact</h2>
              <p className="text-gray-400 mb-4">
                Interested in working together?
              </p>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4"
              >
                <span className="sr-only">Contact me</span>→
              </Button>
            </section>

            {/* Happy Clients Section */}
            <section id="clients" className="bg-gray-900 rounded-xl p-8">
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-white text-4xl font-bold mb-4">100%</h3>
              <p className="text-gray-400">Happy Clients</p>
              <div className="flex -space-x-2 mt-4">
                {[1, 2, 3].map((i) => (
                  <Image
                    key={i}
                    src="/placeholder.svg"
                    alt={`Client ${i}`}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-gray-900"
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center space-y-4 pt-8 border-t border-gray-800">
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <Twitter className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <Youtube className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="text-gray-400 text-sm text-center">
              <p>© by UIhub in Framer</p>
              <div className="flex gap-4 justify-center">
                <Link href="#" className="hover:text-white">
                  Licensing
                </Link>
                <Link href="#" className="hover:text-white">
                  404
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
