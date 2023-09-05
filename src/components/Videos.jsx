import Video from "./Video";
import classes from "./styles/Videos.module.css";
export default function Videos() {
  return (
    <div className={classes.videos}>
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
}
