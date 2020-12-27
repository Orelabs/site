import React, { Component } from "react";
import { CardGroup, Card } from "react-bootstrap";
import { FaLink } from "react-icons/fa";
import "../../css/products.css";

export class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.products = [
      {
        title: "Hoppi Discord Bot",
        image: "https://hoppibot.github.io/hoppi/images/logo.jpg",
        id: "hoppiSupport",
        description: (
          <>
            Hoppi is an awesome bot for any server. You can invite Hoppi, visit
            Hoppi's website, <em>and</em> join the support server below.
          </>
        ),
        links: [
          {
            id: "inviteLink",
            name: "Add Bot",
            link:
              "https://discord.com/oauth2/authorize?client_id=729803338228695060&permissions=2079849719&scope=bot"
          },
          {
            id: "website",
            name: "Website",
            link: "https://hoppi.glitch.me"
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
    const mapLinks = (links) => {
      let lastLink = links[links.length - 1].link;

      return links.map((productLink) => {
        return (
          <>
            <span
              className="js-link"
              style={{ fontSize: "14px", marginTop: "10px" }}
              onClick={() => window.open(`${productLink.link}`, "_blank")}
              key={`${productLink.id}`}
            >
              {productLink.name}
            </span>
            <span className="linkDivider">
              {productLink.link === lastLink ? "" : " | "}
            </span>
          </>
        );
      });
    };

    return (
      <>
        <CardGroup>
          {this.products.map((product) => {
            return (
              <Card key={product.id} bg="dark" className="productCard">
                <Card.Img
                  src={product.image}
                  className="productCardImg"
                  onClick={() => window.open(`${product.image}`, "_blank")}
                />
                <Card.Body>
                  <Card.Title className="productCardTitle">
                    {product.title}
                  </Card.Title>
                  <Card.Text style={{ color: "lightgrey" }}>
                    <div className="productCardDescription">
                      {product.description}
                    </div>
                    <div className="productCardLinksTitle">
                      <FaLink className="productCardLinksTitleIcon" />
                      Links
                    </div>
                    {mapLinks(product.links)}
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
