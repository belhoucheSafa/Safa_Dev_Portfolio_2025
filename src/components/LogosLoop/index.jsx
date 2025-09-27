import LogoLoop from "../../ui/LogoLoopUi";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiThreedotjs,
  SiRedux,
  SiNodedotjs,
  SiJavascript,
  SiMongodb,
  SiSqlite,
  SiPython,
  SiDjango,
  SiFigma,
  SiExpo,
  SiHtml5,
  SiCss3,
  SiPhp,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiThreedotjs />,
    title: "Three.js",
    href: "https://threejs.org",
  },
  {
    node: <SiNodedotjs />,
    title: "Node.js",
    href: "https://nodejs.org",
  },
  {
    node: <SiRedux />,
    title: "Redux",
    href: "https://redux.js.org",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiMongodb />,
    title: "MongoDB",
    href: "https://www.mongodb.com",
  },
  {
    node: <SiSqlite />,
    title: "SQLite",
    href: "https://www.sqlite.org",
  },
  {
    node: <SiPython />,
    title: "Python",
    href: "https://www.python.org",
  },
  {
    node: <SiDjango />,
    title: "Django",
    href: "https://www.djangoproject.com",
  },
  {
    node: <SiFigma />,
    title: "Figma",
    href: "https://www.figma.com",
  },
  {
    node: <SiExpo />,
    title: "Expo",
    href: "https://expo.dev",
  },
  {
    node: <SiHtml5 />,
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
  },
  {
    node: <SiCss3 />,
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    node: <SiPhp />,
    title: "PHP",
    href: "https://www.php.net",
  },
];

const LogosLoop = () => {
  return (
    <div className="section__wrapper">
      <div className="logos__loop__wrapper">
        <LogoLoop
          logos={techLogos}
          speed={60}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#804dee0f"
          ariaLabel="Technology partners"
        />
      </div>
    </div>
  );
};

export default LogosLoop;
