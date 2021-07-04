import React from "react";
import styles from "./styleheader.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Calculator from "../calculator/Calculator";
import Nedir from "../nedir/Nedir";

function Header() {
  return (
    <Router>
      <div>
        <div className={styles.headerdiv}>
          <h1>Vücut Kitle Endeksi Hesaplama</h1>
        </div>
        <div className={styles.routerDisDiv}>
          <div className={styles.routerDivi}>
            <Link to="/">AnaSayfa</Link>
            <Link to="/calculator">VKİ Hesapla</Link>
            <Link to="/nedir">VKİ Nedir?</Link>
          </div>
        </div>
        <Switch>
          <Route path="/calculator" component={Calculator} />
          <Route path="/nedir" component={Nedir} />
          <Route path="/" component={Calculator} />
        </Switch>
      </div>
    </Router>
  );
}

export default Header;
