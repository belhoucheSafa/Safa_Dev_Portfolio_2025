import { useRef } from "react";
import "./About.css";
import SyntaxHighlight from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import me from "../../assets/newAboutAssets/me2.png";
import Window from "../../assets/newAboutAssets/icons/window.svg";
import CopyEmailButton from "../../ui/CopyEmailButton";
import MotionCard from "../../ui/MotionCard";
import CSharpLogo from "../../assets/logos/csharp-pink.png";
import DotNetLogo from "../../assets/logos/dotnet-pink.png";
import BlazorLogo from "../../assets/logos/blazor-pink.png";
import ReduxLogo from "../../assets/redux.png";


const code = `
  const developer = {
    name: "Safa Belhouche",
    age: ⏳ 23 , 
    hobby: repeat = () => {
      // eat()
      // sleep()
      // code()
    }
  }
  `;
const customTheme = {
  ...a11yLight,
  // override token colors
  "hljs-comment": { color: "#888888", fontStyle: "italic" }, // comments
  "hljs-keyword": { color: "#cf7f4a", fontWeight: "bold" }, // keywords
  "hljs-number": { color: "#cf7f4a" }, // constants
  "hljs-string": { color: "#57b765" }, // strings
  "hljs-variable": { color: "#9467f5" }, // general purple
};

const motionTexts = [
  { text: "GRASP", rotate: 55, top: "19%", left: "5%" },
  {
    text: "SOLID",
    rotate: 0,
    top: "60%",
    left: "75%",
    className: "special-motion-card",
  },
  { text: "Design Patterns", rotate: 10, bottom: "10%", left: "70%" },
  { text: "Design Principles", rotate: -30, top: "55%", left: "0%" },
  { text: "SRP", rotate: 20, top: "10%", left: "38%" , className: "special-motion-card" },
  { text: "TypeScript", rotate: -20, top: "65%", left: "27%" },
  { text: "React", rotate: 35, top: "20%", left: "30%" },
  { text: "Node.js", rotate: -15, top: "25%", left: "60%" },
  { text: "GraphQL", rotate: 25, top: "35%", left: "82%" },
];

const motionImages = [
  { image: CSharpLogo, rotate: 30, top: "30%", left: "50%" },
  { image: BlazorLogo, rotate: -45, top: "-33%", left: "90%" },
  { image: DotNetLogo, rotate: -45, top: "-36%", left: "19%" },
  { image: ReduxLogo, rotate: 0, top: "34%", left: "13%" },

];


const About = () => {
  const grid2Container = useRef();

  return (
    <section id="new__about">
      <div className="section__wrapper">
        <div className="about__cards__wrapper">
          {/* Row 1 */}
          <div className="about__cards__row">
            {/* Left Card */}
            <div className="about__card about__card__1__left">
              <div className="spotlight"></div>
              <img src={Window} alt="Window" className="window" />

              <div className="about__card__1__left__profile">
                <div className="avatar">
                  <img src={me} alt="Safa Belhouche" />
                </div>
                <div className="details">
                  <div className="top">Safa Belhouche</div>
                  <div className="bottom">Student & Software Developer</div>
                </div>
              </div>

              <div className="about__card__1__left__description__1">
                <div className="colored__text">Passionate</div>
                Developer and <br /> Lifelong Learner
              </div>

              <div className="about__card__1__left__description__2">
                I adapt to different time zones to make sure communication is
                smooth, no matter where you're located.
              </div>
            </div>

            {/* Right Card */}
            <div className="about__card about__card__2__right">
              <div className="about__card__2__right__code__block_wrapper">
                <div className="three__dots_wrapper">
                  <div className="one__dot dot__1"></div>
                  <div className="one__dot dot__2"></div>
                  <div className="one__dot dot__3"></div>
                </div>
                <div className="code__block__wrapper">
                  <SyntaxHighlight
                    language="javascript"
                    style={customTheme}
                    className="block__code__wrapper"
                    customStyle={{
                      background: "transparent",
                      color: "#cdcdcd",
                      padding: "0px",
                      fontSize: "12px",
                    }}
                    wrapLongLines
                  >
                    {code}
                  </SyntaxHighlight>
                </div>
              </div>

              <div className="about__card__2__right__details">
                <div className="about__title shine">
                  What <span className="highlight">Drives Me</span>
                </div>
                <div className="about__desc">
                  I'm passionate about the intersection of design 🎨 and
                  development 💻. I believe the best digital experiences are
                  built with a deep understanding of the user 👤 and a
                  commitment to innovation 🌟.
                  <br />
                  Whether working on a simple landing page or a complex web app,
                  I bring precision ✍️, creativity ✨, and a user-first mindset
                  to every project.
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="about__cards__row">
            {/* Left Card */}
            <div className="about__card about__card__3__left">
              <div
                ref={grid2Container}
                className="motion__grid"
              >
                <p className="shine">CODE IS CRAFT</p>
                {motionTexts.map((item, i) => (
                  <MotionCard
                    key={`text-${i}`}
                    style={{
                      rotate: `${item.rotate}deg`,
                      top: item.top,
                      bottom: item.bottom,
                      left: item.left,
                    }}
                    text={item.text}
                    className={item.className || ""}
                    containerRef={grid2Container}
                  />
                ))}
                {motionImages.map((item, i) => (
                  <MotionCard
                    key={`img-${i}`}
                    style={{
                      rotate: `${item.rotate}deg`,
                      top: item.top,
                      bottom: item.bottom,
                      left: item.left,
                    }}
                    image={item.image}
                    containerRef={grid2Container}
                  />
                ))}
              </div>
            </div>

            {/* Right Card */}
            <div className="about__card about__card__4__right">
              <div className="collab__text">
                I'm Committed to Collaboration and Clear Communication
              </div>
              <div className="copy__mail__btn__wrapper">
                <CopyEmailButton />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
