'use client';
import navMenu from "@/app/assets/navMenu.json";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

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
                    Shubham
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
                    {navMenu.map((menu, index) => (
                        <li key={index}>
                            <a href="#" className="hover:text-amber-500 transition duration-300">{menu.title}</a>
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
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -100 }}
                        transition={{ duration: 0.4 }}
                        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className="mobile-menu bg-white text-center w-4/5 max-w-sm rounded-xl p-6 shadow-lg relative"
                        >
                            <button className="absolute top-4 right-4 text-gray-700 text-3xl" onClick={() => setIsOpen(false)}>
                                <IoMdClose />
                            </button>

                            <ul className="flex flex-col gap-6 text-lg font-semibold text-gray-800 mt-4">
                                {navMenu.map((menu, index) => (
                                    <li key={index}>
                                        <a href="#" className="hover:text-amber-500 transition duration-300">{menu.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
