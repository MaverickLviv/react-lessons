import {useEffect, useState} from "react";
import {getPosts} from "../services/posts.services.js";
import {withRouter} from "react-router-dom";

export default function Posts() {
    let [posts, setPosts] = useState([]);

    useEffect(()=> {
        getPosts().then(value => setPosts([...value]))
    }, []);

    return (
        <div>
            {
                posts.map(value => <Posts item={value} key={value.id}/>)

            }

        </div>
    );
}