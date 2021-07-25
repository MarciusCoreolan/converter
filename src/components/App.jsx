import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCourse } from "../redux/actions";
import { Route } from "react-router-dom";
import Course from "./Course";
import Converter from "./Converter";
import Header from "./Header";

function App(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourse());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Route exact path={"/"}>
        <Course />
      </Route>
      <Route exact path={"/converter"}>
        <Converter />
      </Route>
    </div>
  );
}

export default App;
