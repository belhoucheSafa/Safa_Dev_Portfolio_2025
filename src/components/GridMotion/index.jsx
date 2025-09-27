import GridMotionUi from "../../ui/GridMotionUi";
import "./GridMotion.css";
import accomplishment1 from "../../assets/Accomplishments/Agile.jpg";
import accomplishment2 from "../../assets/Accomplishments/certificate-elements-of-ai-Safa.png";
import accomplishment3 from "../../assets/Accomplishments/Google.jpg";
import accomplishment4 from "../../assets/Accomplishments/project-management.jpg";
import accomplishment5 from "../../assets/Accomplishments/Python-Kaggle.png";

const items = [
  accomplishment1,
  accomplishment2,
  accomplishment3,
  accomplishment4,
  accomplishment5,
];

const GridMotion = () => {
  return (
    <div id="gridMotion" >
      <div className="section__header">
        <h2 className="shine">Accomplishments</h2>
      </div>
      <GridMotionUi items={items} />
    </div>
  );
};

export default GridMotion;
