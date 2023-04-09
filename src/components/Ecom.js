import React from "react";
import "./Ecom.css";
import BlogSection from "./BlogSection";

function Ecom() {
  return (
    <>
    <div style={{display:"flex", justifyContent: "space-around", alignItems:"center", flexFlow:"wrap"}}>
      <BlogSection/>
      <BlogSection/>
      <BlogSection/>
      <BlogSection/>
      <BlogSection/>
      <BlogSection/>
    </div>
    </>
  );
}

export default Ecom;
