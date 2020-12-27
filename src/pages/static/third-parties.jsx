import React, { Component } from "react";
import { CardGroup, Card } from "react-bootstrap";
import { FaLink } from "react-icons/fa";
import "../../css/thirdParties.css";

export class ThirdPartiesPage extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.thirdParties = [
      {
        title: "🎄│ Chill Chamber™",
        image:
          "https://cdn.discordapp.com/icons/750159162956054570/d15437f687895af53d967e0ebc90115b.jpg",
        id: "chillChamber",
        description: "A chill Discord server for anyone!",
        links: [
          {
            name: "Invite Link",
            link: "https://discord.com/invite/VVDXSsU"
          }
        ]
      }
    ];
  }

  render() {
    const mapLinks = (links) => {
      let lastLink = links[links.length - 1].link;

      return links.map((partyLink) => {
        return (
          <span key={`${partyLink.link}`}>
            <span
              className="js-link"
              style={{ fontSize: "14px", marginTop: "10px" }}
              onClick={() => window.open(`${partyLink.link}`, "_blank")}
              key={`${partyLink.link}`}
            >
              {partyLink.name}
            </span>
            <span className="linkDivider">
              {partyLink.link === lastLink ? "" : " | "}
            </span>
          </span>
        );
      });
    };

    return (
      <>
        <CardGroup>
          {this.thirdParties.map((party) => {
            return (
              <Card key={party.id} bg="dark" className="thirdPartyCard">
                <Card.Img
                  src={party.image}
                  className="thirdPartyCardImg"
                  onClick={() => window.open(`${party.image}`, "_blank")}
                />
                <Card.Body>
                  <Card.Title className="thirdPartyCardTitle">
                    {party.title}
                  </Card.Title>
                  <Card.Text style={{ color: "lightgrey" }}>
                    <div className="thirdPartyCardDescription">
                      {party.description}
                    </div>
                    <div className="thirdPartyCardLinksTitle">
                      <FaLink className="thirdPartyCardLinksTitleIcon" />
                      Links
                    </div>
                    <div>{mapLinks(party.links)}</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </CardGroup>
      </>
    );
  }
}
