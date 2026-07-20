import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
// Spline has no thesvg entry — keep the Three.js mark as its stand-in.
import { SiThreedotjs } from "react-icons/si";
const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks like Mistral flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
// Brand chips sourced from thesvg CLI mono SVGs in /public/assets/logos,
// rendered via MaskIcon so each one inherits the dock's currentColor.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});
const PROJECT_SKILLS = {
  react: brand("React", "react-mono.svg"),
  javascript: brand("JavaScript", "javascript-mono.svg"),
  python: brand("Python", "python-mono.svg"),

  kotlin: {
    title: "Kotlin",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Kt</span>,
  },

  flask: {
    title: "Flask",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Flask</span>,
  },

  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">SQL</span>,
  },

  restApi: {
    title: "REST API",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">API</span>,
  },

  jwt: {
    title: "JWT",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">JWT</span>,
  },

  ollama: {
    title: "Ollama",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">AI</span>,
  },

  androidStudio: {
    title: "Android Studio",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">AS</span>,
  },

  yolov8: {
    title: "YOLOv8",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">YOLO</span>,
  },

  pytorch: {
    title: "PyTorch",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">PT</span>,
  },

  opencv: {
    title: "OpenCV",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">CV</span>,
  },

  numpy: {
    title: "NumPy",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">NP</span>,
  },

  matplotlib: {
    title: "Matplotlib",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">MPL</span>,
  },

  php: {
    title: "PHP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">PHP</span>,
  },

  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">HTML</span>,
  },

  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">CSS</span>,
  },

  ajax: {
    title: "AJAX",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">AJAX</span>,
  },

  jquery: {
    title: "jQuery",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">jQ</span>,
  },

  tkinter: {
    title: "Tkinter",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Tk</span>,
  },

  sklearn: {
    title: "Scikit-learn",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">SK</span>,
  },

  pandas: {
    title: "Pandas",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">PD</span>,
  },

  joblib: {
    title: "Joblib",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">JL</span>,
  },

  isolationForest: {
    title: "Isolation Forest",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">IF</span>,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: {
    frontend: Skill[];
    backend: Skill[];
  };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "orthoguide",
    category: "Full-Stack AI Healthcare Platform",
    title: "OrthoGuide",
    src: "/assets/projects-screenshots/orthoguide/landing.png",
    screenshots: ["landing.png"],

    skills: {
      frontend: [
        PROJECT_SKILLS.kotlin,
        PROJECT_SKILLS.androidStudio,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.javascript,
      ],

      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.flask,
        PROJECT_SKILLS.mysql,
        PROJECT_SKILLS.restApi,
        PROJECT_SKILLS.jwt,
        PROJECT_SKILLS.ollama,
      ],
    },

    live: "#",
    github: "https://github.com/Nravitejareddy/OrthoGuide-App",

    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A full-stack orthodontic platform combining mobile, web, backend,
            database, and AI technologies into a unified patient support system.
          </TypographyP>

          <TypographyP className="font-mono">
            OrthoGuide was developed as a cross-platform orthodontic application
            with a Kotlin Android client, React web interface, Flask backend, and
            MySQL database. The platform integrates AI-assisted functionality
            through Ollama and REST APIs while using JWT-based authentication for
            secure communication between clients and backend services.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Cross-Platform Architecture
          </TypographyH3>

          <p className="font-mono mb-2">
            The project connects Android and web clients to a centralized Flask
            backend through REST APIs. MySQL handles application data, while the
            authentication layer uses JWT tokens to protect authenticated
            operations and maintain secure client-server communication.
          </p>

          <TypographyH3 className="my-4 mt-8">
            AI-Powered Patient Support
          </TypographyH3>

          <p className="font-mono mb-2">
            The platform incorporates AI-assisted orthodontic support using
            Ollama alongside application-specific APIs, providing patients with
            an accessible digital interface for orthodontic information and
            support.
          </p>

          <SlideShow
            images={[`${BASE_PATH}/orthoguide/landing.png`]}
          />
        </div>
      );
    },
  },

  {
    id: "plastic-waste-detection",
    category: "Machine Learning & Computer Vision",
    title: "Plastic Waste Detection",
    src:
      "/assets/projects-screenshots/plastic-waste-detection/landing.png",
    screenshots: ["landing.png"],

    skills: {
      frontend: [
        PROJECT_SKILLS.matplotlib,
      ],

      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.yolov8,
        PROJECT_SKILLS.pytorch,
        PROJECT_SKILLS.opencv,
        PROJECT_SKILLS.numpy,
      ],
    },

    live: "#",
    github:
      "https://github.com/Nravitejareddy/Plastic-Waste-Detection",

    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A machine learning and computer vision system designed to detect
            plastic waste using image and spectral data analysis.
          </TypographyP>

          <TypographyP className="font-mono">
            The project implements a computer vision pipeline using Python,
            YOLOv8, PyTorch, OpenCV, and NumPy to analyze and classify plastic
            waste. The developed approach achieved a classification accuracy of
            96.62% during project evaluation.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Detection Pipeline
          </TypographyH3>

          <p className="font-mono mb-2">
            The system processes visual data through a machine learning pipeline
            designed for plastic waste identification. OpenCV and NumPy are used
            for image processing and data preparation, while YOLOv8 and PyTorch
            support the computer vision and model inference workflow.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Model Evaluation
          </TypographyH3>

          <p className="font-mono mb-2">
            Experimental results and model performance were analyzed using
            visualization and evaluation techniques, with Matplotlib used to
            present results and compare detection performance.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/plastic-waste-detection/landing.png`,
            ]}
          />
        </div>
      );
    },
  },

  {
    id: "data-exfiltration-prevention-system",
    category: "Cybersecurity & Machine Learning",
    title: "Data Exfiltration Prevention System",
    src: "/assets/projects-screenshots/deps/landing.png",
    screenshots: ["landing.png"],

    skills: {
      frontend: [
        PROJECT_SKILLS.tkinter,
      ],

      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.sklearn,
        PROJECT_SKILLS.pandas,
        PROJECT_SKILLS.numpy,
        PROJECT_SKILLS.joblib,
        PROJECT_SKILLS.isolationForest,
      ],
    },

    live: "#",
    github:
      "https://github.com/Nravitejareddy/Data-Exfiltration-Prevention-System",

    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A machine-learning-based security monitoring system for detecting
            suspicious outbound network activity and potential data
            exfiltration.
          </TypographyP>

          <TypographyP className="font-mono">
            The system combines anomaly detection with an interactive desktop
            dashboard to monitor simulated network events and identify
            potentially malicious outbound traffic. The detection engine uses
            Isolation Forest with Scikit-learn for unsupervised anomaly
            detection.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Anomaly Detection Engine
          </TypographyH3>

          <p className="font-mono mb-2">
            Network event data is processed using Python, Pandas, and NumPy
            before being evaluated by an Isolation Forest model. The approach
            enables unusual traffic patterns to be identified without relying
            entirely on predefined attack signatures.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Security Monitoring Dashboard
          </TypographyH3>

          <p className="font-mono mb-2">
            A Tkinter-based desktop interface presents network activity,
            anomaly alerts, system statistics, and monitoring information in a
            centralized dashboard for easier analysis of suspicious events.
          </p>

          <SlideShow
            images={[`${BASE_PATH}/deps/landing.png`]}
          />
        </div>
      );
    },
  },

  {
    id: "student-result-management-portal",
    category: "Web Application",
    title: "Student Result Management Portal",
    src:
      "/assets/projects-screenshots/student-result-portal/landing.png",
    screenshots: ["landing.png"],

    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.javascript,
        PROJECT_SKILLS.ajax,
        PROJECT_SKILLS.jquery,
      ],

      backend: [
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.mysql,
      ],
    },

    live: "#",
    github:
      "https://github.com/Nravitejareddy/Student-Result-Management-Portal",

    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A web-based academic result management system designed to simplify
            student record management and result processing.
          </TypographyP>

          <TypographyP className="font-mono">
            The portal was developed using PHP and MySQL for backend data
            management, with HTML, CSS, JavaScript, AJAX, and jQuery powering
            the user interface and interactive functionality.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Result Management
          </TypographyH3>

          <p className="font-mono mb-2">
            The application provides functionality for managing student
            information and academic results through a centralized database,
            reducing repetitive manual work involved in maintaining result
            records.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Interactive Web Interface
          </TypographyH3>

          <p className="font-mono mb-2">
            AJAX and jQuery are used alongside JavaScript to improve user
            interactions and communicate with backend functionality without
            requiring unnecessary full-page reloads.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/student-result-portal/landing.png`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;
