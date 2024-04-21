import { useState, useEffect } from "react";
import { programming_languages } from "./constants/languages.json";
import Arrow from "./components/UI/Arrow";
import XButton from "./components/UI/XButton";

import "./App.css";

const App = () => {
  const [inputVal, setInputVal] = useState("");
  const [skills, setSkills] = useState([]);
  const [toggleSuggestions, setToggleSuggestions] = useState(true);
  const [arrowClass, setArrowClass] = useState(false);

  useEffect(() => {}, []);

  const changeDataHandler = (e) => {
    setInputVal(e.target.value);
  };

  const onKeyDownHandler = (e) => {
    const key = e.keyCode;
    if (key === 13) console.log("entered");
    return;
  };

  const addSkill = (newItem) => {
    setSkills((prev) => [...prev, newItem]);
    setToggleSuggestions(false);
  };

  return (
    <>
      {/* tagslut input */}
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

            <Arrow onClick={() => setArrowClass(!arrowClass)} className={arrowClass ? "ratation" : ""} />
          </div>
        </div>
      </div>

      {/* suggestions */}
      {toggleSuggestions && (
        <div className="tagslut-list">
          <div className="tagslut-items">
            {programming_languages.map((item, index) => (
              <div className="tagslut-item" key={index} onClick={() => addSkill(item)}>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* tagslut list */}
      <div className="skills">
        <div className="skills-list">
          {skills.map((item, index) => (
            <div className="skills-item" key={index}>
              <span className="">{item}</span>
              <XButton className="skill-del" onClick={() => {}} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
