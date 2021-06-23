import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Campaign from "./components/campaigns/Campaign";
import Homepage from "./components/Homepage"
import CampaignForm from "./components/campaigns/CampaignForm";
import DeleteCampaign from "./components/campaigns/DeleteCampaign";

const customHistory = createBrowserHistory();


const App = () => {
 
    return (
        <Router history={customHistory}>     
                <Switch>
                    <Route path="/" exact component={Home} />
                    
                    <Route path="/login" render={rp=> <Login history={rp.history}/> } />

                    <Route path="/campaign" render={rp=><Campaign /> } />

                    <Route path="/profile" render={rp=> <Profile />} />

                    <Route path="/campaignform" exact component={CampaignForm} />

                    <Route path="/deletecampaign" exact component={DeleteCampaign} />

                    <Route path="/editcampaign" render={rp=><CampaignForm history={rp.history} /> } />

                    <Route path="/homepage" component={Homepage} />
                </Switch>
        </Router>
    );
};

export default App;