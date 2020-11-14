import React from 'react';
import g1 from '../logos/g1.jpg';
import g2 from '../logos/g2.jpg';
import h1 from '../logos/h1.jpg';
import olx1 from '../logos/olx1.jpg';
import { Link } from "react-router-dom";




class Login extends React.Component {
    render() {
        return (
            <div>
            
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
              <li data-target="#carouselExampleCaptions" data-slide-to={1} />
              <li data-target="#carouselExampleCaptions" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={g2} className="d-block "  />
                <div className="carousel-caption d-none d-md-block">
                    <h4 className='target'>Help make OLX safer place to buy and sell</h4>
                  
                 
                </div>
              </div>
              <div className="carousel-item">
                <img src={h1} className="d-block"  />
                <div className="carousel-caption d-none d-md-block">
                <h4 className='target'>Contact and Close deals faster</h4>
                 
                </div>
              </div>
              <div className="carousel-item">
                <img src={olx1} className="d-block "  />
                <div className="carousel-caption d-none d-md-block">
                <h4 className='target'>Save all your favourite items in one place</h4>
                  
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
            </div>
            <div className="container-fluid ">
        <div className="row main ">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="container">
               
                
            <Link to='/login-email'><button type="button" class="btn1 ">Continue with email</button></Link> 
                </div></div>
                </div>
                </div>

                <div className="container-fluid ">
        <div className="row main ">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="container">
                <div>
                
                <Link to='/login-fb'> <button type="button" class="btn2 ">Continue with Facebook</button> </Link></div>
                </div></div>
                </div>
                </div>
                <div className="container-fluid ">
        <div className="row main ">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="container">
                <div>
                
            <a className='btn1' href='#'><button type="button" class="btn2 ">Continue with Phone</button> </a></div>
                </div></div>
                </div>
                </div>
                <div className="container-fluid ">
        <div className="row main ">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="container">
                <div>
                
            <a className='btn1' href='#'><button type="button" class="btn2 ">Continue with Google</button> </a></div>
                </div></div>
                </div>
                </div>



           
            </div>
          
           
         
         

        );
    }
}
export default Login;
// class Login1 extends React.Component {
//     render() {
//         return (
//             <div>
//                  <div className="container-fluid ">
//         <div className="row main ">
//           <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
//             <div className="container">
//                 <div className='form'>
//                     <h4>Enter your Email and Password</h4>
//                     <input type='text' placeholder='enter your email' id='email' /><br />
//                     <input type='text' placeholder='enter your password' id='password' /><br />
//                     <button onClick='signup()'>Sign Up</button>
                   
                        
                    



//                 </div>

//             </div>
//             </div>
//             </div>
//             </div>
            
//             </div>
           
           
//         )
//     }
// }
// export default Login1;
// let signup = () =>{
//     let email = document.getElementById('email')
//     let password = document.getElementById('password')
//     console.log(email.value)
//     console.log(password.value)
//     // firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
//     // .then((result) => {
//     //     console.log(result)

//     // })
    
//     // .catch(function(error) {
//     //     // Handle Errors here.
//     //     var errorCode = error.code;
//     //     var errorMessage = error.message;
//     //     console.log(errorMessage)
//     //   });
// }


