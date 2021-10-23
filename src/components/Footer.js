import React from 'react'
import { Container } from 'react-bootstrap'
import InstagramIcon from '@material-ui/icons/Instagram';
import CopyrightIcon from '@material-ui/icons/Copyright';



function Footer() {
    return (
      <>
        <Container fluid className="container1">
          <div className="top">
            <div className="women_page">
              <h5>Women's Apparels</h5>
              <a href="#">Tops</a>
              <a href="#">Shorts</a>
              <a href="#">Skirts</a>
              <a href="#">Bottoms</a>
            </div>

            <div className="men_page">
            <h5>Mens's Apparels</h5>
            <a href="#">Shirts</a>
              <a href="#">Bermudas</a>
              <a href="#">Suits</a>
              <a href="#">Shorts</a>
            </div>

            <div className="kids_page">
            <h5>Kid's Apparels</h5>
            <a href="#">Shirts</a>
              <a href="#">Bermudas</a>
              <a href="#">Bottoms</a>
              <a href="#">Shorts</a>
            </div>

            <div className="company_page">
            <h5>The Company</h5>
            <a href="#">About Us</a>
              <a href="#">FAQs</a>
            </div>

            <div className="contact_page">
            <h5>Get in touch</h5>
            <a href="#">Contact Us</a>
              
              <InstagramIcon className="instagram_icon"/>
            </div>
          </div>
          <div className="lower_content">
              <CopyrightIcon className="copyright_icon"/>
              <h6>ThriftCitt Inc. All Rights Reserved</h6>
            </div>
            </Container>
        
          
           
       </>
    )
}

export default Footer
