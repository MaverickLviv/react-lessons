// import {useEffect, useState} from "react";
// import {getComments} from "../services/comments.services.js";
// import {withRouter} from "react-router-dom";
//
// export default function Posts() {
//     let [comments, setComments] = useState([]);
//
//     useEffect(()=> {
//         getComments().then(value => setComments([...value]))
//     }, []);
//
//     return (
//         <div>
//             {
//                 comments.map(value => <Comments item={value} key={value.id}/>)
//
//             }
//
//         </div>
//     );
// }