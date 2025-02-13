import React from "react";
import { TablaInventarios } from "./tabla_inventarios";
import Footer from "../footer";


export const GridTableInventarios = () => {
  return (
    <>
    <div className="px-4 grid gap-3 grid-cols-12">
      <TablaInventarios/>
    </div>
     <Footer/>
    </>

  );
};