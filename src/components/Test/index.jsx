// import React from "react";
// import "./Test.css";
// import ParticlesBackground from "../../components/ParticlesBackground";


// const Test = () => {
//   return (
//     <div className="test__wrapper">
//       <div className="right__box">
//         <ParticlesBackground />
//       </div>
//       <div className="left__box"></div>
//     </div>
//   );
// };

// export default Test;


import React from "react";
import ParticlesBackground from "../ParticlesBackground/";
import "./Test.css";

const Test = () => {
  return (
    <div className="test__wrapper">
      <div className="left__box">
       
      </div>
      <div className="right__box">
        <ParticlesBackground />
      </div>
    </div>
  );
};

export default Test;