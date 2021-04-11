import React from 'react';
import {Link} from 'react-router-dom';
import s from './UsersPage.module.css';


class UsersPage extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        this.setState({ users: data });
    }

    render() {
        return (
            <div className="page-wrapper">
                <h1>User List</h1>
                {
                    this.state.users.map(user => 
                        <Link 
                            className={s.userLink} 
                            to={`/users/${user.id}`}
                            key={user.id}>
                                {user.name}
                        </Link>)
                }
            </div>
        )
    }
}

export default UsersPage;
