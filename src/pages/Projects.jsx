export default function Projects() {
  const projectsData = [
    {
      title: "LabelOneBangladesh",
      description: "A website for LabelOneBangladesh",
      tags: ["React.js"],
      githubLink: null,
      websiteLink: "https://www.labelonebangladesh.com/",
      image: "https://saadmangalib.netlify.app/projects/labelonebangladesh.png",
    },
    {
      title: "Vibo",
      description: "Vibo ui design with React.js",
      tags: ["React.js"],
      githubLink: "https://github.com/saadman-galib/Vibo",
      websiteLink: "https://vibo-saadman.netlify.app/",
      image: "https://saadmangalib.netlify.app/projects/vibo.png",
    },
    {
      title: "Equalizer landing page",
      description: "Equalizer landing page",
      tags: ["HTML", "SCSS"],
      githubLink: "https://github.com/saadman-galib/Equalizer-landing-page",
      websiteLink: "https://equalizer-landing-page.netlify.app/",
      image:
        "https://saadmangalib.netlify.app/projects/equalizer-landing-page.png",
    },
    {
      title: "Meet Landing Page",
      description: "Meet landing page",
      tags: ["HTML", "SCSS"],
      githubLink: "https://github.com/saadman-galib/Meet-landing-page",
      websiteLink: "https://meet-landing-page-saadman.netlify.app/",
      image: "https://saadmangalib.netlify.app/projects/meet-landing-page.png",
    },
    {
      title: "PixlNext",
      description: "Portfolio website for PixlNext",
      tags: ["Next.js", "Express.js", "Node.js"],
      githubLink: null,
      websiteLink: "https://www.pixlnext.com/",
      image: "https://saadmangalib.netlify.app/projects/pixlnext.png",
    },
    {
      title: "React Travel Website",
      description: "A travel website made with React.js",
      tags: ["React.js"],
      githubLink: "https://github.com/saadman-galib/react-travel-website",
      websiteLink: "https://react-travel-website-saadman.netlify.app/",
      image:
        "https://saadmangalib.netlify.app/projects/react-travel-website.png",
    },
    {
      title: "IoT Nexus",
      description: "A website about IoT",
      tags: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/saadman-galib/IoT-Nexus",
      websiteLink: "https://iot-nexus.netlify.app/",
      image: "https://saadmangalib.netlify.app/projects/iot-nexus.png",
    },
    {
      title: "Interactive Rating Component",
      description: "An interactive rating component",
      tags: ["HTML", "CSS", "JavaScript"],
      githubLink:
        "https://github.com/saadman-galib/Interactive-rating-component",
      websiteLink: "https://interactive-rating-component-tailwind.netlify.app/",
      image:
        "https://saadmangalib.netlify.app/projects/interactive-rating-component.png",
    },
    {
      title: "Vue Calculator App",
      description: "A simple calculator app made with Vue.js",
      tags: ["Vue.js"],
      githubLink: "https://github.com/saadman-galib/vue-calculator-app",
      websiteLink: "https://vuejs-calculator-app.netlify.app/",
      image: "https://saadmangalib.netlify.app/projects/vue-calc-app.png",
    },
    {
      title: "Advice Generator App",
      description: "Get a new advice by clicking the dice button",
      tags: ["Vue.js"],
      githubLink: "https://github.com/saadman-galib/Advice-generator-app",
      websiteLink: "https://advice-generator-app-saadman.netlify.app/",
      image:
        "https://saadmangalib.netlify.app/projects/advice-generator-app.png",
    },
    {
      title: "Windows 11 UI clone",
      description: "A clone of Windows 11 UI",
      tags: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/saadman-galib/windows-11",
      websiteLink: "https://windows-11-saadman.netlify.app/",
      image: "https://saadmangalib.netlify.app/projects/windows11-ui-clone.png",
    },
    {
      title: "Testimonials grid section",
      description: "A testimonials grid section",
      tags: ["HTML", "CSS"],
      githubLink: "https://github.com/saadman-galib/Testimonials-grid-section",
      websiteLink: "https://testimonials-grid-section-saadman.netlify.app/",
      image:
        "https://saadmangalib.netlify.app/projects/testimonials-grid-section.png",
    },
  ];

  return (
    <div className="container mx-auto p-6 m-5 dark:bg-gray-900 rounded-md">
      <h1 className="text-3xl font-bold mb-6 text-white dark:text-gray-200 ">
        Projects
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map((project, index) => (
          <li
            key={`project-${index + 1}`}
            className="bg-gray-800 rounded-md shadow-md hover:scale-105 transition ease-in-out duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-md"
            />
            <div className="p-4 text-white mb-3">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <p className="text-gray-400 mb-5">{project.description}</p>
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  className="mt-4 bg-cyan-900 hover:bg-cyan-950 font-bold py-3 px-6 rounded mr-5"
                  target="_blank"
                >
                  Code
                </a>
              )}
              {project.websiteLink && (
                <a
                  href={project.websiteLink}
                  className="mt-4 bg-teal-900 hover:bg-teal-950 font-bold py-3 px-6 rounded"
                  target="_blank"
                >
                  Website
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
