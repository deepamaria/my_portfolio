import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Palette, Database, Menu, X } from 'lucide-react';
import profileImg from './assets/photo.png';

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const profile = {
    name: "Deepa Maria",
    title: "Full Stack Developer",
    bio: "I build elegant solutions to complex problems and love transforming ideas into interactive digital experiences using modern technologies. I specialize in crafting modern web interfaces with engaging micro-interactions, focusing on clean code, intuitive user experiences, and continuous learning. Currently based in Munich, I am passionate about creating products that delight users and make a real impact.",
    github: "https://github.com/deepamaria",
    linkedin: "https://linkedin.com/in/deepa-maria/",
    email: "deepamaria89@gmail.com",
    profileImage: profileImg
  };

  // Add projects here
  const projects = [
    {
      id: 1,
      title: "Food-Hub",
      description: "A web application built with React, Node.js and TailwindCSS. This is a food listing website showcasing the available foods of different cuisines with filter option. Showcases  categorization and responsive design.",
      tech: ["React", "Node.js", "TailwindCSS", "WebSocket"],
      github: "https://github.com/deepamaria1/food_hub",
      demo: "https://goodfoodhub.netlify.app/",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Scheduler4U",
      description: "A full-stack web application built with React and Node.js. Features real-time data synchronization and responsive design. Here the people can schedule their Daily activities and Appointments into Calendar.",
      tech: ["React.js", "Node.js", "TailwindCSS", "MySQL", "CI-CD"],
      github: "https://github.com/deepamaria1/Scheduler4U",
      demo: "https://scheduler-4u.netlify.app/",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Library Manager App",
      description: "A full-stack web application with React, Node.js, TailwindCSS and PostgresSQL featuring book management system. This allows user to make a Reading List from a book Resource and to store their Read books.",
      tech: ["React", "TypeScript", "TailwindCSS", "PostgreSQL"],
      github: null,
      // "https://github.com/deepamaria1/lib_mngr",
      demo: null,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const skills = [
    { name: "Frontend", items: ["React.js", "React Native", "Next.js", "TypeScript", "Vanilla JavaScript", "Tailwind CSS"], icon: Code2 },
    { name: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MySQL"], icon: Database },
    { name: "Tools", items: ["Git", "Docker", "CI/CD", "AWS", "Microsoft Azure"], icon: Palette }
  ];

  const navItems = [
    { name: 'About me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {profile.name}
          </h1>
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex gap-6 xl:gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Social Links */}
          <div className="hidden sm:flex gap-3 lg:gap-4">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" 
               className="hover:text-cyan-400 transition-colors">
              <Github size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
               className="hover:text-cyan-400 transition-colors">
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a href={`mailto:${profile.email}`}
               className="hover:text-cyan-400 transition-colors">
              <Mail size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium cursor-pointer py-2"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex gap-4 pt-4 sm:hidden">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" 
                   className="hover:text-cyan-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                   className="hover:text-cyan-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href={`mailto:${profile.email}`}
                   className="hover:text-cyan-400 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero/About Section */}
      <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center ">
            {/* Left side - Text content */}
            <div className="space-y-4 sm:space-y-6 animate-fade-in">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h2>
              <p className="text-2xl sm:text-3xl text-gray-400">{profile.title}</p>
              <p className="text-lg sm:text-xl text-justify text-gray-300 max-w-7xl leading-relaxed">
                {profile.bio}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#projects" 
                   onClick={(e) => scrollToSection(e, '#projects')}
                   className="px-6 sm:px-8 py-3 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all cursor-pointer text-center">
                  View Projects
                </a>
                <a href="#contact"
                   onClick={(e) => scrollToSection(e, '#contact')}
                   className="px-6 sm:px-8 py-3 border-2 border-gray-600 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all cursor-pointer text-center">
                  Get in Touch
                </a>
                <a href="/resume.pdf"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="px-6 sm:px-8 py-3 bg-linear-to-r from-purple-200 to-purple-800 rounded-lg font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all cursor-pointer text-center">
                  MY RESUME
                </a>
              </div>
            </div>

            {/* Right side - Profile Image with decorative elements */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main circular image container */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                  {/* Decorative circles */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-red-500 rounded-full opacity-80"></div>
                  <div className="absolute top-8 -left-8 w-12 h-12 bg-purple-500 rounded-full opacity-60"></div>
                  <div className="absolute -top-6 right-12 w-20 h-20 bg-green-400 rounded-full opacity-80"></div>
                  <div className="absolute bottom-12 -right-6 w-14 h-14 bg-purple-600 rounded-full opacity-70"></div>
                  <div className="absolute bottom-4 right-20 w-10 h-10 bg-white rounded-full opacity-80"></div>
                  <div className="absolute -bottom-6 left-16 w-24 h-24 bg-yellow-400 rounded-full opacity-80"></div>
                  
                  {/* White circle border */}
                  <div className="absolute inset-0 rounded-full border-4 border-white"></div>
                  
                  {/* Profile Image*/}
                  <div className="absolute inset-0 rounded-full overflow-hidden bg-gray-700">
                  
                       {/* src="src/assets/photo.png" 
                       alt="Profile"  */}
                    <img 
                      src={profile.profileImage} 
                      alt="MDM"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if image doesn't load - shows initials
                        e.target.style.display = 'none';
                      }}
                    />
                    {/* If you don't have an image yet, this fallback will show */}
                    {/* <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600">
                      <span className="text-6xl font-bold text-white">DM</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">My Featured Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`h-2 bg-linear-to-r ${project.color}`}></div>
                <div className="p-5 sm:p-6 space-y-4">
                  <h4 className="text-xl sm:text-2xl font-bold">{project.title}</h4>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 sm:px-3 py-1 bg-gray-700 rounded-full text-xs sm:text-sm text-cyan-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm sm:text-base">
                      <Github size={18} className="sm:w-5 sm:h-5" />
                      Code
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                         className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm sm:text-base">
                        <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Skills & Tools</h3>
                  
          {/* Technologies Icons */}
          <div className="mb-12 sm:mb-16">
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-10">
              
              {/* React */}
              <div className="group flex flex-col items-center gap-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 rounded-2xl flex items-center justify-center border-2 border-gray-700 group-hover:border-cyan-400 transition-all group-hover:transform group-hover:scale-110 p-3 sm:p-4">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                    alt="React"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-400 group-hover:text-cyan-400">React</span>
              </div>
              
              {/* JavaScript */}
              <div className="group flex flex-col items-center gap-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 rounded-2xl flex items-center justify-center border-2 border-gray-700 group-hover:border-yellow-400 transition-all group-hover:transform group-hover:scale-110 p-3 sm:p-4">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                    alt="JavaScript"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-400 group-hover:text-yellow-400">JavaScript</span>
              </div>
              
              {/* NextJS */}
              <div className="group flex flex-col items-center gap-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 rounded-2xl flex items-center justify-center border-2 border-gray-700 group-hover:border-white transition-all group-hover:transform group-hover:scale-110 p-3 sm:p-4">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" 
                    alt="NextJS"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-400 group-hover:text-white">NextJS</span>
              </div>

              {/* TypeScript */}
              <div className="group flex flex-col items-center gap-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 rounded-2xl flex items-center justify-center border-2 border-gray-700 group-hover:border-blue-400 transition-all group-hover:transform group-hover:scale-110 p-3 sm:p-4">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
                    alt="TypeScript"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-400 group-hover:text-blue-400">TypeScript</span>
              </div>
              
              {/* Node.js */}
              <div className="group flex flex-col items-center gap-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 rounded-2xl flex items-center justify-center border-2 border-gray-700 group-hover:border-green-400 transition-all group-hover:transform group-hover:scale-110 p-3 sm:p-4">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
                    alt="Node.js"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-400 group-hover:text-green-400">Node.js</span>
              </div>
              
              {/* Python */}
              <div className="group flex flex-col items-center gap-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 rounded-2xl flex items-center justify-center border-2 border-gray-700 group-hover:border-blue-400 transition-all group-hover:transform group-hover:scale-110 p-3 sm:p-4">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
                    alt="Python"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-400 group-hover:text-blue-400">Python</span>
              </div>
              
              {/* Tailwind CSS */}
              <div className="group flex flex-col items-center gap-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 rounded-2xl flex items-center justify-center border-2 border-gray-700 group-hover:border-cyan-400 transition-all group-hover:transform group-hover:scale-110 p-3 sm:p-4">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" 
                    alt="Tailwind CSS"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-400 group-hover:text-cyan-400">Tailwind</span>
              </div>
              
              {/* PostgreSQL */}
              <div className="group flex flex-col items-center gap-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 rounded-2xl flex items-center justify-center border-2 border-gray-700 group-hover:border-blue-400 transition-all group-hover:transform group-hover:scale-110 p-3 sm:p-4">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
                    alt="PostgreSQL"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-400 group-hover:text-blue-400">PostgreSQL</span>
              </div>

              {/* MySQL */}
              <div className="group flex flex-col items-center gap-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 rounded-2xl flex items-center justify-center border-2 border-gray-700 group-hover:border-cyan-600 transition-all group-hover:transform group-hover:scale-110 p-3 sm:p-4">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
                    alt="MySQL"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-400 group-hover:text-cyan-600">MySQL</span>
              </div>

              {/* MongoDB */}
              {/* <div className="group flex flex-col items-center gap-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 rounded-2xl flex items-center justify-center border-2 border-gray-700 group-hover:border-green-400 transition-all group-hover:transform group-hover:scale-110 p-3 sm:p-4">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
                    alt="MongoDB"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-400 group-hover:text-green-400">MongoDB</span>
              </div> */}
              
              {/* Figma */}
              <div className="group flex flex-col items-center gap-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 rounded-2xl flex items-center justify-center border-2 border-gray-700 group-hover:border-purple-400 transition-all group-hover:transform group-hover:scale-110 p-3 sm:p-4">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" 
                    alt="Figma"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-400 group-hover:text-purple-400">Figma</span>
              </div>

              {/* Git */}
              <div className="group flex flex-col items-center gap-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 rounded-2xl flex items-center justify-center border-2 border-gray-700 group-hover:border-orange-400 transition-all group-hover:transform group-hover:scale-110 p-3 sm:p-4">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
                    alt="Git"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-400 group-hover:text-orange-400">Git</span>
              </div>
              
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {skills.map((category, i) => {
              const Icon = category.icon;
              return (
                <div key={i} className="bg-gray-800/50 rounded-xl p-5 sm:p-6 border border-gray-700 hover:border-cyan-500 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="text-cyan-400" size={24} />
                    <h4 className="text-xl sm:text-2xl font-bold">{category.name}</h4>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, j) => (
                      <li key={j} className="text-gray-400 flex items-center gap-2 text-sm sm:text-base">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          <h3 className="text-3xl sm:text-4xl font-bold">Let's Build Something Together</h3>
          <p className="text-lg sm:text-xl text-gray-400 px-4">
            I'm always open to discussing new projects, creative ideas, or opportunities.
            <p> Want to Collaborate or Connect? </p>
          </p>
          <a href={`mailto:${profile.email}`}
             className="inline-block px-6 sm:px-8 py-3 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm sm:text-base">
          <p>© 2024 {profile.name}. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
