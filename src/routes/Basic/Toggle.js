import React, { Component } from 'react'

class Toggle extends Component {
    constructor(props) {
        super(props)
        this.state = { isToggleOn: true }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return (
            <button className="btn btn-primary" onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

export default Toggle