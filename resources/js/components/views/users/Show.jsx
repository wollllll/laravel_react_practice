import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Show = (props) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        // console.log(props.match)
        const response = await axios.get(`/api/users/${props.match.params.id}`);
        setUser(response.data.user)
    }
    return (
        <div>
            <h1>User詳細ページ</h1>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    );
}

export default Show;
