import React , {Component} from 'react';
import img from '../logos/1.webp';
import img1 from '../logos/2.webp';
import img2 from '../logos/3.webp';
import img3 from '../logos/4.webp';
import img4 from '../logos/5.webp';
import img5 from '../logos/6.webp';
import img6 from '../logos/7.webp';
import img7 from '../logos/8.webp';
import img8 from '../logos/9.webp';
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown'

class Car  extends Component {
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
              <a class="nav-link" href="#">mehran vxr - <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">toyota- <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">carolla -  <span class="sr-only">(current)</span></a>
            </li>
            

          </ul>
        </div>
      </nav>


      <div>
        <h1> Cars in Azad Kashmir</h1><br /></div>
      <div>
        <h4>Filters</h4> <hr />

      </div>


      <div className="container-fluid ">
        <div className="row main ">
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <div className="container">

            
         

      
           

               <h4>
                  Categories <br /><br /></h4>
                  <div className="dropdown">
        <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categories
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">All Categories</a>
          <a className="dropdown-item" href="#">Vehicles</a>
          <a className="dropdown-item" href="#">Cars(55594)</a>
          <a className="dropdown-item" href="#">Cars on Installments(9927)</a>
          <a className="dropdown-item" href="#">Cars Accessories(11354)</a>
          <a className="dropdown-item" href="#">Spare parts(9075)</a>
          <a className="dropdown-item" href="#">Buses, Vans And Trucks(5357)</a>
          <a className="dropdown-item" href="#">Rickshaws and Chingchi(1900)</a>
          <a className="dropdown-item" href="#">Boats(</a>
          <a className="dropdown-item" href="#">Other Vehicles(3179)</a>

          

        </div>
      </div>
      </div>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <div className="container ">
                    <div className="card" >
                      <h5 className='heading'>featured</h5>
                      <a href="#"><img className="card-img-top image" src={img} alt="Card image" style={{ width: '50%' }} /></a>
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
                      <a href="#"><img className="card-img-top image" src={img1} alt="Card image" style={{ width: '50%' }} /></a>
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
                      <a href="#"><img className="card-img-top image" src={img2} alt="Card image" style={{ width: '50%' }} /></a>
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
          Locations
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">Azad Kashmir</a>
          <a className="dropdown-item" href="#">Mirpurkhas(117)</a>
          <a className="dropdown-item" href="#">Muzaffarabad(83)</a>
          <a className="dropdown-item" href="#">Bhimber(31)</a>
          <a className="dropdown-item" href="#">Kotli(27)</a>
          <a className="dropdown-item" href="#">Rawalakot(23)</a>
          </div>
     </div>
     </div>
     </div>
     <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <div className="container ">
                    <div className="card" >
                      <h5 className='heading'>featured</h5>
                      <a href="#"><img className="card-img-top image" src={img3} alt="Card image" style={{ width: '50%' }} /></a>
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
                      <a href="#"><img className="card-img-top image" src={img4} alt="Card image" style={{ width: '50%' }} /></a>
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
                      <a href="#"><img className="card-img-top image" src={img5} alt="Card image" style={{ width: '50%' }} /></a>
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
          Make and Model
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#"> Suzuki (24352)</a>
          <a className="dropdown-item" href="#">Toyota (13817)</a>
          <a className="dropdown-item" href="#">Honda (8038)</a>
          <a className="dropdown-item" href="#">Daihatsu (3652)</a>
          <a className="dropdown-item" href="#">Nissan (1352)</a>
          

        </div>
      </div> 
      </div>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <div className="container ">
                    <div className="card" >
                      <h5 className='heading'>featured</h5>
                      <a href="#"><img className="card-img-top image" src={img6} alt="Card image" style={{ width: '50%' }} /></a>
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
                      <a href="#"><img className="card-img-top image" src={img7} alt="Card image" style={{ width: '50%' }} /></a>
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
                      <a href="#"><img className="card-img-top image" src={img8} alt="Card image" style={{ width: '50%' }} /></a>
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
      <div className="dropdown">
        <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Registered In
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <input type='checkbox' className="dropdown-item" />Lahore (19650) 
          <input type='checkbox' className="dropdown-item" /> Karachi (18410)
          <input type='checkbox' className="dropdown-item" /> Islamabad (7769)
          <input type='checkbox' className="dropdown-item" /> Unregistered (1661)
          <input type='checkbox' className="dropdown-item" /> Multan (1383)
         

         

      </div>
      </div>
      <div className="dropdown">
        <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         FUEL
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <input type='checkbox' className="dropdown-item" /> Petrol (43629)
          <input type='checkbox' className="dropdown-item" />CNG (8151)
          <input type='checkbox' className="dropdown-item" /> Hybrid (2342)

          <input type='checkbox' className="dropdown-item" /> Diesel (1507)
          <input type='checkbox' className="dropdown-item" /> LPG (33)
         

         


      </div>
      </div>
      <div>
     
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
      </div>
      </div>
     

                 

 

   


 






    );
  }
}
export default Car;











  
  
  
  
  
  
  
   