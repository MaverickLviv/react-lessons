import {useEffect, useState} from "react";
import {getComments} from "../comments/comments.js"

export default function Comments() {
    let [comments, setComments] = useState([]);

    useEffect(()=> {
        getComments().then(value => setComments([...value]))
    }, []);

    return (
        <div>
            {
                comments.map(value => <Comments item={value} key={value.id}/>)

            }

        </div>
    );
}