import React from 'react';
import ficon1 from '../logos/ficon1.png'
import iicon from '../logos/iicon.png'
import yicon from '../logos/yicon.png'
import ticon from '../logos/ticon.jpg'
import image16 from '../logos/image16.webp'
import image17 from '../logos/image17.webp'
import top from '../logos/top.png'
import { Link } from "react-router-dom"








class Footer extends React.Component {
    render() {
        return (

            <footer className="page-footer font-small footer">
        {/* Footer Links */}
        <div className="container-fluid text-center text-md-left mt-0">
          {/* Grid row */}
          <div className="row mt-0">
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mb-2 mt-3">
              {/* Content */}
              <h6 className="text-uppercase font-weight-bold">POPULAR CATEGORIES</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
              <Link to ='/car'><p>Car</p></Link>
              <Link to='/land'><p>Flat for rent</p></Link> 
              <Link to ='/mobile'><p>Mobile phones</p></Link>
              
              
              <Link to ='/mobile'><p>Jobs</p></Link>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mb-2 mt-3">
              {/* Content */}
              <h6 className="text-uppercase font-weight-bold">Trendng Searches</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
              <a href='#'><p>bikes</p></a>
              <a href='#'><p>Watches</p> </a>
              <a href='#'><p>Books</p></a>
              <a href='#'><p>Dogs</p></a>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mb-2 mt-3">
              {/* Content */}
              <h6 className="text-uppercase font-weight-bold">About Us</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
              <a href='https://www.olxgroup.com'><p>About OLX Group</p></a>
              <a href='https://blog.olx.com.pk'><p>OLX Blog</p></a>
              <a href='https://help.olx.com.pk'><p>Contact Us</p></a>
              <a href='https://www.surveygizimo.com'><p>OLX for business</p></a>
             
              
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mb-2 mt-3">
              {/* Content */}
              <h6 className="text-uppercase font-weight-bold">OLX</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
              <a href='https://help.olx.com.pk'><p>Help</p></a>
              <a href='#k'><p>Sitemaps</p></a>
              
              <a href='https://help.olx.com.pk'><p>Legal and privacy information</p></a>
              
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mb-2 mt-3">
              <h6 className="text-uppercase font-weight-bold">Connect With Us</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
              <ul className="social-network social-circle">
                 <li><a href="#" className="icoFacebook" title="Facebook"><img className='facebook' src={ficon1} /></a></li>
                <li><a href="#" className="icoTwitter" title="Twitter"><img className='facebook' src={iicon} /></a></li>
                <li><a href="#" className="icoInstagram" title="Instagram"><img className='facebook' src={ticon} /></a></li>
                <li><a href="#" className="icoYoutube" title="Youtube"><img className='facebook' src={yicon} /></a></li>
              </ul>	
              
            <h5 className='olx1'>Get your app Today</h5><br /> <br />
            <a href="#"><img src={image16}  /></a>
            <a href="#"><img className='olx3' src={image17}  /></a>
            
            </div>
              </div>
              </div>
              <div>
        <div className="footer-copyright ml-0 px-5 py-3" style={{color:'white'}}> Other Countries India - South Africa - Indonesia.
          <a  className='last' href="#" style={{color: 'white'}}>Free Classifieds in Pakistan. © 2006-2020 OLX</a>
        </div>
        <div className="container">
          <div className="row justify-content-center text-center">
          </div>
        </div>
        <a id="back-to-top" href="#" className="btn btn-light btn-lg back-to-top" role="button"><img src={top} height="50px" width="50px" /></a> 
        {/* Copyright */}
      </div>
            




              
              </footer>




             
           
            
        );
    }
}
export default Footer;
