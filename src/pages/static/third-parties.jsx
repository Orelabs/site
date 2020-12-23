import React, { Component } from "react";
import { CardGroup, Card } from "react-bootstrap";
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
      },
      {
        title: "Hoppi Discord Bot",
        image: "https://hoppibot.github.io/hoppi/images/logorounded.png",
        id: "hoppiSupport",
        description: (
          <>
            Hoppi is an awesome bot for any server. Click the links below to
            invite Hoppi, visit Hoppi's website, <em>and</em> join the support
            server.
          </>
        ),
        links: [
          {
            id: "website",
            name: "Website",
            link: "https://hoppi.glitch.me"
          },
          {
            id: "inviteLink",
            name: "Invite Link",
            link:
              "https://discord.com/oauth2/authorize?client_id=729803338228695060&permissions=2079849719&scope=bot"
          },
          {
            id: "supportServer",
            name: "Support Server",
            link: "https://discord.com/invite/bVJtZpZ"
          }
        ]
      }
    ];
  }

  render() {
    var maxDescriptionLen = 160;

    const mapLinks = (links) => {
      let lastLink = links[links.length - 1].link;

      return links.map((partyLink) => {
        return (
          <>
            <span
              className="js-link"
              style={{ fontSize: "14px", marginTop: "10px" }}
              onClick={() => window.open(`${partyLink.link}`, "_blank")}
              key={`${partyLink.id}`}
            >
              {partyLink.name}
            </span>
            <span className="linkDivider">
              {partyLink.link === lastLink ? "" : " | "}
            </span>
          </>
        );
      });
    };

    return (
      <>
        <CardGroup>
          {this.thirdParties.map((party) => {
            return (
              <Card key={party.id} bg="dark" className="thirdPartyCard">
                <Card.Img src={party.image} className="thirdPartyCardImg" />
                <Card.Body>
                  <Card.Title className="thirdPartyCardTitle">
                    {party.title}
                  </Card.Title>
                  <Card.Text style={{ color: "lightgrey" }}>
                    <div
                      className={`thirdPartyCardDescription${
                        party.description.length >= maxDescriptionLen
                          ? " thirdPartyCardDescriptionOverflow"
                          : ""
                      }`}
                    >
                      {party.description}
                    </div>
                    <div className="thirdPartyCardLinksTitle">
                      <img
                        src="https://img.icons8.com/android/24/000000/link.png"
                        alt=""
                      />
                      Links
                    </div>
                    {mapLinks(party.links)}
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
