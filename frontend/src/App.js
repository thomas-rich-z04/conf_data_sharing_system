import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/Header";
import SignUP from "./pages/SignUp";
import Signin from "./pages/SignIn";
import HomeAdmin from "./component/admin/index";
import HomeUser from "./component/user/index";
import Protected from "./component/private/Protected";

import Sender from "./component/sender/index";
import Receiver from "./component/receiver/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Protected />
        <Switch>
          <Route path="/signup" component={SignUP} exact />
          <Route path="/signin" component={Signin} exact />
          <Route path="/admin" component={HomeAdmin} exact />
          <Route path="/user" component={HomeUser} exact />
          <Route path="/sender" component={Sender} exact />
          <Route path="/receiver" component={Receiver} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
