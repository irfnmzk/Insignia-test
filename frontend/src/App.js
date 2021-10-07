import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { ModalProvider } from "@apideck/components";
import CustomerPage from "./pages/Customers";
import OrderPage from "./pages/Order";

import "./styles/output.css";

function App() {
  return (
    <ModalProvider>
      <Router>
        <Switch>
          <Route path="/order" component={OrderPage} />
          <Route path="/customer" component={CustomerPage} />
          <Redirect from="/" to="/order" />
        </Switch>
      </Router>
    </ModalProvider>
  );
}

export default App;
