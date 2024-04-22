import classes from "./TagslutSuggestions.module.css";

const TagslutSuggestions = ({ suggestionLang, addSkillHandler }) => {
  return (
    <div className={classes["tagslut-list"]}>
      <ul className={classes["tagslut-items"]}>
        {suggestionLang.map((item, index) => (
          <li className={classes["tagslut-item"]} key={index} onClick={() => addSkillHandler(item)}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagslutSuggestions;
