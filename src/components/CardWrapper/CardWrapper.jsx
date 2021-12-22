import { Card } from "..";
import classes from "./CardWrapper.module.scss";

const CardWrapper = () => {
  return (
    <div className={classes["card-wrapper"]}>
      <Card />
    </div>
  );
};

export default CardWrapper;
