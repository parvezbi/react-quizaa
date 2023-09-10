import Checkbox from "./Checkbox";
import classes from "../components/styles/Answers.module.css";
function Answers() {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text="Test Answer" />
    </div>
  );
}

export default Answers;
