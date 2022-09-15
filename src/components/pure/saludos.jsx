import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Saludos extends Component {

    constructor(props){
        super(props);
        this.state={
            age : 29
        }
    }

    render() {
        return (
            <div>
                <h1>
                    Holis { this.props.name}
                </h1>
                <h2>
                    edad es de : {this.state.age}
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        cumplir años
                    </button>
                </div>
            </div>
        );
    }


    birthday= () =>{
        this.setState((prevState)=>(
            {
                age:prevState.age +1
            }
        ))


    }
}


Saludos.propTypes = {
    name: PropTypes.string,

};


export default Saludos;
