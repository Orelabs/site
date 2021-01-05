import React from "react";
import ArtComponent from "./artComponent";
import "./art.css";

export function DigitalArtPage() {
  return (
    <>
      <img
        src="https://cdn.discordapp.com/attachments/723589296681910322/794244622255521843/digitalart.png"
        alt=""
      />
      <hr />
      <p className="header">
        Any art that I have done digitally, using{" "}
        <a
          className="js-link"
          href="https://apps.apple.com/us/app/procreate/id425073498"
          target="_blank"
        >
          Procreate
        </a>{" "}
        (iPad version).{" "}
        <strong>The two artworks below may be hand-drawn.</strong>
      </p>
      <ArtComponent />
    </>
  );
}
