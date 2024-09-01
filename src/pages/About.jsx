import { FaGithub, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function About() {
    return (
        <div className="container mx-auto p-4 m-5 md:p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                About Me
            </h1>{" "}
            <img
                className="w-48 h-48 rounded-full mr-4 hover:scale-105 transition ease-in-out duration-300 m-5 p-5"
                src="https://avatars.githubusercontent.com/u/73209315?v=4"
                alt="gali Boy"
            />
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:ml-8">
                    <p className="mb-4 text-gray-600 dark:text-gray-400">
                        Hi, my name is gali Boy and I'm a web developer. I'm
                        passionate about building scalable, efficient and
                        user-friendly web applications. I'm also a big fan of
                        open source and I try to contribute to the community as
                        much as I can.
                    </p>
                    <p className="mb-4 text-gray-600 dark:text-gray-400">
                        I'm currently working as a freelancer, and I'm open to
                        new projects and collaborations. If you need any help or
                        just want to chat, feel free to send me a message.
                    </p>
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                            My Skills
                        </h2>
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600 dark:text-gray-400">
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Tailwind CSS</li>
                            <li>Git</li>
                        </ul>
                        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white my-8">
                            My Experience
                        </h2>
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600 dark:text-gray-400">
                            <li>Freelancer</li>
                            
                        </ul>
                        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white my-8">
                            My Projects
                        </h2>
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600 dark:text-gray-400">
                            <li>
                                <a
                                    className="hover:underline"
                                    href="https://saadmangalib.netlify.app/"
                                >
                                    My Personal Website
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:underline"
                                    href="https://github.com/galiboy/galiboy-cli"
                                >
                                    My CLI Tool
                                </a>
                            </li>
                        </ul>
                        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white my-4">
                            Social Links
                        </h2>
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600 dark:text-gray-400">
                            <li>
                                <a
                                    href="https://github.com/saadman-galib"
                                    className="hover:underline"
                                    target="_blank"
                                >
                                    <FaGithub className="fa-2x" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/GalibSaadman"
                                    className="hover:underline"
                                    target="_blank"
                                >
                                    <FaFacebook className="fa-2x" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://x.com/GalibSaadman"
                                    className="hover:underline"
                                    target="_blank"
                                >
                                    <FaXTwitter className="fa-2x" />
                                </a>
                            </li>
                        </ul>
                        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white mt-8">
                            Download or View My Resume
                        </h2>
                        <div className="flex space-x-4">
                            <a
                                className="bg-cyan-900 hover:bg-cyan-950 text-white font-bold py-3 px-6 rounded"
                                href="/assets/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View
                            </a>
                            <button
                                className="bg-cyan-900 hover:bg-cyan-950 text-white font-bold py-3 px-6 rounded"
                                onClick={() => {
                                    const link = document.createElement("a");
                                    link.href = "/assets/resume.pdf";
                                    link.setAttribute("download", "resume.pdf");
                                    link.style.display = "none";
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                }}
                            >
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
