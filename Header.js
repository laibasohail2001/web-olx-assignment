
import React from 'react';
import logoimage from '../logos/olx.png';
import banner1 from '../logos/banner1.png';
import slider2 from '../logos/slider2.webp';
import slider3 from '../logos/slider3.webp';
import { Link } from "react-router-dom";






class Header extends React.Component {
  render() {
    return (
      //     <div className='header fixed flex'>
      //        <nav className="navbar navbar-light bg-light">
      // <a className="navbar-brand"><img className='logo' src={logoimage} width='80'/></a> 
      // <input className='search' type='text' placeholder='pakistan'></input>
      // </nav>
      // </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img className='logo' src={logoimage} width='80' />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <div className="dropdown">
        <button className="btn-location dropdown-toggle"  placeholder='location' type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          location
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">karachi</a>
          <a className="dropdown-item" href="#">lahore</a>
          <a className="dropdown-item" href="#">Azad Kashmir</a>
        </div>
      </div>

            </li>
            <li className="nav-item">
              <form className="form-inline my-2 my-lg-0 search">
                <input className="search" type="search" placeholder="Find cars,mobile phones and more.." aria-label="Search" />

              </form>

            </li>
            <Link to='/login' className='login'><u>LOGIN</u></Link>
            <a className='sell' href='#'>SELL</a>
            {/* <li className="nav-item dropdown">
               <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Dropdown
               </a>
               <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                 <a className="dropdown-item" href="#">Action</a>
                 <a className="dropdown-item" href="#">Another action</a>
                 <div className="dropdown-divider" />
                 <a className="dropdown-item" href="#">Something else here</a>
               </div>
             </li>
             <li className="nav-item">
               <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
             </li>
           </ul>
           <form className="form-inline my-2 my-lg-0">
             <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
             <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
           </form>
         
         </div> */}

          </ul>
        </div>
      </nav>










    );

  }

}


class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="dropdown">
            <button className="btn  dropdown-toggle drop" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              All Categories
        </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link to='/Mobile' className="dropdown-item" > Mobile Phones</Link>
              <Link to='/Car' className="dropdown-item" >Cars</Link>
              <Link to='/land' className="dropdown-item" > Land</Link>
              
            </div>
          </div>
          {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li> */}


          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link to="/Mobile">Mobile Phones</Link>
              </li>
              <li className="nav-item ">
                <Link to="/Car">Cars<span className="sr-only">(current)</span></Link>
              </li>
               <li className="nav-item l2">
            <Link to="/Car">Motorcycles<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active l2">
            <Link to="/land">Land&plots<span className="sr-only">(current)</span></Link>
            </li> 
            <li className="nav-item active l2">
            <Link to="/land">Houses<span className="sr-only">(current)</span></Link>
            </li> 
            <li className="nav-item active l3">
            <Link to="/Mobile">Tv-Audio-Video<span className="sr-only">(current)</span></Link>
            </li> 
            <li className="nav-item active l4">
            <Link to="/Mobile">Tablets<span className="sr-only">(current)</span></Link>
            </li> 

            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
<img src={slider2} className='picture'/>

class Slider extends React.Component {
  render() {
    return (
      <div>
        
                
        <div className="container ">
         <div className="row main ">
           <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className='container'>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
         <div className="carousel-inner">
           <div className="carousel-item active">
             <img src={slider2} className="picture"  />
           </div>
           <div className="carousel-item">
            <img src={slider3} className="picture"  />
          </div>
          <div className="carousel-item">
            <img src={banner1} className="picture" />
          </div>
       </div>
       <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
         <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
         </a>
       </div>

        
      </div>
      </div>
      </div>
      </div>
      </div>
     /* // <div className="container-fluid ">
      //   <div className="row main ">
      //     <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
      //     <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      //   <div className="carousel-inner">
      //     <div className="carousel-item active">
      //       <img src={banner1} className="d-block"  />
      //     </div>
      //     <div className="carousel-item">
      //       <img src={banner2} className="d-block w-100"  />
      //     </div>
      //     <div className="carousel-item">
      //       <img src={banner3} className="d-block w-100" />
      //     </div>
      //   </div>
      //   <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      //     <span className="carousel-control-prev-icon" aria-hidden="true" />
      //     <span className="sr-only">Previous</span>
      //   </a>
      //   <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      //     <span className="carousel-control-next-icon" aria-hidden="true" />
      //     <span className="sr-only">Next</span>
      //   </a>
      // </div>

            // </div>
            // </div>
            // </div> */
            
            
             
             
    );
  }
}
export {
  Header,
  Navbar,
  Slider

}

