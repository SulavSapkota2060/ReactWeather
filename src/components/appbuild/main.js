import React, { Component } from 'react'
import Aux from '../hoc/AuxWrapper/auxwrap'

class Main extends Component{

    state=  {
        details:{
            name:"Kathmandu",
            data:null
        }
    }


    render(){
        return(
            <Aux>
                <h1>Weather API</h1>
            </Aux>
        );
    }

}

export default Main;