import { useState } from "react";
import Warning from "./Warning";

export default function Textarea() {
  const [text, setText] = useState("");
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;

    //validation
    if (newText.includes("<script>")) {
      setWarningText("No script tag allowed");
      newText = newText.replace("<script>", ""); //right hand side run first and result of that is assigned to new variable
    } else if (newText.includes("@")) {
      setWarningText("No @ character allowed");
      newText = newText.replace("@", "");
    } else {
      setWarningText("");
    }
    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        // console.log(e.target.value);
        className="textarea"
        placeholder="Type or paste your text here..."
        spellCheck="false"
      />
      <Warning warningText={warningText} />
      {/* {warningText ? <Warning warningText={warningText} /> : null} */}
    </div>
  );
}
