import { useState } from "react";
import "./index.css";

interface ITextExpander {
  children: React.ReactNode; // define the Children prop
  collapsedNumWords: number;
  expandButtonText: string;
  collapseButtonText: string;
  buttonColor: string;
  expanded: boolean;
  className: string;
}

export default function App() {
  return (
    <div>
      <TextExpander
        collapsedNumWords={0}
        expandButtonText={""}
        collapseButtonText={""}
        buttonColor={""}
        expanded={false}
        className={""}
      >
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
        expanded={false}
        className={""}
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander
        expanded={true}
        className="box"
        collapsedNumWords={0}
        expandButtonText={""}
        collapseButtonText={""}
        buttonColor={""}
      >
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

const TextExpander: React.FC<ITextExpander> = ({
  children,
  collapsedNumWords,
  expandButtonText,
  collapseButtonText,
  buttonColor,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const renderContent = () => {
    if (expanded) {
      return children;
    } else {
      // split the text into words and display only the first 'collapsedNumWords'
      const words = (children as string).split(" ");
      const truncatedText = words.slice(0, collapsedNumWords).join(" ") + "...";

      return (
        <>
          {/* {children} */}
          {truncatedText}{" "}
          <a
            href="#"
            onClick={toggleExpansion}
            style={{ color: buttonColor, textDecoration: "none" }}
          >
            {expandButtonText}
          </a>
          <br />
          <br />
        </>
      );
    }
  };
  return <div>{renderContent()}</div>;
};
