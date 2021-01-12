import React, {Component} from 'react';

class Dashboard extends Component{

    constructor(props) {
        super(props);
        this.state = {
           username: this.props.username,
        }
    }

    render(){
        console.log(this.state.username);
        return(
            <div className="dashboard">
                <h1>Xin chào </h1>
            </div>
        );
    }
}
export default Dashboard;