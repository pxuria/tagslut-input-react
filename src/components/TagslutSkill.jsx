import XButton from "./UI/XButton";

import classes from "./TagslutSkill.module.css";

const TagSlutSkill = ({ skills, deleteSkillHandler }) => {
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
