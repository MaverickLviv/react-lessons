import {useEffect, useState} from "react";
import Comment from "../comment/Comment";
import {getComments} from "../../services/comments.services";


export default function Comments() {
    let [comments, setComments] = useState([]);

    useEffect(()=> {
        getComments().then(value => setComments([...value]))
    }, []);

    return (
        <div>
            {
                comments.map(value => <Comment item={value} key={value.id}/>)

            }

        </div>
    );
}