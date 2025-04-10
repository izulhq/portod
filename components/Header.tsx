import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import Image from "next/image";
import { Button } from "./ui/button";
import { iconUns } from "@/app/images";
import Link from "next/link";
import {
  FaCat,
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { profile } from "@/app/images";

export default function Header() {
  return (
    <div className="mb-10 flex flex-col md:flex-row gap-8">
      <div className="flex-shrink-0">
        <HoverCard openDelay={100} closeDelay={200}>
          <HoverCardTrigger asChild>
            <div className="cursor-pointer">
              <Image
                src={profile}
                alt="Profile"
                width={160}
                height={160}
                className="rounded-full border-2 border-gray-500/50 shadow-lg mt-2"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-auto px-6 py-2 bg-white mt-2 rounded-full shadow-md border border-[#e5e5e5] z-50">
            <div className="flex items-center space-x-2">
              <p className="text-sm font-medium">i love cats</p>
              <FaCat className="w-5 h-5 text-amber-600" />
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>

      <div className="flex-1">
        <div className="mb-4">
          <h1 className="text-2xl font-extrabold">Muhammad Izzulhaq</h1>
          <p className="text-gray-500 font-medium">
            Geography Enthusiast and Web Developer
          </p>
        </div>

        <div className="max-w-4xl space-y-6">
          <p className="text-lg leading-relaxed">
            I am a student at
            <HoverCard openDelay={200} closeDelay={300}>
              <HoverCardTrigger asChild>
                <Button
                  variant="outline"
                  className="mx-2 rounded-lg text-black font-medium px-2"
                >
                  Sebelas Maret University
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex space-x-4 bg-white p-4 rounded-lg shadow-md border border-[#e5e5e5]">
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
              className="rounded-full font-medium shadow-sm hover:bg-gradient-to-br from-blue-700 to-blue-400 hover:text-white flex items-center space-x-2"
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
              className="rounded-full font-medium shadow-sm hover:bg-gradient-to-br from-blue-700 to-blue-400 hover:text-white flex items-center space-x-2"
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
              className="rounded-full font-medium shadow-sm hover:bg-gradient-to-br from-blue-700 to-blue-400 hover:text-white flex items-center space-x-2"
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
              className="rounded-full font-medium shadow-sm hover:bg-gradient-to-br from-blue-700 to-blue-400 hover:text-white flex items-center space-x-2"
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
    </div>
  );
}
