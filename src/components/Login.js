import React from "react"
// import UserDidMount from "./ui/UserDidMount"


class Login extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            username: '',
            password: '',  
            loggedIn: false,
            uToken: ''
        };
    }

   
    loginSuccess = () => {
        // UserDidMount();

        this.setState({
            username: this.username,
            password: this.password,
            isloggedIn: true,
            uToken: localStorage.getItem("token")
        })

        console.log("loginSuccess hit")
    }

  
    handleChange = (e) => {
       this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
       e.preventDefault();
       
        fetch('http://localhost:3000/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',  
                Authorization: `Bearer <token>`  
            },
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    password: this.state.password
                }

            })
        }).then(r=>r.json())
        .then(data => {localStorage.setItem("token", data.token)})

        this.loginSuccess(localStorage.getItem("token"));
    }


    render() {
        return (
            <>
                <h4>Welcome! Please login to create or view a campaign! </h4>
                <form onSubmit={this.handleSubmit}> 
                   <div>   
                        <div>
                            <label>Username:
                                <input type="text" className="username" value={this.value} onChange ={this.handleChange} name="username"/>
                            </label>
                        </div> 
                        <div>
                            <label>Password:
                                <input type="text" className="password" value={this.value} onChange ={this.handleChange} name="password" />
                            </label>
                        </div> 

                        <button>Submit</button>
                    </div>
                </form>
            </>
        )
    }

}

export default Login;