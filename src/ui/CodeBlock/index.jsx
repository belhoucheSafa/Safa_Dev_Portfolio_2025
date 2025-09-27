import "./CodeBlock.css";
import SyntaxHighlight from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeBlock = ({ language, code }) => {
  return (
    <div className="code__block">
      <div className="flex__center dot__container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <SyntaxHighlight
        language={language}
        style={a11yLight}
        customStyle={{
          background: "rgba(var(--color-primary-rgb), 0.03)",
          color: "skyblue",
          padding: "20px",
          fontSize: "14px",
        }}
        wrapLongLines={true}
      >
        {code}
      </SyntaxHighlight>
    </div>
  );
};

export default CodeBlock;
