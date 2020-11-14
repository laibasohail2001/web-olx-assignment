
import React from "react";
import {BrowserRouter as Router, Route,} from "react-router-dom";
import {Header,Navbar,Slider} from '../components/Header'
import {Header1,Navbar1} from '../components/mobile'


class Approuter extends React.Component {
    render() {
        return(
            <Router>
                <Route path='/' component={Header,Navbar,Slider} />
                <Route path='/mobile' component={Header1,Navbar1} />
                
            </Router>
        )
    }
}
export default Approuter;
