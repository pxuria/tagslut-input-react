import Arrow from "./UI/Arrow";

import classes from "./TagslutInput.module.css";

const TagslutInput = ({
  setToggleSuggestions,
  onKeyDownHandler,
  inputVal,
  changeDataHandler,
  toggleSuggestions,
  tagslutRef,
  inputFocusHandler,
}) => {
  return (
    <>
      {/* tagslut input */}
      <div className={classes.tagslut}>
        <div>
          <label htmlFor="tagslut" className={classes["tagslut-label"]}>
            Skills*
          </label>
          <div className={classes["tagslut-fields"]}>
            <input
              type="text"
              id="tagslut"
              ref={tagslutRef}
              onFocus={inputFocusHandler}
              onKeyDown={onKeyDownHandler}
              onChange={changeDataHandler}
              className={classes["tagslut-input"]}
              value={inputVal}
              autoComplete="off"
            />

            <Arrow
              onClick={() => setToggleSuggestions(!toggleSuggestions)}
              className={toggleSuggestions ? "" : "ratation"}
            />
          </div>
          <p className={classes["tagslut-fields-guide"]}>Add your skills by typing and pressing Enter key.</p>
        </div>
      </div>
    </>
  );
};

export default TagslutInput;
