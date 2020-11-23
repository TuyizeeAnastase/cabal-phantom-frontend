import React, { Component } from 'react'
import './../../Assets/Styles/FrontPage.scss'

export default class FontPage extends Component {
    constructor(props) {
        super(props);
        this.state = {origin: "Select your origin",destination:"Select your destination"};
    }
    render() {
        return (
            <div className="frontpage" id="" onSubmit={(e)=>{e.preventDefault()}}>
                    <div className="frontpage__text">
                        <h1>Welcome To Phantom</h1>
                        <h5>use Phantom to make your travel easier by checking the status of bus</h5>
                    </div>
                    <form className="frontpage__input">
                        <input type="search" onChange={(e) => this.setState({origin:e.target.value})} value={this.state.origin}/>
                        <input type="search" onChange={(e) => this.setState({destination:e.target.value})} value={this.state.destination}/>
                        <button type="submit" ><i className="fa fa-search"></i> Search</button>
                    </form>
                </div>
        )
    }
}