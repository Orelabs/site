import React, { Component } from "react";
import { CardGroup, Card, Badge } from "react-bootstrap";
import { FaLink } from "react-icons/fa";
import "../../css/staff.css";

export class StaffPage extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.staff = [
      {
        title: "p0tato",
        badges: [
          {
            id: "founder-p0tato",
            name: "Founder",
            theme: "success"
          },
          {
            id: "fullstackDev-p0tato",
            name: "Full stack Developer",
            theme: "primary"
          }
        ],
        image:
          "https://cdn.discordapp.com/avatars/509167169087733773/2a0d1ff5e14d5fdf15208dccd799f8f8.jpg?size=512",
        id: "p0tato",
        description:
          "Founder, frontend and backend (fullstack) developer for Orelabs.",
        links: [
          {
            id: "discordServer",
            name: "Discord",
            link: "https://discord.com/invite/pWXzvNZsS5"
          }
        ]
      },
      {
        title: "bug",
        badges: [
          {
            id: "founder-bug",
            name: "Founder",
            theme: "success"
          },
          {
            id: "frontendDev-bug",
            name: "Frontend Developer",
            theme: "primary"
          }
        ],
        image:
          "https://cdn.discordapp.com/attachments/723589296681910322/792949629175857162/unnamed.gif",
        id: "bug",
        description: "Founder, designer, and frontend developer for Orelabs.",
        links: [
          {
            id: "discordServer",
            name: "Discord",
            link: "https://discord.com/invite/pWXzvNZsS5"
          }
        ]
      }
    ];
  }

  render() {
    const mapLinks = (links) => {
      if (!links.length > 0) return <></>;

      let lastLink = links[links.length - 1].link;

      return links.map((staffMemberLink) => {
        return (
          <>
            <span
              className="js-link"
              style={{ fontSize: "14px", marginTop: "10px" }}
              onClick={() => window.open(`${staffMemberLink.link}`, "_blank")}
              key={`${staffMemberLink.id}`}
            >
              {staffMemberLink.name}
            </span>
            <span className="linkDivider">
              {staffMemberLink.link === lastLink ? "" : " | "}
            </span>
          </>
        );
      });
    };

    const mapBadges = (badges) => {
      if (!badges.length > 0) return <></>;

      let lastBadge = badges[badges.length - 1].id;

      return badges.map((badge) => {
        return (
          <Badge
            key={`${badge.id}`}
            variant={`${badge.theme}`}
            style={{
              marginBottom: `${badge.id === lastBadge ? "15px" : "auto"}`
            }}
          >
            {badge.name}
          </Badge>
        );
      });
    };

    return (
      <>
        <CardGroup>
          {this.staff.map((staffMember) => {
            return (
              <Card key={staffMember.id} bg="dark" className="staffCard">
                <Card.Img
                  src={staffMember.image}
                  className="staffCardImg"
                  onClick={() => window.open(`${staffMember.image}`, "_blank")}
                />
                <Card.Body>
                  <Card.Title className="staffCardTitle">
                    {mapBadges(staffMember.badges)}
                    {staffMember.title}
                  </Card.Title>
                  <Card.Text style={{ color: "lightgrey" }}>
                    <div className="staffCardDescription">
                      {staffMember.description}
                    </div>
                    <div className="staffCardLinksTitle">
                      <FaLink className="staffCardLinksTitleIcon" />
                      Links
                    </div>
                    {mapLinks(staffMember.links)}
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
