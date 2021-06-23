import React from "react";
import { Link } from "react-router-dom";

class Campaign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thisCamp: []
        };
    }

    componentDidMount() {
        const url = '/api/v1/campaigns/:id'
        fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',  
                    Authorization: `Bearer <token>`  
                }
             })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not okay")
            })
            .then(response => this.setState({ campaign: response }))
            .catch(() => this.props.history.push("/"));
    }

    render () {
        return (
            <div>
                <div>
                    <h1>`${this.state.title}`</h1>
                    <p>Party: `${this.state.party}`</p>
                    <p>Level: `${this.state.level}`</p>
                    <p>Campaign Notes: `${this.state.cnotes}`</p>
                    <p>DM Notes: `${this.state.dmnotes}`</p>
                </div>
                <div>
                    <Link to="/campaignform">Edit this Campaign</Link>
                    <Link to="/deletecampaign">Delete this Campaign</Link>
                </div>
            </div>
        )
    }
};

export default Campaign;