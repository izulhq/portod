"use client";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import Image from "next/image";
import { Button } from "./ui/button";
import { iconUns, profile } from "@/app/images";
import Link from "next/link";
import {
  FaCat,
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { useState, useEffect } from "react";

export default function Header() {
  const [isProfileCardOpen, setIsProfileCardOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Listen for resize events
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handleProfileClick = () => {
    if (isMobile) {
      setIsProfileCardOpen((prev) => !prev);
    }
  };

  return (
    <div className="md:mb-8 flex flex-col md:flex-row gap-4 md:gap-8">
      <div className="flex-shrink-0 flex justify-center items-center md:items-start md:justify-start w-full md:w-auto">
        <HoverCard
          openDelay={100}
          closeDelay={200}
          open={isMobile ? isProfileCardOpen : undefined}
          onOpenChange={(open) => {
            if (!isMobile) {
              // Let the HoverCard handle its own state on desktop
              return;
            }
            setIsProfileCardOpen(open);
          }}
        >
          <HoverCardTrigger asChild>
            <div className="cursor-pointer" onClick={handleProfileClick}>
              <Image
                src={profile}
                alt="Profile"
                width={160}
                height={160}
                className="rounded-full border-2 border-gray-500/50 shadow-lg mt-2"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-auto px-6 py-2 bg-white rounded-full shadow-md border border-[#e5e5e5] z-50">
            <div className="flex items-center space-x-2">
              <p className="text-sm font-medium">i love cats</p>
              <FaCat className="w-5 h-5 text-amber-600" />
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>

      <div className="flex-1">
        <div className="mb-4 text-center md:text-left">
          <h1 className="text-2xl font-extrabold">Muhammad Izzulhaq</h1>
          <p className="text-gray-500 font-medium">
            Geography Enthusiast and Web Developer
          </p>
        </div>

        <div className="max-w-4xl space-y-6">
          <p className="text-lg leading-relaxed text-justify">
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
                    <p className="text-sm text-gray-500 text-left">
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
            majoring in Geography.<br className="hidden md:inline"></br> I am
            also like to cook up some individuals projects that are
            geography-related.<br className="hidden md:inline"></br> So, welcome
            to my website, where I am the one who cooks!
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center md:justify-start gap-4">
            {/* GitHub */}
            <Link
              href="https://github.com/izulhq"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 md:w-auto md:h-auto md:px-4 md:py-2 space-x-3 flex items-center justify-center rounded-full md:rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gradient-to-br from-blue-700 to-blue-400 hover:text-white transition-colors"
            >
              <FaGithub className="w-5 h-5" />
              <span className="hidden md:inline ml-2">Github</span>
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/izulhq"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 md:w-auto md:h-auto md:px-4 md:py-2 space-x-3 flex items-center justify-center rounded-full md:rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gradient-to-br from-blue-700 to-blue-400 hover:text-white transition-colors"
            >
              <FaLinkedinIn className="w-5 h-5" />
              <span className="hidden md:inline ml-2">Linkedin</span>
            </Link>

            {/* Discord */}
            <Link
              href="https://discordapp.com/users/296253359214690304"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 md:w-auto md:h-auto md:px-4 md:py-2 space-x-3 flex items-center justify-center rounded-full md:rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gradient-to-br from-blue-700 to-blue-400 hover:text-white transition-colors"
            >
              <FaDiscord className="w-5 h-5" />
              <span className="hidden md:inline ml-2">Discord</span>
            </Link>

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/izulhq"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 md:w-auto md:h-auto md:px-4 md:py-2 space-x-3 flex items-center justify-center rounded-full md:rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gradient-to-br from-blue-700 to-blue-400 hover:text-white transition-colors"
            >
              <FaInstagram className="w-5 h-5" />
              <span className="hidden md:inline ml-2">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
