import './Users.css';
import {useEffect, useState} from "react";
import {getUsers} from "../../services/service.fetch";
import User from "../user/User";
import Post from "../post/Post";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [posts, setPosts ] = useState(null);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, []);


    const getUser = (user1, posts1) => {
        console.log(user1);
        console.log(posts1);
        setUser({...user1});
        setPosts([...posts1])
    }

    return (
        <div className={'wrapper'}>
            <div className={'users'}>
                {
                    users.map(user => <User key={user.id} user={user} getUser={getUser}/>)
                }
            </div>
            <div className={'user-posts'}>
                <h3>
                    {
                        user && (<div>{user.name}</div>)
                    }
                </h3>
                <div>
                    {
                        posts && posts.map(post => <Post key={post.id} post={post}/>)
                    }
                </div>
            </div>
        </div>
    );
}
