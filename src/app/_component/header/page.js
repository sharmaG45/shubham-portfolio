'use client';
import navMenu from "@/app/assets/navMenu.json";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import ShubhamLogo from "../logo/page";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Close menu when resizing window to desktop view
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="bg-white  fixed top-0 left-0 w-full z-50">
            <nav className="container mx-auto flex justify-between items-center py-4 px-6">

                {/* Logo */}
                <div className="text-2xl font-bold uppercase text-amber-500">
                    <ShubhamLogo />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex gap-8 text-gray-800 font-semibold uppercase text-lg">
                    {navMenu.map((menu, index) => (
                        <li key={index} className="relative group">
                            <a
                                href={menu.link}
                                className="px-4 py-2 transition duration-300 group-hover:text-amber-500"
                            >
                                {menu.title}
                            </a>
                            {/* Animated Underline */}
                            <span className="absolute left-0 bottom-0 w-0 h-1 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    ))}
                </ul>


                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <IoMdMenu className="text-3xl cursor-pointer" onClick={() => setIsOpen(true)} />
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                        className="fixed top-0 right-0 w-4/5 max-w-xs h-full bg-white/80 backdrop-blur-xl shadow-2xl z-50 flex flex-col p-6 border-l border-gray-200"
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 text-gray-700 text-3xl hover:text-red-500 transition duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            <IoMdClose />
                        </button>

                        {/* Navigation Menu */}
                        <ul className="flex flex-col gap-6 text-lg font-bold text-gray-800 uppercase mt-10">
                            {navMenu.map((menu, index) => (
                                <li key={index} className="relative group">
                                    <a
                                        href={menu.link}
                                        className="block py-3 px-6 rounded-lg text-center transition-all duration-300 bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-md group-hover:scale-105"
                                    >
                                        {menu.title}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Decorative Lines */}
                        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"></div>
                    </motion.div>
                )}
            </AnimatePresence>

        </header>
    );
};

export default Header;
