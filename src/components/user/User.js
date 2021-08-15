import './User.css';
import {useEffect, useState} from "react";
import {getPosts} from "../../services/service.fetch";

export default function User({ user, getUser }) {
    const { id, name } = user;
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts(user.id).then(value => setPosts([...value]));
    }, []);

    const onGetUser = () => {
        getUser(user, posts);
    };

    return (
        <div>
            <h2>{id}. {name}</h2>
            <button onClick={onGetUser}>User</button>
        </div>
    );
}

