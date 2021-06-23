import React from "react";

class CampaignForm extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            title: '',
            party: '',
            level: '',
            cnotes: '',
            dm_notes: ''
        }
    }


    handleChange = (e) => {
       this.setState({[e.target.name]: e.target.value});
    }
   

    handleSubmit = (e) => {
        e.preventDefault();
       
        fetch('http://localhost:3000/api/v1/campaigns', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',  
                Authorization: `Bearer <token>`  
            },
            body: JSON.stringify({
                campaign: {
                    title: this.state.title,
                    party: this.state.party,
                    level: this.state.level,
                    cnotes: this.state.cnotes,
                    dm_notes: this.state.dm_notes
                }
                
            })

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
        return (
            <form onSubmit={this.handleSubmit}>
                <h1> Start a Journey: </h1>

                <label>Title:
                    <input type="text" name="title" value={this.value} onChange ={this.handleChange} />
                </label>

                <label>Party:
                    <input type="text" name="party" value={this.value} onChange ={this.handleChange} />
                </label>

                <label>Level:
                    <input type="text" name="level" value={this.value} onChange ={this.handleChange} />
                </label>

                <label>Campaign Notes:
                    <textarea name="cnotes" value={this.value} onChange ={this.handleChange} />
                </label>

                <label>DM Notes:
                    <textarea  name="dmnotes" value={this.value} onChange ={this.handleChange} />
                </label>

                <button>Submit</button>
               
            </form>
        )
    }
}

export default CampaignForm;