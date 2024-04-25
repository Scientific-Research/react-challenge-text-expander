import { useState } from "react";
import "./index.css";

interface ITextExpander {
  children: React.ReactNode; // define the Children prop
  collapsedNumWords: number;
  expandButtonText: string;
  collapseButtonText: string;
  buttonColor: string;
  expandedS: boolean;
  className: string;
}

export default function App() {
  return (
    <div>
      <TextExpander
        collapsedNumWords={10}
        expandButtonText={"Show more"}
        collapseButtonText={"Show less"}
        buttonColor={"blue"}
        expandedS={false}
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
        expandedS={false}
        className={""}
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander
        collapsedNumWords={10}
        expandButtonText={"Show more"}
        collapseButtonText={"Show less"}
        buttonColor={"blue"}
        expandedS={true}
        className="box"
      >
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

// NOTE: FIRST METHOD:
const TextExpander: React.FC<ITextExpander> = ({
  children,
  collapsedNumWords,
  expandButtonText,
  collapseButtonText,
  buttonColor,
  expandedS,
  className,
}) => {
  // const [expanded, setExpanded] = useState(false);
  const [expanded, setExpanded] = useState(expandedS); // expandedS is default value
  // const [collapsed, setCollapsed] = useState(false);

  // To toggle the exapnded with false and true!
  const toggleExpansion = () => {
    setExpanded((exp) => !exp);
  };

  // CSS Style
  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };

  const words = (children as string).split(" "); // NOTE: it separates all the words in a sentence with a comma! ['Space', 'travel', 'is',...] => in this case, we can count the words using slice command!

  // split the text into words and display only the first 'collapsedNumWords'
  const truncatedText = words.slice(0, collapsedNumWords).join(" ") + "..."; // NOTE: slice cut the sentence from first word untill the number of collapsedNumWords(for example 10 words, 20 words, ...), after using slice, we have to use join(" ") again to remove the commas between words which split(" ") already did, otherwise, we will see the sentences with comma between words which is not acceptable!

  // NOTE: shows us the entire paragraph => children or only a section of that => truncatedText, it dependes on the state of expanded state variable, whether it is true or false!
  const displayText = expanded ? children : truncatedText;

  return (
    <div className={className}>
      {/* {children} */}
      {displayText}{" "}
      {/* <a
        href="#"
        onClick={toggleExpansion}
        // style={{ color: buttonColor, textDecoration: "none" }}
        style={buttonStyle}
      >
        {expanded ? collapseButtonText : expandButtonText}
      </a> */}
      {/* NOTE: Instead of link => a href, we use a button but with above CSS styles => buttonStyle => with this styles, the button will look like a link and not button anymore!   */}
      <button
        onClick={toggleExpansion}
        // style={{ color: buttonColor, textDecoration: "none" }}
        style={buttonStyle}
      >
        {expanded ? collapseButtonText : expandButtonText}
      </button>
      <br />
      <br />
    </div>
  );
};

// NOTE: SECOND METHOD:
// const TextExpander: React.FC<ITextExpander> = ({
//   children,
//   collapsedNumWords,
//   expandButtonText,
//   collapseButtonText,
//   buttonColor,
//   expandedS,
//   className,
// }) => {
//   // const [expanded, setExpanded] = useState(false);
//   const [expanded, setExpanded] = useState(expandedS);
//   // const [collapsed, setCollapsed] = useState(false);

//   const toggleExpansion = () => {
//     setExpanded((exp) => !exp);
//   };
//   console.log(expanded);

//   const words = (children as string).split(" ");
//   const truncatedText = words.slice(0, collapsedNumWords).join(" ") + "...";

//   const renderContent = () => {
//     if (expanded) {
//       return (
//         <div className={className}>
//           {children} {""}
//           <a
//             href="#"
//             style={{ color: buttonColor, textDecoration: "none" }}
//             onClick={toggleExpansion}
//           >
//             {collapseButtonText}
//           </a>
//         </div>
//       );
//     } else {
//       // split the text into words and display only the first 'collapsedNumWords'
//       return (
//         <div className={className}>
//           {/* {children} */}
//           {truncatedText}{" "}
//           <a
//             href="#"
//             onClick={toggleExpansion}
//             style={{ color: buttonColor, textDecoration: "none" }}
//           >
//             {expandButtonText}
//           </a>
//           <br />
//           <br />
//         </div>
//       );
//     }
//   };
//   return <div>{renderContent()}</div>;
// };
