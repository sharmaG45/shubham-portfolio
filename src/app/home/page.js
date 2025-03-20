'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaBriefcase, FaPhone, FaUniversity, FaFacebook, FaTwitter, FaChevronDown, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import Image from 'next/image';
import { useRef } from "react";

const HomePage = () => {

    const [expanded, setExpanded] = useState(null);

    const projects = [
        {
            name: 'Jetquins Travels',
            tools: ['HTML', 'CSS', 'React', 'NextJS', 'Firebase', 'RESTful API'],
            myRole: 'Full Stack Developer',
            description: `Developed RESTful APIs for user registration, login, profile management, and CRUD operations, ensuring efficient data handling and seamless authentication. Optimized frontend performance to enhance responsiveness across devices. Integrated OTP-based email verification for secure password recovery. Implemented a 'Connect with Us' feature, enabling users to raise concerns anytime, increasing customer satisfaction by over 60%.`,
            link: 'https://jetquins-travels-i5nw.vercel.app/'
        },
        {
            name: 'GetPixelSecurity',
            tools: ['React', 'NextJS', 'Firebase', 'Node.js', 'Express', 'HTML', 'CSS'],
            myRole: 'Full Stack Developer',
            description: `Developed and maintained GetPixelSecurity, an e-commerce platform specializing in cybersecurity products like network firewalls and encryption tools, using Next.js, Firebase, and APIs. Implemented secure authentication, optimized frontend performance, and integrated dynamic product management. Ensured seamless transactions, real-time updates, and enhanced user experience with responsive design and efficient data handling.`,
            link: 'https://get-pixel-security.vercel.app/'
        },
        {
            name: 'Cybertron',
            tools: ['React', 'Next.js', 'CSS', 'Bootstrap'],
            myRole: 'Frontend Developer',
            description: `Cybertron is a modern web application built using React and Next.js, designed to provide a seamless user experience with optimized performance. The project features responsive UI components, dynamic routing, and efficient state management. Leveraging Bootstrap and custom CSS, the interface is visually appealing and mobile-friendly. As a Frontend Developer, I was responsible for designing and implementing key UI components, improving page responsiveness, and ensuring smooth navigation throughout the application.`,
            link: 'https://cybertron-flame.vercel.app/'
        },
        {
            name: 'Personal Portfolio Website',
            tools: ['React', 'Next.js', 'Tailwind CSS'],
            myRole: 'Frontend Developer',
            description: `Created a personal portfolio showcasing my projects and skills. Used Next.js for optimized performance and Framer Motion for smooth animations.`,
            link: 'https://shubham-portfolio-tan.vercel.app/'
        }
    ];


    const education = [
        {
            "course": "Master of Computer Applications (MCA)",
            "university": "Cochin University of Science and Technology (CUSAT), Kochi, Kerala",
            "session": "2022 - 2024"
        },
        {
            "course": "Bachelor of Computer Applications (BCA)",
            "university": "Babasaheb Bhimrao Ambedkar Bihar University (BRABU), Muzaffarpur , Bihar",
            "session": "2018 - 2021"
        },
        {
            "course": "Higher Secondary Education (12th)",
            "university": "BSEB, Patna",
            "session": "2016 - 2018"
        }
    ]

    const skills = [
        { name: "HTML", img: "/assets/skill/html.ed6aaa50.svg" },
        { name: "CSS", img: "/assets/skill/css.e5e99f36.svg" },
        { name: "JavaScript", img: "/assets/skill/javascript.b472cbc1.svg" },
        { name: "React", img: "/assets/skill/react.512a3a7e.svg" },
        { name: "Next.js", img: "/assets/skill/nextJS.99e26750.svg" },
        { name: "Node.js", img: "/assets/skill/nodejs.svg" },
        { name: "MongoDB", img: "/assets/skill/mongoDB.d8d2b67f.svg" },
        { name: "Firebase", img: "/assets/skill/firebase.20c6dcf8.svg" },
        { name: "Bootstrap", img: "/assets/skill/bootstrap.9e6ddba8.svg" },
        { name: "Python", img: "/assets/skill/python-svgrepo-com.svg" },
        { name: "Java", img: "/assets/skill/java-4-logo-svgrepo-com.svg" },
        { name: "MySql", img: "/assets/skill/mysql.2ddb80d9.svg" },
        { name: "Git", img: "/assets/skill/git.21d80414.svg" },
        { name: "Tailwind CSS", img: "/assets/skill/tailwind.c0bbaf6f.svg" },

    ];

    const experiences = [
        {
            role: "Software Developer",
            company: "Jetquins Travels PVT LTD",
            duration: "Oct 2024 - Present",
            description: "Developed REST APIs for user registration, login, and profile management, ensuring seamless authentication and user experience and Implemented CRUD operations to enable efficient data handling and user account management and Focused on frontend performance optimization, improving load times and responsiveness across devices"
        },
        {
            role: "Full Stack Developer",
            company: "Torc InfoTech",
            duration: "Dec 2023 - Apr 2024",
            description: "Developed and maintained web applications using MERN stack. Worked on Frontend, Backend, authentication, API integrations, and performance optimization."
        },
        {
            role: "Web Development Intern",
            company: "The Sparks Foundation",
            duration: "Sep 2023 - Dec 2023",
            description: "Built a simple banking system using HTML, CSS, Bootstrap, PHP, and MySQL. Enhanced UI/UX and optimized database queries."
        }
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className="container mx-auto px-6" >

            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-between py-16 gap-10 px-6">
                {/* Left Section */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 text-center md:text-left max-w-xl mx-auto md:mx-0 p-4"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Hi, I'm <span className="text-amber-500">Shubham Kumar</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-700">
                        Full Stack Developer | MERN & Next.js Enthusiast
                    </p>

                    {/* Social Media Links */}
                    <div className="flex gap-6 mt-6 justify-center md:justify-start text-3xl">
                        <a href="https://github.com/sharmaG45?tab=repositories" target="_blank" className="text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-110">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/shubham-kumar-8743731b3/" target="_blank" className="text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-110">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:cusat.shubhamdca@gmail.com" className="text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-110">
                            <FaEnvelope />
                        </a>
                        <a href="https://leetcode.com/u/shubhamk45/" target="_blank" className="text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-110">
                            <SiLeetcode />
                        </a>

                        <a href="https://www.geeksforgeeks.org/user/shubham25u1/" target="_blank" className="text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-110">
                            <SiGeeksforgeeks />
                        </a>
                    </div>

                    {/* Buttons Section */}
                    <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
                        {/* Resume Button */}
                        <a href="/assets/resume/ShubhamKrResume.pdf" download className="flex items-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-amber-600 transition-transform transform hover:scale-105">
                            <FaDownload />
                            Resume
                        </a>

                        {/* Contact Me Button */}
                        <button
                            onClick={() => {
                                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="flex items-center gap-2 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-800 transition-transform transform hover:scale-105 bg-[#1a1443]"
                        >
                            Contact Me
                        </button>
                    </div>
                </motion.div>

                {/* Right Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 mt-20"
                >
                    <div className="relative rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#1a1443] to-[#1a1443] p-10 shadow-lg ">
                        {/* Top Bar */}
                        <div className="flex space-x-2">
                            <div className="h-3 w-3 rounded-full bg-red-400"></div>
                            <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                            <div className="h-3 w-3 rounded-full bg-green-200"></div>
                        </div>

                        {/* Code Block */}
                        <div className="overflow-hidden border-t-2 border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
                            <code className="font-mono text-xs md:text-sm lg:text-base">
                                <div className="blink">
                                    <span className="mr-2 text-pink-500">const</span>
                                    <span className="mr-2 text-white">coder</span>
                                    <span className="mr-2 text-pink-500">=</span>
                                    <span className="text-gray-400">{'{'}</span>
                                </div>
                                <div className="ml-4 lg:ml-8">
                                    <span className="text-white">name:</span>
                                    <span className="text-gray-400">'</span>
                                    <span className="text-amber-300">Shubham Kumar</span>
                                    <span className="text-gray-400">',</span>
                                </div>
                                <div className="ml-4 lg:ml-8">
                                    <span className="text-white">skills:</span>
                                    <span className="text-gray-400">['</span>
                                    <span className="text-amber-300">React</span>
                                    <span className="text-gray-400">', '</span>
                                    <span className="text-amber-300">NextJS</span>
                                    <span className="text-gray-400">', '</span>
                                    <span className="text-amber-300">NodeJS</span>
                                    <span className="text-gray-400">', '</span>
                                    <span className="text-amber-300">Firebase</span>
                                    <span className="text-gray-400">', '</span>
                                    <span className="text-amber-300">MongoDB</span>
                                    <span className="text-gray-400">'],</span>
                                </div>
                                <div className="ml-4 lg:ml-8">
                                    <span className="text-white">hardWorker:</span>
                                    <span className="text-orange-400">true</span>,
                                </div>
                                <div className="ml-4 lg:ml-8">
                                    <span className="text-white">quickLearner:</span>
                                    <span className="text-orange-400">true</span>,
                                </div>
                                <div className="ml-4 lg:ml-8">
                                    <span className="text-white">problemSolver:</span>
                                    <span className="text-orange-400">true</span>,
                                </div>
                                <div className="ml-4 lg:ml-8">
                                    <span className="text-green-400">hireable:</span>
                                    <span className="text-orange-400">function</span>
                                    <span className="text-gray-400">() {'{'}</span>
                                </div>
                                <div className="ml-8 lg:ml-16">
                                    <span className="text-orange-400">return</span>
                                    <span className="text-gray-400">(</span>
                                </div>
                                <div className="ml-12 lg:ml-24">
                                    <span className="text-cyan-400">this.</span>
                                    <span className="mr-2 text-white">hardWorker</span>
                                    <span className="text-amber-300">&&</span>
                                </div>
                                <div className="ml-12 lg:ml-24">
                                    <span className="text-cyan-400">this.</span>
                                    <span className="mr-2 text-white">problemSolver</span>
                                    <span className="text-amber-300">&&</span>
                                </div>
                                <div className="ml-12 lg:ml-24">
                                    <span className="text-cyan-400">this.</span>
                                    <span className="mr-2 text-white">skills.length</span>
                                    <span className="mr-2 text-amber-300">&gt;=</span>
                                    <span className="text-orange-400">5</span>
                                </div>
                                <div className="ml-8 lg:ml-16">
                                    <span className="text-gray-400">);</span>
                                </div>
                                <div className="ml-4 lg:ml-8">
                                    <span className="text-gray-400">{'}'},</span>
                                </div>
                                <div>
                                    <span className="text-gray-400">{'}'};</span>
                                </div>
                            </code>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* About Me Section */}
            <section id="about" className="my-12 lg:my-16 relative px-6 ">
                {/* Side Label for Larger Screens */}
                <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
                    <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
                        ABOUT ME
                    </span>
                    <span className="h-36 w-[2px] bg-[#1a1443]"></span>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Text Section */}
                    <div className="order-2 lg:order-1">
                        <p className="font-bold mb-5 text-amber-500 text-xl uppercase">
                            Who I am?
                        </p>
                        <p className="text-gray-900 text-sm lg:text-lg">
                            I am Shubham Kumar, a passionate and self-driven Full-Stack Developer with expertise in JavaScript and modern web technologies. I enjoy building scalable, efficient, and user-friendly applications that enhance digital experiences. With strong problem-solving skills and a keen interest in exploring new technologies, I strive to develop innovative solutions.
                            <br />

                            I am always eager to learn, adapt, and contribute to projects that push boundaries. My goal is to create meaningful and impactful web applications that enhance user experiences and drive business efficiency.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center order-1 lg:order-2">
                        <Image
                            src="/assets/profile/pic4.png"
                            alt="Shubham"
                            width={280}
                            height={280}
                            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section id="experience" className="my-12 ">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-amber-500">Experience</h2>
                    <p className="text-gray-900 mt-2 text-lg">My work experience in the tech industry</p>
                </div>

                {/* Experience Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 ">
                    {experiences.map((exp, index) => (
                        <div key={index} className="bg-[#1a1443] text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <div className="flex items-center gap-3">
                                <FaBriefcase className="text-amber-500 text-2xl" />
                                <h3 className="text-xl font-semibold">{exp.role}</h3>
                            </div>
                            <p className="text-gray-400 mt-1">{exp.company}</p>
                            <p className="text-sm text-gray-300">{exp.duration}</p>
                            <p className="mt-4 text-gray-200 text-sm">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="relative z-10  my-12">
                {/* Section Title */}
                <div className="flex justify-center my-5 lg:py-8">
                    <div className="flex items-center">

                        <span className=" text-3xl md:text-4xl font-extrabold text-amber-500">
                            Skills
                        </span>

                    </div>
                </div>

                {/* Skills Carousel */}
                <div className="container mx-auto px-6">
                    <Slider {...settings}>
                        {skills.map((skill, index) => (
                            <div key={index} className="p-4">
                                <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-110 cursor-pointer">
                                    <div className="h-full w-full rounded-lg border border-gray-700 bg-[#1a1443] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500 p-6 flex flex-col items-center justify-center gap-3">
                                        <img src={skill.img} alt={skill.name} className="h-10 w-auto rounded-lg" />
                                        <p className="text-white text-sm sm:text-lg">{skill.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

            {/* Projects Section */}
            <section className="min-h-screen  px-6 flex flex-col items-center">
                {/* Title without background */}
                <h2 className="text-4xl font-extrabold text-amber-500 mb-10  pb-2">
                    Projects 
                </h2>

                {/* Project Cards with Background */}
                <div className="w-full max-w-3xl space-y-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-[#1a1443] rounded-xl shadow-xl transition-all duration-300">
                            <button
                                onClick={() => setExpanded(expanded === index ? null : index)}
                                className="w-full flex justify-between items-center p-5 text-xl font-semibold text-cyan-300 rounded-xl hover:bg-[#1a233a] transition duration-200"
                            >
                                {project.name}
                                {expanded === index ? (
                                    <FaChevronDown className="text-gray-400" />
                                ) : (
                                    <FaChevronRight className="text-gray-400" />
                                )}
                            </button>

                            <motion.div
                                initial={false}
                                animate={{ height: expanded === index ? "auto" : 0 }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 bg-[#1a1443] text-gray-300 rounded-b-xl shadow-lg">
                                    <pre className="text-sm md:text-base font-mono whitespace-pre-wrap bg-[#0e162f] p-4 rounded-lg border border-gray-700 text-white">
                                        <code>
                                            <span className="text-pink-500">const</span> {project.name.replace(/\s+/g, "")}{" "}
                                            = {"{"}
                                            <br />
                                            <span className="ml-4 text-white">name:</span> '
                                            <span className="text-gray-400">{project.name}</span>',
                                            <br />
                                            <span className="ml-4 text-white">tools:</span> {"["}
                                            {project.tools.map((tool, i) => (
                                                <span key={i} className="text-amber-300">
                                                    '{tool}'{i !== project.tools.length - 1 && ", "}
                                                </span>
                                            ))}
                                            {"]"}
                                            <br />
                                            <span className="ml-4 text-white">myRole:</span> '
                                            <span className="text-gray-400">{project.myRole}</span>',
                                            <br />
                                            <span className="ml-4 text-white">description:</span> '
                                            <span className="text-gray-400">{project.description}</span>',
                                            <br />
                                            {"};"}
                                        </code>
                                    </pre>

                                    <div className="mt-6 text-center">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-5 py-2 bg-amber-500 text-[#0a0d37] font-semibold rounded-lg shadow-md hover:bg-amber-600 transition duration-300"
                                        >
                                            View Project 🌍
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="my-12 lg:my-16 relative">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-amber-500">Education</h2>
                    <p className="text-gray-900 mt-2 text-lg">My academic background and qualifications</p>
                </div>

                {/* Education Container */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 px-4 ">
                    {/* Left-Side SVG Image */}
                    <div className="hidden lg:flex items-center justify-center rounded-lg transition-all duration-1000  hover:grayscale-0 hover:scale-110 cursor-pointer">
                        <img
                            src="/assets/images/edu.jpg"
                            alt="Education Illustration"
                            className="w-72 h-auto"
                        />
                    </div>

                    {/* Right-Side Education Details */}
                    <div className="w-full max-w-2xl">
                        {education.map((edu, index) => (
                            <div
                                key={index}
                                className="flex items-center bg-[#1a1443] text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 mb-6 "
                            >
                                {/* University Icon */}
                                <FaUniversity className="text-amber-500 text-3xl mr-6" />

                                {/* Education Details */}
                                <div>
                                    <h3 className="text-xl font-semibold">{edu.course}</h3>
                                    <p className="text-white mt-1">{edu.university}</p>
                                    <p className="text-sm text-white">{edu.session}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Contact Section */}
            <section id="contact" className="my-12 lg:my-16 relative px-6 lg:px-12">
                {/* Side Label for Larger Screens */}
                <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
                    <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
                        CONTACT
                    </span>
                    <span className="h-36 w-[2px] bg-[#1a1443]"></span>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Contact Information Section */}
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl font-extrabold text-amber-500 mb-6">Get in Touch</h2>
                        <p className="text-gray-900 text-sm lg:text-lg mb-4">
                            Have questions or want to work together? Feel free to reach out!
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <FaEnvelope className="text-xl text-amber-500" />
                                <p className="text-gray-900">cusat.shubhamdca@gmail.com</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaPhone className="text-xl text-amber-500" />
                                <p className="text-gray-900">+91 9097989707 </p>
                            </div>
                        </div>
                        {/* Social Media Links */}
                        <div className="flex space-x-4 mt-6">
                            <a href="https://www.facebook.com/shubhamsharma.shubhamsharms.1" className="text-amber-500 text-2xl hover:text-white">
                                <FaFacebook />
                            </a>
                            <a href="https://x.com/shubhamhjp" className="text-amber-500 text-2xl hover:text-white">
                                <FaTwitter />
                            </a>
                            <a href="https://www.linkedin.com/in/shubham-kumar-8743731b3/" className="text-amber-500 text-2xl hover:text-blue-950">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="order-1 lg:order-2 bg-white shadow-lg p-6 rounded-lg max-w-lg mx-auto">
                        <h3 className="text-2xl font-semibold text-[#1a1443] mb-4">Send Us a Message</h3>
                        <form className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" required />
                            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" required />
                            <textarea placeholder="Your Message" className="w-full p-3 border rounded" rows="4" required></textarea>
                            <button className="w-full bg-[#f59e0b] text-white p-3 rounded hover:bg-[#1a1443]">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
