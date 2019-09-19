import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        firstName : '',
        lastName : ''

    }
    handleName = (event) => {
        this.setState({
            firstName : event.target.value
        })
            
        
        
    }
    handleLastName = (event) => {
        this.setState({
            lastName : event.target.value
        })

    }
    render(){
        return(
            <div className="container">
                <form>
                    <div className="form_element">
                        <label>Enter Name </label>
                        <input type="text" value ={this.state.firstName} onChange={this.handleName}/>
                    </div>
                    <div className="form_element">
                        <label>Enter Last Name</label>
                        <input type="text" value ={this.state.lastName} onChange={this.handleLastName}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Controlled;