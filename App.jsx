import React,{Component} from 'react'
import './App.css';
import './components/Header';
import {Header , Navbar, Slider}  from './components/Header.js';
import {Card1,Card3} from './components/mainbody.js';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Footer from './components/Footer.js';
import Mobile from'./components/Mobile.js';
import Car from './components/Car.js';
import Plot from './components/land.js';
import Login from './components/login.js'
import Details from './components/details.js'
import 'bootstrap/dist/css/bootstrap.min.css';





class App extends Component {
    render(){
        return(
            <Router>
            <div>
         <Switch>
             {/*mainbody*/}
             
                <Route exact path='/' component={Card1}>
                <Header />
                <Navbar />
                <Slider />
                <Card1 />
                <Card3 />
                <Footer />
                </Route>

             {/*Mobile*/}

             <Route path='/mobile' component={Mobile}>
             <Header />
                <Navbar />
                <Slider />
                <Mobile />
                <Card3 />
                <Footer />
                </Route>
                {/*Car*/}
                <Route path='/car' component={Car} >
                <Header />
                <Navbar />
                <Slider />
                <Car />
                <Card3 />
                <Footer />
                </Route>

                 {/*Land*/}
                <Route path='/land' component={Plot}> 
                <Header />
                <Navbar />
                <Slider />
                <Plot />
                <Card3 />
                <Footer />
                </Route>
                {/*Login page*/}
                <Route path='/login' component={Login}>
                
                < Login/>
                </Route>


                <Route path='/details' component={Details}> 
                <Header />
                <Navbar />
                <Details />
                <Footer />
                </Route>
               



               




                
               
                
                </Switch>
              
               
           
           
              
           
                
               
               
                
                
            </div>
           
            
            </Router>
           

            

        )
        
    }
       
}
export default App;





    











