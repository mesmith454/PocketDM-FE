import React from 'react'; 
import { Link } from 'react-router-dom';

const CampaignsList = ({ campaigns }) => {
    const renderCampaigns = Object.keys(campaigns).map(campaignID => 
        <Link key={campaignID} to={`/campaigns/${campaignID}`}>{campaigns[campaignID].title}</Link>  
        );

    return (
        <div>
            {renderCampaigns}
        </div>
    );
};

export default CampaignsList;