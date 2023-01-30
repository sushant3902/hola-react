import React from "react";
import UserContext from "../utils/UserContext";

class ProfileClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 1
        }
    }
    render() {
        return (
            <div>
                <h1>Profile Class Component</h1>
                <UserContext.Consumer>
                    {({user }) => <h2>{user.name} - {user.email}</h2>}
                </UserContext.Consumer>
                <h3>{this.props?.name}</h3>
                <h3>Count {this.state.count}</h3>
                <h3>Count {this.state.count2}</h3>
                <button onClick={() => {
                    // Do not mutate state directly 
                    // never this.state = something
                    this.setState({
                        count: 1,
                        count2: 2,
                    })
                }}>Set Count</button>
            </div>
        )
    }
}

export default ProfileClass;