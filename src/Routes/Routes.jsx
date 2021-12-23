import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import { Oracle, Send } from "src/screens";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Oracle />} />
        <Route path="/send" element={<Send />} />
      </Switch>
    </Router>
  );
};

export default Routes;
