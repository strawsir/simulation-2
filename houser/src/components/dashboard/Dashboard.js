import React, {Component} from 'react';
import axios from 'axios'
import House from '../house/House'
import {Link} from 'react-router-dom';


class Dashboard extends Component{
    constructor(){
        super();
        this.state={
            houses: []
        }
        this.getAllHouses = this.getAllHouses.bind(this);
    }

    componentDidMount(){
        this.getAllHouses();
    }

    getAllHouses(){
       console.log('HELLO')
       axios.get('/api/houses')
    }


    render(){
        return(
            <div>Dashboard
               
                <Link to='/wizard'>ADD NEW PROPERTY</Link>
                {this.state.houses.map( home =>{
                    return (
                            <div key={home.id}>
                                 <House/>
                                 <button>DELETE</button>
                            </div>
                        )
                    }
                )}

            </div>
        )
    }
}

export default Dashboard;