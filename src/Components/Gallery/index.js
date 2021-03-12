import React from "react";
import "../../stylesheets/Gallery.css";
import imgArr from "./gallery.json";


const baseURL = process.env.PUBLIC_URL;

const styleGallery = {
  width: "100%",
  display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "center", alignItems: "center"
};

const Gallery = () => (
  <div className="" style={styleGallery}>
    {imgArr.map((item, index) => (
      <a key={index} href={baseURL+item.src} rel="noopener" target="_blank" >
        <img className={item.className} style={item.style} src={baseURL+item.src} alt={"img_"+(index+1)}/>
      </a>
    ))}
  </div>
);

export default Gallery;