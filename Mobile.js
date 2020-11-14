import React from 'react';
import image from '../logos/image.webp';
import phone from '../logos/phone.webp';
import phone2 from '../logos/phone2.webp';
import phone3 from '../logos/phone3.webp';
import phone4 from '../logos/phone4.webp';
import phone5 from '../logos/phone5.webp';
import phone6 from '../logos/phone6.webp';
import phone7 from '../logos/phone7.webp';
import { Link } from "react-router-dom";
// import logoimage from '../logos/olx.png'

// import sliderimage from '../logos/slider.webp'


// class Header1 extends React.Component {
//     render(){
//         return(
//         //     <div className='header fixed flex'>
//         //        <nav className="navbar navbar-light bg-light">
//         // <a className="navbar-brand"><img className='logo' src={logoimage} width='80'/></a> 
//         // <input className='search' type='text' placeholder='pakistan'></input>
//         // </nav>
//         // </div>
//          <nav className="navbar navbar-expand-lg navbar-light bg-light">
//          <a className="navbar-brand" href="#"><img className='logo' src={logoimage} width='80'/></a>
//          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//            <span className="navbar-toggler-icon" />
//          </button>
//          <div className="collapse navbar-collapse" id="navbarSupportedContent">
//            <ul className="navbar-nav mr-auto">
//              <li className="nav-item active">
//              <form className="form-inline my-2 my-lg-0">
//              <input className="form-control mr-sm-2" type="search" placeholder="pakistan" aria-label="Search" />

//            </form>

//              </li>
//              <li className="nav-item">
//              <form className="form-inline my-2 my-lg-0 search">
//              <input className="search" type="search" placeholder="Find cars,mobile phones and more.." aria-label="Search" />

//            </form>

//               </li>
//               <a  className='login' href='#'><u>LOGIN</u></a>
//               <a className='sell' href='#'>SELL</a>
//              {/* <li className="nav-item dropdown">
//                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                  Dropdown
//                </a>
//                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                  <a className="dropdown-item" href="#">Action</a>
//                  <a className="dropdown-item" href="#">Another action</a>
//                  <div className="dropdown-divider" />
//                  <a className="dropdown-item" href="#">Something else here</a>
//                </div>
//              </li>
//              <li className="nav-item">
//                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
//              </li>
//            </ul>
//            <form className="form-inline my-2 my-lg-0">
//              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//            </form>

//          </div> */}

//        </ul>
//        </div>
//        </nav>










//         ); 

//     }

// }

// class Navbar1 extends React.Component {
//     render(){
//         return(
//             <div>
//                 <nav className="navbar navbar-expand-lg navbar-light ">
//                 <div className="dropdown">
//         <button className="btn  dropdown-toggle drop" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           All Categories
//         </button>
//         <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//           <a className="dropdown-item" href="#">Action</a>
//           <a className="dropdown-item" href="#">Another action</a>
//           <a className="dropdown-item" href="#">Something else here</a>
//         </div>
//       </div>
//                 {/* <li className="nav-item dropdown">
//               <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                 Dropdown link
//               </a>
//               <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//                 <a className="dropdown-item" href="#">Action</a>
//                 <a className="dropdown-item" href="#">Another action</a>
//                 <a className="dropdown-item" href="#">Something else here</a>
//               </div>
//             </li> */}


//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNavDropdown">
//           <ul className="navbar-nav">
//             <li className="nav-item active">
//               <a className="nav-link" href="#">Mobile Phones<span className="sr-only">(current)</span></a>
//             </li>
//             <li className="nav-item active">
//               <a className="nav-link" href="#">Cars<span className="sr-only">(current)</span></a>
//             </li>
//             <li className="nav-item active">
//               <a className="nav-link" href="#">Motorcycles<span className="sr-only">(current)</span></a>
//             </li>
//             <li className="nav-item active">
//               <a className="nav-link" href="#">Land&plots<span className="sr-only">(current)</span></a>
//             </li>

//           </ul>
//         </div>
//       </nav>
//                 </div>
//         );
//     }
// }
// export  {
//     Header1,
//     Navbar1
// }
class Mobile extends React.Component {
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
                <a class="nav-link" href="#">iphone - <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">Samsung- <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">Oppo -  <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">Infinix-Vivo  <span class="sr-only">(current)</span></a>
              </li>

            </ul>
          </div>
        </nav>


        <div>
          <h1> Mobile Phones</h1><br /></div>
        <div>
          <h4>Filters</h4> <hr />

        </div>


        <div className="container-fluid ">
          <div className="row main ">
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <div className="container">

                <h4>
                  Categories <br /><br /></h4>
                {/* <ul>All Categories
                         <a className='link' href="#"><li>Mobile Phones(172825)
                           </li></a>
                  <a className='link' href="#"><li>Tablets</li></a>
                  <a className='link' href="#"><li>Laptops</li></a>
                  <a className='link' href="#"><li>Other Accessories</li></a>

                </ul> */}
                <div className="dropdown">
        <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         All  Categories
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">Mobile Phones(172825)</a>
          <a className="dropdown-item" href="#">Tablets</a>
          <a className="dropdown-item" href="#">Laptops</a>
          <a className="dropdown-item" href="#">Other Accessories</a>
         

          

        </div>
      </div>
      </div>
      </div>
                
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <div className="container ">
                    <div className="card" >
                      <h5 className='heading'>featured</h5>
                      <a href="#"><img className="card-img-top image" src={image} alt="Card image" style={{ width: '50%' }} /></a>
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
                      <a href="#"><img className="card-img-top image" src={phone} alt="Card image" style={{ width: '50%' }} /></a>
                      <div className="card-body">
                        <h4 className="card-title">Rs 15,100</h4>
                        <h6 className='description'>Samsung A01 A10S A11 A21S....</h6>
                        <h6 className='last'>4 days ago</h6>
                      </div>
                    </div>

                </div>
              </div>
              
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <div className="container">
                    <div className="card" >
                      <h5 className='heading'>featured</h5>
                      <a href="#"><img className="card-img-top image" src={phone2} alt="Card image" style={{ width: '50%' }} /></a>
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



         
          {/* <ul>Pakistan
                   <a className='link' href="#"><li>Punjab (106272)
                     </li></a>
            <a className='link' href="#"><li>Sindh (42206)</li></a>
            <a className='link' href="#"><li>Khyber Pakhtunkhwa (12696)</li></a>
            <a className='link' href="#"><li>Islamabad Capital Territory (9192)</li></a>
            <a className='link' href="#"><li>Balochistan (1481)</li></a>

          </ul> */}
          <div className="dropdown">
        <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Location
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">Sindh (42206)</a>
          <a className="dropdown-item" href="#">Khyber Pakhtunkhwa (12696)</a>
          <a className="dropdown-item" href="#">Islamabad Capital Territory (9192)</a>
          <a className="dropdown-item" href="#">Balochistan (1481)</a>
         

          

        </div>
      </div>
          </div>
          </div><div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <div className="container ">
                    <div className="card" >
                      <h5 className='heading'>featured</h5>
                      <a href="#"><img className="card-img-top image" src={phone3} alt="Card image" style={{ width: '50%' }} /></a>
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
                      <a href="#"><img className="card-img-top image" src={phone4} alt="Card image" style={{ width: '50%' }} /></a>
                      <div className="card-body">
                        <h4 className="card-title">Rs 15,100</h4>
                        <h6 className='description'>Samsung A01 A10S A11 A21S....</h6>
                        <h6 className='last'>4 days ago</h6>
                      </div>
                    </div>

                </div>
              </div>
              
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <div className="container">
                    <div className="card" >
                      <h5 className='heading'>featured</h5>
                      <a href="#"><img className="card-img-top image" src={phone5} alt="Card image" style={{ width: '50%' }} /></a>
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

         
          {/* <ul>
            <a className='link' href="#"><li>Samsung (41187)
                     </li></a>
            <a className='link' href="#"><li>Apple (38787)</li></a>
            <a className='link' href="#"><li>Huawei (17982)</li></a>
            <a className='link' href="#"><li>OPPO (16530)</li></a>
            <a className='link' href="#"><li>Vivo (9712)</li></a>

          </ul> */}
           <div className="dropdown">
        <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Make
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">Samsung (41187)</a>
          <a className="dropdown-item" href="#">Apple (38787)</a>
          <a className="dropdown-item" href="#">Huawei (17982)</a>
          <a className="dropdown-item" href="#">OPPO (16530)</a>
          <a className="dropdown-item" href="#">Vivo (9712)</a>
         
          </div>
     </div>
         

          

          </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <div className="container ">
                    <div className="card" >
                      <h5 className='heading'>featured</h5>
                      <a href="#"><img className="card-img-top image" src={phone6} alt="Card image" style={{ width: '50%' }} /></a>
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
                      <a href="#"><img className="card-img-top image" src={phone7} alt="Card image" style={{ width: '50%' }} /></a>
                      <div className="card-body">
                        <h4 className="card-title">Rs 15,100</h4>
                        <h6 className='description'>Samsung A01 A10S A11 A21S....</h6>
                        <h6 className='last'>4 days ago</h6>
                      </div>
                    </div>

                </div>
              </div>
              
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <div className="container">
                    <div className="card" >
                      <h5 className='heading'>featured</h5>
                      <a href="#"><img className="card-img-top image" src={phone} alt="Card image" style={{ width: '50%' }} /></a>
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
          <h5>
            Price
                  </h5>
          <input type='text' placeholder='min'></input>
          <input type='text' placeholder='max'></input>
        </div>
      </div>

    


   









    );
  }
}
export default Mobile;







