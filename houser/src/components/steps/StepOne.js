import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';


class StepOne extends Component{
    constructor(){
        super();

        this.state={
            name: '',
            address:'',
            city: '',
            state: '',
            zipcode: 0
        }
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleAddChange=this.handleAddChange.bind(this);
        this.handleCityChange=this.handleCityChange.bind(this);
    }

    handleNameChange(e){
        this.setState({name: e.target.value})
    }
    handleAddChange(e){
        this.setState({address: e.target.value})
    }
    handleCityChange(e){
        this.setState({city: e.target.value})
    }


    render(){
        return(
            <div>
            STEP ONE

        
            <input type="text" placeholder='PROPERTY NAME' onChange={(e)=>this.handleNameChange(e)}/>
            <input type="text" placeholder='PROPERTY ADDRESS' onChange={(e)=>this.handleAddChange(e)}/>
            <input type="text" placeholder='PROPERTY CITY' onChange={(e)=>this.handleCityChange(e)}/>
            <input type="text" placeholder='PROPERTY STATE'/>
            <input type="text" placeholder='PROPERTY ZIPCODE'/>
            <Link to='/wizard/stepTwo'>NEXT</Link>
            
            </div>
        )
    }
}

export default StepOne;