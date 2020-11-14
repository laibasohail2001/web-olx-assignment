import React from 'react';
import image from '../logos/image.webp';
import image1 from '../logos/image1.webp';
import image2 from '../logos/image2.webp';
import image3 from '../logos/image3.webp';
import image4 from '../logos/image4.webp';
import image5 from '../logos/image5.webp';
import image6 from '../logos/image6.webp';
import image7 from '../logos/image7.webp';
import image8 from '../logos/image8.webp';
import image9 from '../logos/image9.webp';
import image10 from '../logos/image10.webp';
import image11 from '../logos/image11.webp';
import image12 from '../logos/image12.webp';
import image13 from '../logos/image13.webp';
import image14 from '../logos/image14.webp';
import image15 from '../logos/image15.webp';
import phoneapp from '../logos/phoneapp.webp';
import image16 from '../logos/image16.webp';
import image17 from '../logos/image17.webp';
import { Link} from "react-router-dom";






class Card1 extends React.Component {
    render() {
        return (
        <div className="container main1">
                <div className="row text-center">
                    <h1>More on Mobile Phones</h1><br />
                    <div className="row text-center">
                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                            <div className="container">

                                <div className="card" >
                                    <h5 className='heading'>featured</h5>
                                    <a href="#"><img className="card-img-top image" src={image} alt="Card image" style={{ width: '50%' }} /></a>
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
                                    <Link to ='/details'><img className="card-img-top image" src={image1} alt="Card image" style={{ width: '50%' }} /></Link>
                                    
                                    <div className="card-body">
                                        <h4 className="card-title">Rs 135,000</h4>
                                        <h6 className='description'>NEW Apple iPhone 11 Purple JV (PTA NOT APPROVED)</h6>
                                        <h6 className='last'>today</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                            <div className="container">

                                <div className="card" >
                                    <h5 className='heading'>featured</h5>
                                    <a href="#"><img className="card-img-top image" src={image2} alt="Card image" style={{ width: '50%' }} /></a>
                                    <div className="card-body">
                                        <h4 className="card-title">Rs 195,000</h4>
                                        <h6 className='description'>iPhone 12 Physical Dual Sim</h6>
                                        <h6 className='last'>2 days ago</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                            <div className="container">

                                <div className="card" >
                                    <h5 className='heading'>featured</h5>
                                    <a href="#"><img className="card-img-top image" src={image3} alt="Card image" style={{ width: '50%' }} /></a>
                                    <div className="card-body">
                                        <h4 className="card-title">Rs 25,400</h4>
                                        <h6 className='description'>Oppo A53 (4GB 64GB) Box pack Fingerprint All Colours Available
</h6>
                                        <h6 className='last'>2 days ago</h6>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div></div>
                    
                    
            

            
            
            <div className="row text-center">
                <h1>Fresh Recommandations</h1><br /></div>
            <div className="row text-center">
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <div className="container">

                        <div className="card" >
                        <a href="#"><img src={image4} className="card-img-top image" alt="Card image" style={{ width: '50%' }} /></a>
                            <div className="card-body">
                                <h4 className="card-title">Rs 18,000</h4>
                                <h6 className='description'>Realme C3 3/32Gb
</h6>
                                <h6 className='last'>Today</h6>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <div className="container">

                        <div className="card5">
                        <a href="#"><img src={image5} className="card-img-top image5" alt="Card image" style={{ width: '70%' }} /></a>
                            <div className="card-body">
                                <h4 className="card-title">Rs 20,000</h4>
                                <h6 className='description'>Vivo y15 4 64
</h6>
                                <h6 className='last'>Today</h6>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <div className="container">

                        <div className="card" >
                        <a href="#"><img src={image6} className="card-img-top image" alt="Card image" style={{ width: '70%' }} /></a>
                            <div className="card-body">
                                <h4 className="card-title">Rs 112,000 - 5 Years</h4>
                                <h6 className='description'>Suzuki Ravi 2014 Adam khan automobiles pvt ltd
</h6>
                                <h6 className='last'>Oct 21</h6>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <div className="container">

                        <div className="card" >
                        <a href="#"><img src={image7} className="card-img-top image" alt="Card image" style={{ width: '70%' }} /></a>
                            <div className="card-body">
                                <h4 className="card-title">Rs 1,975,000</h4>
                                <h6 className='description'>2013 gli 1.6 auto 1st owner few tuchup mint condition
</h6>
                                <h6 className='last'>Today</h6>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
            <div className="row text-center">
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <div className="container">

                        <div className="card" >
                        <a href="#"><img src={image8} className="card-img-top image" alt="Card image" style={{ width: '50%' }} /></a>
                            <div className="card-body">
                                <h4 className="card-title">Rs 56,000</h4>
                                <h6 className='description'>Honda CG 125
</h6>
                                <h6 className='last'>Today</h6>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <div className="container">

                        <div className="card">
                        <a href="#"><img src={image9} className="card-img-top image" alt="Card image" style={{ width: '70%' }} /></a>
                            <div className="card-body">
                                <h4 className="card-title">Rs 17,000</h4>
                                <h6 className='description'>Xiaomi Redmi 9c
</h6>
                                <h6 className='last'>Today</h6>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <div className="container">

                        <div className="card" >
                        <a href="#"><img src={image10} className="card-img-top image" alt="Card image" style={{ width: '70%' }} /></a>
                            <div className="card-body">
                                <h4 className="card-title">Rs 4,300,000</h4>
                                <h6 className='description'>F17 10 Marla plot Main Dabal road All Duse clear
</h6>
                                <h6 className='last'>Oct 21</h6>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <div className="container">

                        <div className="card" >
                        <a href="#"><img src={image11} className="card-img-top image" alt="Card image" style={{ width: '70%' }} /></a>
                            <div className="card-body">
                                <h4 className="card-title">Rs 38,000</h4>
                                <h6 className='description'>Furnished Office For Rent ALL PAID. For 10 persons sitting.
</h6>
                                <h6 className='last'>Today</h6>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            
            <div className="row text-center">
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <div className="container">

                        <div className="card" >
                        <a href="#"><img src={image15} className="card-img-top image" alt="Card image" style={{ width: '50%' }} /></a>
                            <div className="card-body">
                                <h4 className="card-title">Rs 553,000 - Flexible</h4>
                                <h6 className='description'>Toyota yaris ka koi b model 20% ada kar k hasil kary
</h6>
                                <h6 className='last'>Today</h6>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <div className="container">

                        <div className="card5">
                        <a href="#"><img src={image13} className="card-img-top image5" alt="Card image" style={{ width: '70%' }} /></a>
                            <div className="card-body">
                                <h4 className="card-title">Rs 20,000</h4>
                                <h6 className='description'>Samsung LED 32 inch whosale pirce
</h6>
                                <h6 className='last'>Today</h6>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <div className="container">

                        <div className="card" >
                        <a href="#"><img src={image14} className="card-img-top image" alt="Card image" style={{ width: '70%' }} /></a>
                            <div className="card-body">
                                <h4 className="card-title">Rs 8,999</h4>
                                <h6 className='description'>Asus Mini Atom Laptop 2gb 250gb 8 inch displayin excellent condition
</h6>
                                <h6 className='last'>Oct 21</h6>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <div className="container">

                        <div className="card" >
                        <a href="#"><img src={image12} className="card-img-top image" alt="Card image" style={{ width: '70%' }} /></a>
                            <div className="card-body">
                                <h4 className="card-title">Rs 24,999</h4>
                                <h6 className='description'>Dell Precision T3600 , 8GB Ram 1600mhz, GTX 550Ti , 500GB Hard, GTA5
</h6>
                                <h6 className='last'>Today</h6>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>

    );
}
}
           
            



    





            

class Card3 extends React.Component {
    render() {
        return (
            <div className="container-fluid main1">
                <div className="row text-center">
                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                            <div className="container-fuid">
                            <img src={phoneapp} />
                                
                            </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <div className="container-fuid">
                            <h1 className='olx1'>TRY THE OLX APP</h1><br /> <br />
                            <h6 className='olx2'>Buy, sell and find just about anything using the app on your mobile.</h6>


            </div>
            </div>
            
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <div className="container-fuid">
            <h5 className='olx1'>Get your app Today</h5><br /> <br />
            <a href="#"><img src={image16}  /></a>
            <a href="#"><img className='olx3' src={image17}  /></a>
            


</div>
            </div>
            </div></div>
            



        );
    }
}
export 
{
    Card1,
    
    Card3
}









