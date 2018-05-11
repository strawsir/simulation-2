import axios from 'axios';
import React, {Component} from 'react';

function House(home, props){
   
    return(
        <div>
            House
            <button onClick = {()=>console.log(`${home.propertyname} Delete Clicked`)}>{`DELETE ${home.propertyname}`}</button>
        </div>
    )
}

export default House;