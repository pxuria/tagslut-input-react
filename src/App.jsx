import { useState, useRef } from "react";
import { programming_languages } from "./constants/languages.json";
import TagSlutInput from "./components/TagSlutInput";
import TagslutSuggestions from "./components/TagslutSuggestions";
import TagslutSkill from "./components/TagslutSkill";

import "./App.css";

const App = () => {
  const [inputVal, setInputVal] = useState("");
  const [skills, setSkills] = useState([]);
  const [suggestionLang, setSuggestionLang] = useState(programming_languages);
  const [toggleSuggestions, setToggleSuggestions] = useState(false);

  const tagslutRef = useRef(null);

  // onChangeHandler
  const changeDataHandler = (e) => {
    // get the value
    const value = e.target.value;
    setInputVal(value);

    // filter suggestions
    if (value === "") {
      const newSuggestions = programming_languages.filter((item) => !skills.includes(item));
      setSuggestionLang(newSuggestions);
    }
    const filteredSuggestions = programming_languages.filter((suggestion) =>
      suggestion.toLowerCase().startsWith(value.toLowerCase())
    );
    setSuggestionLang(filteredSuggestions);
  };

  // add skill Handler
  const addSkillHandler = (newItem) => {
    // add skill
    const skillExistence = skills.includes(newItem);
    if (skillExistence) return;
    if (newItem === "") return;
    else setSkills((prev) => [...prev, newItem]);

    // remove the selected item from the list
    const newLanguages = [...suggestionLang];
    const skillIndex = suggestionLang.findIndex((item) => item === newItem);
    if (skillIndex !== -1) {
      newLanguages.splice(skillIndex, 1);
      setSuggestionLang(newLanguages);
    }

    // reseting
    setToggleSuggestions(false);
    setInputVal("");
    tagslutRef.current.blur();
  };

  const inputFocusHandler = () => {
    const newSuggestions = programming_languages.filter((item) => !skills.includes(item));
    setSuggestionLang(newSuggestions);
    setToggleSuggestions(true);
  };

  return (
    <>
      {/* tagslut input */}
      <TagSlutInput
        setToggleSuggestions={setToggleSuggestions}
        addSkillHandler={addSkillHandler}
        inputVal={inputVal}
        changeDataHandler={changeDataHandler}
        toggleSuggestions={toggleSuggestions}
        tagslutRef={tagslutRef}
        inputFocusHandler={inputFocusHandler}
      />

      {/* suggestions list */}
      {toggleSuggestions && <TagslutSuggestions suggestionLang={suggestionLang} addSkillHandler={addSkillHandler} />}

      {/* tagslut list */}
      <TagslutSkill skills={skills} setSkills={setSkills} />
    </>
  );
};

export default App;
