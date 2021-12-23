import { SAMPLE_DATA_ARRAY } from "src/utils/constants";
import { CardWrapper, Header } from "../../components";
import classes from "./Oracle.module.scss";

const Oracle = () => {
  return (
    <main className={classes.main}>
      <Header />
      <CardWrapper cards={SAMPLE_DATA_ARRAY} />
    </main>
  );
};

export default Oracle;
