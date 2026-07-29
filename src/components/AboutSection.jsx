import { Briefcase, Code, User } from "lucide-react";

export default function AboutSection(){
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-ceter">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Full Stack Software Developer</h3>
            <p className="text-muted-foreground">
              I am a Software Engineering graduate with two years of industry experience as a Software Engineering Intern and Trainee at hSenid Software Lanka. During this time, I gained practical experience in developing and maintaining web applications, collaborating with cross-functional teams, and contributing to the full software development lifecycle. I enjoy solving complex problems, writing clean and maintainable code, and continuously improving my technical skills.
            </p>
            <p className="text-muted-foreground">
              My technical expertise includes Java, Spring Boot, Angular, JavaScript, TypeScript, SQL, HTML, CSS, and RESTful API development, with a foundational understanding of React and Express.js. I am passionate about full-stack development and enjoy building responsive, scalable, and user-friendly web applications. I am always eager to learn new technologies, take on new challenges, and contribute to meaningful software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">Get In Touch</a>
              <a href="../../public/andua-harishchandra-2026.pdf" download="anuda-harishchandra.pdf" className="cosmic-button">Download CV</a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4 bg-primary/8 p-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">Creating responsive websites and web applications with modern frameworks</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4 bg-primary/8 p-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">Designing intuitive user interfaces and seamless user experiences.</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4 bg-primary/8 p-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">Leading projects from conception to completion with with agile methodologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}