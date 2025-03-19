'use client';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

                {/* Left - Brand Name */}
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h2 className="text-2xl font-bold uppercase text-amber-500">Shubham</h2>
                    <p className="text-gray-400 text-sm">Full Stack Developer | MERN & Next.js</p>
                </div>

                {/* Center - Navigation */}
                <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-400 text-sm">
                    <li><a href="#" className="hover:text-amber-500">Home</a></li>
                    <li><a href="#" className="hover:text-amber-500">About</a></li>
                    <li><a href="#" className="hover:text-amber-500">Projects</a></li>
                    <li><a href="#" className="hover:text-amber-500">Contact</a></li>
                </ul>

                {/* Right - Social Media Icons */}
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
                        <FaLinkedin />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
                        <FaTwitter />
                    </a>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-6 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
                <p>&copy; {new Date().getFullYear()} Shubham. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
