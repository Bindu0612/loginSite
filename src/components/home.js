import React, { Component } from 'react';


class Home extends Component {

    navigateToLogOut = () =>  {
       this.props.history.push("loginPage");
    }

    render() {
        return (
            <div>
                Successfully Logged In !
                <div>
                    <button type="button" onClick={this.navigateToLogOut}>LogOut</button>
                </div>
            </div>
        )
    }
}

export default Home;