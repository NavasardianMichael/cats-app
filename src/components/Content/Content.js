import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cats from "../Cats/Cats";
import NoCategoriesHint from '../NoCategoriesHint/NoCategoriesHint'
import Categories from '../Categories/Categories'
import styles from './content.module.css'

export default function Content() {

  return (
    <div>
      <Router>
        <Categories />
        <div className={styles.content}>
          <Switch>
            <Route path="/categories/:categoryId">
              <Cats />
            </Route>
            <Route path="/">
              <NoCategoriesHint />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}