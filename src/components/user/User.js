import "./User.css"
import Posts from "../posts/Posts";


export default function User({user}) {
  const {
      id,
      name,
      username,
  } = user;

  return (
    <div className={user}>
      <h3>{id}</h3>
      <h3>{name}</h3>
      <p>{username}</p>
      <Posts userId={id}/>

    </div>
  );
}