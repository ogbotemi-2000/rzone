"use client"
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {FlipLink} from  './animations/flipLInk';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleNav = () => {
    setMenuOpen (!menuOpen);
  }

  return (
    <nav className="max-container fixed z-10 max-w-2 w-full h-20 bg-blue-500 shadow-xl rounded-b-xl mb-40">
    <div className=" relative flex justify-between item-center rounded-b-lg w-full h-full px-4 2x1:px-16 py-.004">
      <Link href="/">
        <Image
          src='/Artboard 2.png'
          alt='map'
          width={100} 
          height={70}
          className="cursor pointer"
        />
      
      </Link>
    <div className="py-8 text-white hidden sm:flex">
    <ul className="hidden sm:flex">
      <Link href="/#">
      <li className="ml-10 hover:border-b-2 hover:text-blue-200 uppercase text-base">
        <FlipLink>Home</FlipLink>
      </li>
      </Link>

      <Link href="/About_Us">
      <li className="ml-10 hover:border-b-2 uppercase text-base">About Us</li>
        </Link>

      <Link href="/Tracking">
      <li className="ml-10 hover:border-b-2 uppercase text-base">Tracking</li>
      </Link>

      <Link href="/Ship_Now">
      <li className="ml-10 hover:border-b-2 uppercase text-base">Ship Now</li>
      </Link>

      <Link href="/Contact_Us">
      <li className="ml-10 hover:border-b-2 uppercase text-base">Contact Us</li>
      </Link>
    </ul>
    <div className="hidden mx-auto max-w-xl md:items-center md:flex md:px-8">
        <Button
          type="button"
          title="Get a Quote"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
    </div>
      <Image 
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        <div onClick={handleNav} className="md:hidden cursor-pointer pl-24 mt-12">
        <AiOutlineMenu size={25} />
        </div>
      </div>
      <div className={
        menuOpen
        ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-blue-500 z-10 p-20 mt-5 ease-in duration-500"
        : "fixed left-[-100%] top-0 p-10 duration-500"
      }>
        <div className="flex w-full items-center justify-end">
        <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
        <AiOutlineClose size={25} />
        </div>
        </div>
        <div className="flex-col py-2 min:text-sm text-white hover:border-b-2 hover:text-gray-20">
          <ul>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
                >
                  Home
              </li>
            </Link>

            <Link href="About_Us">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
                >
                  About Us
              </li>
            </Link>

            <Link href="Tracking">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
                >
                  Tracking
              </li>
            </Link>

            <Link href="Ship_Now">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
                >
                  Ship Now
              </li>
            </Link>

            <Link href="Contact_Us">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
                >
                  Contact Us
              </li>
            </Link>

            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
                >
                  <Button
          type="button"
          title="Get a Quote"
          icon="/user.svg"
          variant="btn_dark_green"
        />
              </li>
            </Link>

          </ul>
        </div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar