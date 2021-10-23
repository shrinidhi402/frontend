import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import clothes from "./clothes.png";
import clothes1 from "./clothes1.png";

function HeaderNavbar() {

  let history = useHistory();
  
  const menSellRedirect = () => {
    history.push("/sell-men");
  };
  return (
    <>
      <Container fluid className="container2">
        <div className="navoptions">
          <div className="dropdown">
            <a href="">SHOP</a>
            <div className="dropdown-content">
              <button>Mens</button>
              <button>Womens</button>
              <button>Kids</button>
              <div className="images">
                <img src={clothes} />
                <img src={clothes1} />
              </div>
            </div>
          </div>
          <div className="dropdown">
            <a href="">SELL</a>
            <div className="dropdown-content">
              <button type="button" onClick={menSellRedirect}>Mens</button>
              <button>Womens</button>
              <button>Kids</button>
              <div className="images">
                <img src={clothes} />
                <img src={clothes1} />
              </div>
            </div>
          </div>
          <div className="dropdown">
            <a href="">ABOUT US</a>
          </div>
          <div className="dropdown">
            <a href="">FAQs</a>
          </div>
        </div>
      </Container>
    </>
  );
}
export default HeaderNavbar;
