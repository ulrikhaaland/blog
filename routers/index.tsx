import { observer } from "mobx-react";
import React from "react";
import { Route } from "react-router-dom";
import LayoutPage from "../pages/LayoutPage";

const Router = () => {
  return (
    <>
      <Route path="/" element={<LayoutPage />} />
    </>
  );
};

export default observer(Router);
