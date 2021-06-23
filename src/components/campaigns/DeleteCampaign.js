// import React from "react"

const DeleteCampaign= (campaign) => {
    const url = '/api/v1/campaigns/:id'
        fetch(url, {
                method: 'DELETE',
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

export default DeleteCampaign;