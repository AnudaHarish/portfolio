import { ArrowRight, ExternalLink, GitBranch, GitBranchIcon, GitBranchPlusIcon, GitCommitHorizontalIcon, GitCommitVerticalIcon, GitGraphIcon } from "lucide-react";

const projects = [
  { 
    id:1,
    name: "CompanyLogo",
    description: "Designed and developed a demo corporate website for a fictional business, featuring company information, service pages, and a contact section.",
    image: "../../public/projects/companylogo.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    demoUrl: "https://taupe-banoffee-280422.netlify.app/",
    github: "https://github.com/AnudaHarish/companyLogo-"
  },
  { 
    id:2,
    name: "Leave Manager",
    description: "Developed an Employee Leave Management System with role-based access for administrators and employees, enabling leave requests, approvals, leave tracking, and user management.",
    image: "../../public/projects/leaveManager.png",
    tags: ["Angular", "TypeScript", "Java", "SpringBoot", "MongoDB", "Bootstrap"],
    demoUrl: "#",
    github: "https://github.com/AnudaHarish/LeaveManager"
  },
  { 
    id:3,
    name: "Online Shop",
    description: "Developed a responsive e-commerce frontend using React, featuring product listings, product details, shopping cart, and a modern user interface.",
    image: "../../public/projects/onlineShop.png",
    tags: ["React", "Bootstrap", "JavaScript"],
    demoUrl: "http://online-shop-env.eba-phecnby3.ap-south-1.elasticbeanstalk.com/",
    github: "https://github.com/AnudaHarish/react-basics"
  },
  { 
    id:4,
    name: "Ed Sheeran",
    description: "Developed a responsive promotional website for Ed Sheeran using HTML, CSS, and JavaScript, showcasing albums, merchandise, tour information, and interactive UI components.",
    image: "../../public/projects/edstore.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    demoUrl: "#",
    github: "https://github.com/AnudaHarish/web_cw"
  },
  { 
    id:5,
    name: "Flix app",
    description: "Developed a movie information web application that displays movie details, ratings, genres, and release information through a clean and responsive user interface.",
    image: "../../public/projects/flixapp.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    demoUrl: "https://subtle-sprite-d8691f.netlify.app/",
    github: "https://github.com/AnudaHarish/flixx-app"
  },
  { 
    id:6,
    name: "TravelTales",
    description: "Developed a travel blog web application that allows users to explore travel stories and publish their own blog posts through an intuitive and responsive interface.",
    image: "../../public/projects/blogpost.png",
    tags: ["Angular", "Express", "SQLite", "Nebular"],
    demoUrl: "#",
    github: "https://github.com/AnudaHarish/serverside-express"
  },
  { 
    id:7,
    name: "Travel Agency",
    description: "Developed a responsive travel agency website showcasing tour packages, destinations, services, and booking information with an intuitive user interface.",
    image: "../../public/projects/travelAgency.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    demoUrl: "https://delicate-platypus-b53653.netlify.app/",
    github: "https://github.com/AnudaHarish/travel_agency"
  },


]


export default function ProjectSection() {



  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">I've included a few of my projects here. Every project was made with great care and attention to detail, efficiency and user satisfaction</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div 
            key={key}
            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              </div>
              <div className="h-48 overflow-hidden">
                <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span className="px-2 py-1 text-xs font-medim border rounded-full bg-secondary text-secondary-foreground" key={key}>{tag}</span>
                  ))}
                </div>
              
                <div className="flex justify-between items-center mb-2">
                  <div className="flex space-x-3">
                    <a target="_blank" href={project.demoUrl}>
                      {project.demoUrl !== "#" ? <ExternalLink size={20}/> : ""}
                    </a>
                    <a target="_blank" href={project.github}>
                      <GitBranchPlusIcon size={20}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/AnudaHarish" target="_blank">Check out my GitHub <ArrowRight size={16} /></a>
          </div>
      </div>
    </section>
  );
}