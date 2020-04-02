import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

class Home extends Component {

    navigateToLogOut = () => {
        this.props.history.push("loginPage");
    }

    render() {
        const userName = this.props.location.state;
        console.log(this.props.location.state);
        return (
            <div>
                Hi { userName},  You are successfully Logged In !
                <div>
                    <button className = "validate-button" style = {{ textAlign: 'center',position: 'absolute' }} 
                    type="button" onClick={this.navigateToLogOut}>LogOut</button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        users: state && state.users
    }
}

export default compose(connect(mapStateToProps, null))(Home);