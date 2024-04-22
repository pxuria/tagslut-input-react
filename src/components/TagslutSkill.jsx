import XButton from "./UI/XButton";

import classes from "./TagslutSkill.module.css";

const TagSlutSkill = ({ skills, setSkills }) => {
  // delete skill Handler
  const deleteSkillHandler = (item) => {
    const newSkills = [...skills];
    const skillIndex = skills.findIndex((lang) => lang === item);

    if (skillIndex !== -1) {
      newSkills.splice(skillIndex, 1);
      setSkills(newSkills);
    }
  };
  return (
    <>
      <h2 className={classes["skills-header"]}>Skills:</h2>
      <div className={classes.skills}>
        <div className={classes["skills-list"]}>
          {skills.map((item, index) => (
            <div className={classes["skills-item"]} key={index}>
              <span>{item}</span>
              <XButton className={classes["skill-del"]} onClick={() => deleteSkillHandler(item)} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TagSlutSkill;
