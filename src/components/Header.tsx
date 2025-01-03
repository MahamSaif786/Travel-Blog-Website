import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Menu } from "lucide-react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header: React.FC = () => {
  return (
    <div className="  position-sticky  absolute w-full h-[80px] left-0 top-0 bg-[rgba(0,0,0,0.2)] flex items-center justify-between px-6 md:px-12 z-20">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link href="/home">
          <div className="relative w-[60px] h-[60px] cursor-pointer group">
            <Image
              src="/images/logo.png"
              alt="Logo"
              layout="fill"
              objectFit="cover"
              className="rounded-full transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gray-600 opacity-0 group-hover:opacity-50 rounded-full transition-opacity duration-300"></div>
          </div>
        </Link>

        {/* MA Travelers Text */}
        <span className="ml-4 text-lg md:text-xl font-bold bg-gradient-to-r from-gray-300 via-gray-300 to-gray-300 bg-clip-text text-transparent">
          MA Travelers
        </span>
      </div>

      {/* Menu and Icons */}
      <div className="flex items-center gap-6">
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center text-sm font-bold text-[#F8F9FA] gap-6">
          <li>
            <Link href="/" className="hover:underline cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link href="/articles" className="hover:underline cursor-pointer">
              Articles
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline cursor-pointer">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="hover:underline cursor-pointer">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Vertical Line */}
        <div className="hidden md:block w-[1px] h-6 bg-[#E5E5E5]"></div>

        {/* Social Icons */}
        <div className="hidden md:flex gap-4 text-[#F8F9FA]">
          <a
            href="https://www.facebook.com/share/1ThPmR6GrP/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              size={20}
              className="cursor-pointer hover:text-[#14B8A6]"
              aria-label="Facebook"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter
              size={20}
              className="cursor-pointer hover:text-[#14B8A6]"
              aria-label="Twitter"
            />
          </a>
          <a
            href="https://www.instagram.com/_maham_441/profilecard/?igsh=cWpqeXhpNm9zMDJo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              size={20}
              className="cursor-pointer hover:text-[#14B8A6]"
              aria-label="Instagram"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/maham-saif-996906306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn
              size={20}
              className="cursor-pointer hover:text-[#14B8A6]"
              aria-label="LinkedIn"
            />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden z-20">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6 text-[#F8F9FA]" />
            </SheetTrigger>
            <SheetContent className="bg-[#121212] text-[#F8F9FA]">
              {/* Mobile Menu */}
              <ul className="flex flex-col items-center text-sm font-bold gap-6 mt-20">
                <li>
                  <Link href="/" className="hover:underline cursor-pointer">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/articles"
                    className="hover:underline cursor-pointer"
                  >
                    Articles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:underline cursor-pointer"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="hover:underline cursor-pointer"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
              {/* Social Icons */}
              <div className="flex justify-center gap-4 mt-24">
                <a
                  href="https://facebook.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook
                    size={24}
                    className="cursor-pointer hover:text-[#14B8A6]"
                    aria-label="Facebook"
                  />
                </a>
                <a
                  href="https://twitter.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter
                    size={24}
                    className="cursor-pointer hover:text-[#14B8A6]"
                    aria-label="Twitter"
                  />
                </a>
                <a
                  href="https://instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    size={24}
                    className="cursor-pointer hover:text-[#14B8A6]"
                    aria-label="Instagram"
                  />
                </a>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn
                    size={24}
                    className="cursor-pointer hover:text-[#14B8A6]"
                    aria-label="LinkedIn"
                  />
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;
