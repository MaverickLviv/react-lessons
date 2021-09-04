import {useEffect, useState} from "react";
import {getPosts} from "../../services/posts.services";
import Post from "../post/Post";

export default function Posts() {
    let [posts, setPosts] = useState([]);

    useEffect(()=> {
        getPosts().then(value => setPosts([...value]))
    }, []);

    return (
        <div>
            {
                posts.map(value => <Post item={value} key={value.id}/>)

            }

        </div>
    );
}