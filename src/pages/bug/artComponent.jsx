import React from "react";

const latestArtwork =
  "https://cdn.discordapp.com/attachments/723589296681910322/794750116997234758/IMG_2735.PNG";
const favoriteArtwork =
  "https://cdn.discordapp.com/attachments/723589296681910322/794357525264072724/That_Vibe.png";

export default function ArtComponent() {
  return (
    <>
      <div className="componentContainer">
        <div className="artGrid">
          <div className="artGridItem">
            <h4 className="artGridItemText">Latest Artwork</h4>
            <img src={latestArtwork} alt="" className="artGridItemImg" />
          </div>
          <div className="artGridItem">
            <h4 className="artGridItemText">Favorite Artwork</h4>
            <img src={favoriteArtwork} alt="" className="artGridItemImg" />
          </div>
        </div>
      </div>
    </>
  );
}
