import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import { Oracle } from "src/screens";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Oracle />} />
      </Switch>
    </Router>
  );
};

export default Routes;
