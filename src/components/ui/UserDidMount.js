const UserDidMount = () =>  {
    const url = 'http://localhost:3000/api/v1/users/:id'
    fetch(url, {
            method: 'GET',
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
        .then(response => this.setState({ user: response }))
        // .catch(() => this.history.push("/"));
}

export default UserDidMount; 