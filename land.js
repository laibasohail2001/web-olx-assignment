import React , {Component} from 'react';
import p1 from '../logos/p1.webp';
import p2 from '../logos/p2.webp';
import p3 from '../logos/p3.webp';
import p4 from '../logos/p4.webp';
import p5 from '../logos/p5.webp';
import p6 from '../logos/p6.webp';
import p7 from '../logos/p7.webp';
import p8 from '../logos/p8.webp';
import p9 from '../logos/p9.webp';
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown'
// Popular Searches:
// farm house
// -
// taiser town
// -
// saadi garden
// -
// naya nazimabad
// -
// scheme 33
// -
// plot
// -
// safari palm village

class Plot extends Component {
  render() {
    return (
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Popular seacrhes:</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">farm house - <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">taiser town- <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">saadi garden -  <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">naya nazimabad -  <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">scheme 33 -  <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">plot -  <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">safari palm village -  <span class="sr-only">(current)</span></a>
            </li>
            

          </ul>
        </div>
      </nav>


      <div>
        <h1>LANDS AND PLOTS</h1><br /></div>
      <div>
        <h4>Filters</h4> <hr />

      </div>


      <div className="container-fluid ">
        <div className="row main ">
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <div className="container">

            {/* All Categories
Property for Sale
Land & Plots (25165)
Houses (14005)
Apartments & Flats (4885)
Shops - Offices - Commercial Space (3359)
Portions & Floors (636)
          */}

      
           

               <h4>
                  Categories <br /><br /></h4>
                  <div className="dropdown">
        <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categories
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">All Categories</a>
          <a className="dropdown-item" href="#">Property for Sale</a>
          <a className="dropdown-item" href="#">Land & Plots (25165)</a>
          <a className="dropdown-item" href="#">Houses (14005)</a>
          <a className="dropdown-item" href="#">Apartments & Flats (4885)</a>
          <a className="dropdown-item" href="#">Shops - Offices - Commercial Space (3359)</a>
          <a className="dropdown-item" href="#">Portions & Floors (636)</a>
          

          

        </div>
      </div>
      </div>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <div className="container ">
                    <div className="card" >
                      <h5 className='heading'>featured</h5>
                      <a href="#"><img className="card-img-top image" src={p1} alt="Card image" style={{ width: '50%' }} /></a>
                      <div className="card-body">
                        <h4 className="card-title">Rs 15,100</h4>
                        <h6 className='description'>Samsung A01 A10S A11 A21S....</h6>
                        <h6 className='last'>4 days ago</h6>
                      </div>
                    </div></div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <div className="container ">
                    <div className="card" >
                      <h5 className='heading'>featured</h5>
                      <a href="#"><img className="card-img-top image" src={p2} alt="Card image" style={{ width: '50%' }} /></a>
                      <div className="card-body">
                        <h4 className="card-title">Rs 15,100</h4>
                        <h6 className='description'>Samsung A01 A10S A11 A21S....</h6>
                        <h6 className='last'>4 days ago</h6>
                      </div>
                    </div>

                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <div className="container ">
                    <div className="card" >
                      <h5 className='heading'>featured</h5>
                      <a href="#"><img className="card-img-top image" src={p3} alt="Card image" style={{ width: '50%' }} /></a>
                      <div className="card-body">
                        <h4 className="card-title">Rs 15,100</h4>
                        <h6 className='description'>Samsung A01 A10S A11 A21S....</h6>
                        <h6 className='last'>4 days ago</h6>
                      </div>
                    </div>

                </div>
              </div>
              
                    </div>
                    </div>
                    <div className="container-fluid ">
          <div className="row main ">
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <div className="container">
              {/* Pakistan
Sindh
Karachi
Bahria Town Karachi (1112)
Scheme 33 (345)
Gulshan-e-Maymar (195)
Saadi Town (171)
Scheme 45 (168) */}

    

     <div className="dropdown">
        <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Locations
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">Pakistan</a>
          <a className="dropdown-item" href="#">Sindh</a>
          <a className="dropdown-item" href="#">Bahria Town Karachi (1112)</a>
          <a className="dropdown-item" href="#">Scheme 33 (345)</a>
          <a className="dropdown-item" href="#">Gulshan-e-Maymar (195)</a>
          <a className="dropdown-item" href="#">Saadi Town (171)</a>



          </div>
     </div>
     </div>
     </div>
     <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <div className="container ">
                    <div className="card" >
                      <h5 className='heading'>featured</h5>
                      <a href="#"><img className="card-img-top image" src={p4} alt="Card image" style={{ width: '50%' }} /></a>
                      <div className="card-body">
                        <h4 className="card-title">Rs 15,100</h4>
                        <h6 className='description'>Samsung A01 A10S A11 A21S....</h6>
                        <h6 className='last'>4 days ago</h6>
                      </div>
                    </div></div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <div className="container ">
                    <div className="card" >
                      <h5 className='heading'>featured</h5>
                      <a href="#"><img className="card-img-top image" src={p5} alt="Card image" style={{ width: '50%' }} /></a>
                      <div className="card-body">
                        <h4 className="card-title">Rs 15,100</h4>
                        <h6 className='description'>Samsung A01 A10S A11 A21S....</h6>
                        <h6 className='last'>4 days ago</h6>
                      </div>
                    </div>

                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <div className="container ">
                    <div className="card" >
                      <h5 className='heading'>featured</h5>
                      <a href="#"><img className="card-img-top image" src={p6} alt="Card image" style={{ width: '50%' }} /></a>
                      <div className="card-body">
                        <h4 className="card-title">Rs 15,100</h4>
                        <h6 className='description'>Samsung A01 A10S A11 A21S....</h6>
                        <h6 className='last'>4 days ago</h6>
                      </div>
                    </div>

                </div>
              </div>
              
                    </div>
                    </div>

          

          
                    <div className="container-fluid ">
          <div className="row main ">
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <div className="container">

       
              <div className="dropdown">
        <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Type:
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a href='#'><input type='checkbox' className="dropdown-item" />Residential Plots (20871) </a>
          <a href='#'><input type='checkbox' className="dropdown-item" />Commercial Plots (1834) </a>
          <a href='#'><input type='checkbox' className="dropdown-item" />Files (1346) </a>
          <a href='#'><input type='checkbox' className="dropdown-item" />Agricultural Land (562) </a>
          <a href='#'><input type='checkbox' className="dropdown-item" />Plot Form (353)</a>
          <a href='#'><input type='checkbox' className="dropdown-item" />
Industrial Land (199) </a>
        
         

         

      </div>
      </div>

      </div>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <div className="container ">
                    <div className="card" >
                      <h5 className='heading'>featured</h5>
                      <a href="#"><img className="card-img-top image" src={p7} alt="Card image" style={{ width: '50%' }} /></a>
                      <div className="card-body">
                        <h4 className="card-title">Rs 15,100</h4>
                        <h6 className='description'>Samsung A01 A10S A11 A21S....</h6>
                        <h6 className='last'>4 days ago</h6>
                      </div>
                    </div></div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <div className="container ">
                    <div className="card" >
                      <h5 className='heading'>featured</h5>
                      <a href="#"><img className="card-img-top image" src={p8} alt="Card image" style={{ width: '50%' }} /></a>
                      <div className="card-body">
                        <h4 className="card-title">Rs 15,100</h4>
                        <h6 className='description'>Samsung A01 A10S A11 A21S....</h6>
                        <h6 className='last'>4 days ago</h6>
                      </div>
                    </div>

                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <div className="container ">
                    <div className="card" >
                      <h5 className='heading'>featured</h5>
                      <a href="#"><img className="card-img-top image" src={p9} alt="Card image" style={{ width: '50%' }} /></a>
                      <div className="card-body">
                        <h4 className="card-title">Rs 15,100</h4>
                        <h6 className='description'>Samsung A01 A10S A11 A21S....</h6>
                        <h6 className='last'>4 days ago</h6>
                      </div>
                    </div>

                </div>
              </div>
              
                    </div>
                    </div>

          

      
       <div>
     
            PRICE:
                 <br />
              
          <input type='text' placeholder='min'></input>
          <input type='text' placeholder='max'></input>
      </div>
      <div>
      
           YEAR:
            <br />
                   
          <input type='text' placeholder='min'></input>
          <input type='text' placeholder='max'></input>
      </div>
{/* 
      Kanal
Marla
Square Feet
Square Meter
Square Yards */}
     
      <div className="dropdown">
        <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         AREA UNIT
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <input type='checkbox' className="dropdown-item" /> Kanal
          <input type='checkbox' className="dropdown-item" />Marla
          <input type='checkbox' className="dropdown-item" />Square Feet

          <input type='checkbox' className="dropdown-item" />Square Meter
          <input type='checkbox' className="dropdown-item" /> Square Yards
         

         


      </div>
      </div>
      {/* <div>
     
           KMS DRIVEN:
           <br />
                
          <input type='text' placeholder='min'></input>
          <input type='text' placeholder='max'></input>
      </div>
      <div className="dropdown">
        <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         CONDITION
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <input type='radio' className="dropdown-item" /> USED
          <input type='radio' className="dropdown-item" />NEW
          
         

         


      </div>
      </div> */}
      </div>
     

                 

 

   


 






    );
  }
}
export default Plot;



