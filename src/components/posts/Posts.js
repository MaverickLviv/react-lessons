import "./Posts.css";
import {useEffect, useState} from "react";
import {getPosts} from "../../services/post.service";
import Post from "../post/Post";

export default function Posts({userId}) {
    const [posts, setPosts] = useState([]);   /*-деструктуризация массива и возврат массива с 2мя елементами*/
    // змінна з результатом/функція яка задає результат
    useEffect(() => {                     /*hook*/
        getPosts(userId).then(value => setPosts([...value]))

    }, []) ;

    console.log(posts);

    return (
        <div className={'posts'}>
            {
                posts.map(post => <Post key={post.id} post ={post}/>)

            }

        </div>
    );
}