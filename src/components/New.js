import React from 'react'
import Box from './Box'

class New extends React.Component {
    state = {
        newItemText: "",
        newDescriptionText: ""
    }

    errorText = "This value is incorrect"

    handleInputNameChange = (event) => {
        this.setState({
            newItemText: event.target.value
        })
    }

    handleInputDescriptionChange = (event) => {
        this.setState({
            newDescriptionText: event.target.value
        })
    }

    handleKey = (event) => {
        if (event.code === "Enter"){
            this.props.adder(this.state.newItemText, 
                            this.state.newDescriptionText)
            this.setState({
                newItemText : "",
                newDescriptionText : "",
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className = "boxes-container">
                    <div className = "name-text">
                        <span className = "box-text">Name:</span>
                        <Box
                            text = {this.state.newItemText}
                            onChange ={this.handleInputNameChange}
                            onKeyDown = {this.handleKey}
                        />
                    </div>
                    <div className = "box-desc">
                        <span className = "box-text">Description:</span>
                        <Box
                            text = {this.state.newDescriptionText}
                            onChange ={this.handleInputDescriptionChange}
                            onKeyDown = {this.handleKey}
                        />
                    </div>
                </div>                
            </React.Fragment>
        );
    }
}

export default New;