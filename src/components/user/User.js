import "./User.css"
import Address from "../address/Address";

export default function User({user}) {
    const {id, name, address} =user;

  return (
    <div>
        <h2>{id}</h2>
        <h2>{name}</h2>
        <Address address={address}/>

    </div>
  );
}