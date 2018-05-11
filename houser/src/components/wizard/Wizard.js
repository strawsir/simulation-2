import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';


class Wizard extends Component{
    constructor(){
        super();

        this.state={
            name: '',
            address:'',
            city: '',
            state: '',
            zipcode: 0
        }
    }


    render(){
        return(
            <div>Wizard

            <Link to='/'>CANCEL</Link>
            <input type="text" placeholder='PROPERTY NAME'/>
            <input type="text" placeholder='PROPERTY ADDRESS'/>
            <input type="text" placeholder='PROPERTY CITY'/>
            <input type="text" placeholder='PROPERTY STATE'/>
            <input type="text" placeholder='PROPERTY ZIPCODE'/>
            
            </div>
        )
    }
}

export default Wizard;