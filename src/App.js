import logo from "./logo.svg";
import "./App.css";
import ContentEditable from "react-contenteditable";
import { useRef, useState } from "react";
import Dropzone from "./Dropzone";

function App() {
  const ref = useRef(null);
  const [state, setState] = useState({ html: "<b>Hello <i>World</i></b>" });

  const handleChange = (evt) => {
    setState({ html: evt.target.value });
  };

  return (
    <div className="App">
      <ContentEditable
        innerRef={ref}
        html={state.html} // innerHTML of the editable div
        disabled={false} // use true to disable editing
        onChange={handleChange} // handle innerHTML change
        tagName="article" // Use a custom HTML tag (uses a div by default)
      />
      <div>
        <Dropzone />
      </div>
    </div>
  );
}

export default App;
