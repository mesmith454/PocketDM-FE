import React from "react";
import { Link } from "react-router-dom";
import CampaignsList from "./campaigns/CampaignsList"
// import { History } from "react-router-dom"

class Profile extends React.Component {
 constructor(props) {
     super(props);
     this.state = {
         campaigns: []
     };
 }

    componentDidMount() {
        const url = '/api/v1/users/:id'
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
                // throw new Error("Network response was not okay")
            })
            .then(response => this.setState({ campaign: response }))
            // .catch(() => this.props.history.push("/"));
    }

    render() {
        const { campaigns } = this.state;

        const allCampaigns = campaigns.map((campaign) => (
            <div key={campaign} className="campColl">
                <CampaignsList />
            </div>
        ));

        const noCampaign = (
            <div className="noCamp">
                <h4>No campaigns, Traveller. Want to <Link to="/campaignform" color="orange">start a journey</Link>?</h4>
            </div>
        );
        
        
        return(
            <>
                <div className="campaigns">
                    <div className="container">
                        <h1 className="display">Campaigns</h1>
                        <div className="list">
                            {campaigns.length > 0 ? allCampaigns : noCampaign}
                        </div>
                    </div>
                </div>
            </>
        );
    
    }
}


export default Profile;