import React from "react";
import { Button } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";
import ReactTilt from "react-parallax-tilt";
import "../../css/landing.css";

export function LandingPage() {
  const gridItems = [
    {
      id: "latestReleases",
      title: "Latest Releases",
      content: <></>
    },
    {
      id: "comingSoon",
      title: "Coming Soon",
      content: (
        <>
          - JavaScript + HTML tutorials (p0tato)
          <br />- Free art, hand-drawn & digital (bug)
        </>
      )
    },
    {
      id: "contactUs",
      title: "Contact Us",
      content: (
        <>
          <Button variant="success" href="/contactus">
            <FaEnvelope />
            Contact Us
          </Button>
        </>
      )
    }
  ];

  return (
    <>
      <div className="landingImgs">
        <img
          alt=""
          src="https://cdn.discordapp.com/attachments/723589296681910322/793303137745109002/circle-cropped_1.png"
          className="landingLogo"
        />
        <img
          src="https://cdn.discordapp.com/attachments/723589296681910322/793310366234574868/welcome.png"
          alt=""
        />
      </div>

      <div className="landingDescription">
        Orelabs is a programming, art, and gaming company that releases and
        manages a large range of products for everyone, completely for free.
      </div>

      <div className="landingGrid">
        {gridItems.map((item) => {
          return (
            <>
              <ReactTilt scale={1.1} tiltEnable={false} key={item.id}>
                <div className="landingGridItem">
                  <div className="landingGridItemTitle">{item.title}</div>
                  <div className="landingGridItemContent">{item.content}</div>
                </div>
              </ReactTilt>
            </>
          );
        })}
      </div>
    </>
  );
}
