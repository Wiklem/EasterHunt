import React from "react";
import EasterContextProvider from "../EasterContext";
import Landingpage from "../../containers/Landingpage";
import styles from "./Layout.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "../../context/AuthContext";
import Header from "./Header";
import ManageHunt from "../../containers/ManageHunt/ManageHunt";

interface ILayout {}

const Layout: React.FC<ILayout> = () => {
  return (
    <AuthProvider>
      <Router>
        <div className={styles.layout}>
          <EasterContextProvider>
            <Header />
            <div className={styles.container}>
              <Switch>
                <Route
                  path="/dev"
                  render={(props) => <Landingpage {...props} dev={true} />}
                />
                <Route path={"/manageHunt"}>
                  <ManageHunt />
                </Route>
                <Route path={"/"}>
                  <Landingpage />
                </Route>
              </Switch>
            </div>
          </EasterContextProvider>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default Layout;
