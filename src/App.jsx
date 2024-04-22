import { useState, useRef } from "react";
import { programming_languages } from "./constants/languages.json";
import TagSlutInput from "./components/TagSlutInput";
import TagslutSuggestions from "./components/TagslutSuggestions";
import TagslutSkill from "./components/TagslutSkill";

import "./App.css";

const App = () => {
  const [inputVal, setInputVal] = useState("");
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState(programming_languages);
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
      const newSuggestions = languages.filter((item) => !skills.includes(item));
      setSuggestionLang(newSuggestions);
    }
    const filteredSuggestions = languages.filter((suggestion) =>
      suggestion.toLowerCase().startsWith(value.toLowerCase())
    );
    setSuggestionLang(filteredSuggestions);
  };

  // check Enter key pressing
  const onKeyDownHandler = (e) => {
    const key = e.keyCode;
    if (key === 13) addSkillHandler(inputVal);
    return;
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

  // delete skill Handler
  const deleteSkillHandler = (item) => {
    const newSkills = [...skills];
    const skillIndex = skills.findIndex((lang) => lang === item);

    if (skillIndex !== -1) {
      newSkills.splice(skillIndex, 1);
      setSkills(newSkills);
    }
  };

  const inputFocusHandler = () => {
    const newSuggestions = languages.filter((item) => !skills.includes(item));
    setSuggestionLang(newSuggestions);
    setToggleSuggestions(true);
  };

  return (
    <>
      {/* tagslut input */}
      <TagSlutInput
        setToggleSuggestions={setToggleSuggestions}
        onKeyDownHandler={onKeyDownHandler}
        inputVal={inputVal}
        changeDataHandler={changeDataHandler}
        toggleSuggestions={toggleSuggestions}
        tagslutRef={tagslutRef}
        inputFocusHandler={inputFocusHandler}
      />

      {/* suggestions list */}
      {toggleSuggestions && <TagslutSuggestions suggestionLang={suggestionLang} addSkillHandler={addSkillHandler} />}

      {/* tagslut list */}
      <TagslutSkill skills={skills} deleteSkillHandler={deleteSkillHandler} />
    </>
  );
};

export default App;
