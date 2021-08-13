import "./Post.css"
import Comments from "../comments/Comments";

export default function Post({post}) {
    const {
        id,
        userId,
        title,
        body,
    } = post;

    return (
        <div className={post}>
            <h3>{id}</h3>
            <h3>{userId}</h3>
            <h3>{title}</h3>
            <p>{body}</p>
            <Comments/>

        </div>
    );
}