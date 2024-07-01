import "./output.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import SpanTools from "./components/SpanTools";

const App = () => {
  return (
    <>
      <div className="grid grid-rows-6 grid-flow-col grid-cols-4 gap-3 h-screen container mx-auto">
        <div className="row-span-1 col-span-2 p-2">
          <p>Joao Santos</p>
          <p>Junior Web developer</p>
        </div>
        <div className="row-span-2 col-span-2 p-2">
          <p>About</p>
          <p>
            4 years of experience as a Web Developer, where I learned a lot
            about how the web development process works. I have experience with
            the ReactJS, the Bootstrap framework, GIT, Scrum, and the PHP
            programming language. Always looking to learn new languages and
            learn about new processes.
          </p>
        </div>
        <div className="row-span-3 col-span-2 p-2 text-sm">
          <p>Skills / Courses</p>
          <div>Front-end</div>
          <div className="flex justify-start space-x-2">
            <SpanTools text="JQuery" />
            <SpanTools text="JavaScript" />
            <SpanTools text="TypeScript" />
            <SpanTools text="ReactJS" />
            <SpanTools text="VueJS" />
            <SpanTools text="HTML" />
            <SpanTools text="CSS" />
            <SpanTools text="Bootstrap" />
            <SpanTools text="Tailwind" />
          </div>
          <div>Back-end</div>
          <div className="flex justify-start space-x-2">
            <SpanTools text="PHP" />
            <SpanTools text="Laravel" />
            <SpanTools text="Code Igniter" />
            <SpanTools text="Node" />
            <SpanTools text="NestJS" />
            <SpanTools text="Strapi" />
            <SpanTools text="MySQL" />
            <SpanTools text="PostgreSQL" />
            <SpanTools text="MongoDB" />
            <SpanTools text="TDD" />
          </div>

          <div class="relative h-32 w-32">
            <div class="absolute bottom-0 space-x-1">
              <a
                href="https://github.com/joaovitorps"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/joaovitorps"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="row-span-full col-span-2 p-2">
          <p>Experience</p>
          02/2022 - Present
          <p>Software Developer at Scopic Software</p>
          <ul className="pl-4 list-disc">
            <li>Participate in daily scrums</li>
            <li>Check and work tickets from the user</li>
            <li>Create hotfix for existing software products</li>
          </ul>
          <div className="flex justify-start space-x-2">
            <SpanTools text="ReactJS" />
            <SpanTools text="PHP" />
            <SpanTools text="MySQL" />
            <SpanTools text="AWS" />
            <SpanTools text="JIRA" />
          </div>
          02/2019 - 02/2022
          <p>Lead Web Developer at Segure Segurança do Trabalho</p>
          <ul className="pl-4 list-disc">
            <li>
              Implementation of new functionalities and maintenance in the
              internal company software
            </li>
            <li>
              Development of web applications with PHP (CodeIgniter, Laravel),
              HTML, CSS (Bootstrap), and JavaScript (Angular, React)
            </li>
            <li>MySQL database modeling</li>
          </ul>
          <div className="flex justify-start space-x-2">
            <SpanTools text="ReactJS" />
            <SpanTools text="PHP" />
            <SpanTools text="Laravel" />
            <SpanTools text="Code Igniter" />
            <SpanTools text="Bootstrap" />
            <SpanTools text="JQuery" />
            <SpanTools text="JavaScript" />
            <SpanTools text="HTML" />
            <SpanTools text="CSS" />
            <SpanTools text="MySQL" />
          </div>
          <div>*View complete resume*</div>
          <p>Projects</p>
          <p>Comming soon</p>
        </div>
      </div>
    </>
  );
};

export default App;
