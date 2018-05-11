import axios from 'axios'
import React, {Component} from 'react';
import House from '../house/House'
import {Link} from 'react-router-dom';


class Dashboard extends Component{
    constructor(){
        super();
        this.state={
            houses: [
                {houseid:"001",
                    propertyname:"House 1",
                address: "123 N 456 W",
                city: "Provo",
                state: "UT",
                zip: "12345"},
                {houseid:"002",
                    propertyname:"House 2",
                address: "123 N 456 W",
                city: "Provo",
                state: "UT",
                zip: "12345"}
            ]
        }
        this.getAllHouses = this.getAllHouses.bind(this);
        this.deleteHouse = this.deleteHouse.bind(this);
    }

    componentDidMount(){
        this.getAllHouses();
    }

    getAllHouses(){
       console.log('HELLO')
       axios.get('./api/houses').then(res=>{
           console.log(res.data)
           this.setState({houses:res.data})
       })
    }

    deleteHouse(id){
        console.log('delete clicked!')
        axios.delete(`./api/houses/${id}`).then(res =>{
            
            this.setState({houses:res.data})
        })
    }


    render(){
        return(
            <div>Dashboard
               
                <Link to='/wizard/stepOne'>ADD NEW PROPERTY</Link>
                {this.state.houses.map( home =>{
                    return (
                            <div key={home.houseid}>
                                 <House deleteHouse={this.deleteHouse} {...home}/>

                            </div>
                        )
                    }
                )}

            </div>
        )
    }
}

export default Dashboard;