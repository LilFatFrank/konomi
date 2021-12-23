import Routes from "./Routes/Routes";
import classes from "./styles/app.module.scss";

const App = () => {
  return (
    <div className={classes.app}>
      <Routes />
    </div>
  );
};

export default App;
