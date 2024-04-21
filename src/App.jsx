import { useState } from "react";
import languages from "./constants/languages.json";
import Arrow from "./components/UI/Arrow";

import "./App.css";

function App() {
  const langs = JSON.stringify(languages);
  console.log(langs.programming_languages);
  const [inputVal, setInputVal] = useState("");
  const [toggleSuggestions, setToggleSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [arrow, setArrow] = useState(null);

  const onChangeHandler = () => {};

  const changeDataHandler = (e) => {
    setInputVal(e.target.value);
  };

  const onKeyDownHandler = (e) => {
    const key = e.keyCode;
    if (key === 13) console.log("entered");
    return;
  };

  return (
    <>
      {/* input */}
      <div className="tagslut">
        <div>
          <label htmlFor="tagslut" className="tagslut-label">
            Skills*
          </label>
          <div className="tagslut-fields">
            <input
              type="text"
              id="tagslut"
              onFocus={() => setToggleSuggestions(true)}
              onKeyDown={onKeyDownHandler}
              onChange={changeDataHandler}
              className="tagslut-input"
              value={inputVal}
              autoComplete="off"
            />
            {/* <span className="divider">|</span> */}
            <Arrow onClick={() => {}} style={{}} />
          </div>
        </div>
      </div>

      {/* suggestions */}
      {toggleSuggestions && (
        <div className="tagslut-list">
          <div className="tagslut-items">
            {suggestions.map((item, index) => (
              <div className="tagslut-item" key={index}></div>
            ))}
          </div>
        </div>
      )}

      {/* tagslut list */}
      <div className="">
        <div className="">{}</div>
      </div>
    </>
  );
}

export default App;
