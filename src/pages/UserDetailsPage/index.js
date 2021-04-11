import React from 'react';
import {withRouter} from 'react-router-dom';

// GET PARAMS WITH REACT HOOKS
// const UserDetailsPage = () => {
//     const {id} = useParams();

//     return (
//         <div>
//             <h1>User {id} Page</h1>
//         </div>
//     )
// };

class UserDetailsPage extends React.Component {
    state = {
        user: null
    }

    componentDidMount() {
        this.fetchUserDetails();
    }

    fetchUserDetails = async () => {
        const {params} = this.props.match;
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
        const data = await response.json();

        this.setState({user: data});
    }

    render() {
        return (
            <div>
                <h1>User Details Page</h1>

                {
                    this.state.user ?
                    <h2>{this.state.user.name}</h2> :
                    <h3>...Loading</h3>
                }

            </div>
        )
    }
}

export default withRouter(UserDetailsPage);

