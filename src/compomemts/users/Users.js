import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.services";
import {getUsers} from "../user/User"

export default function Users() {
    let [users, setUsers] = useState([]);

    useEffect(()=> {
        getUsers().then(value => setUsers([...value]))
    }, []);

  return (
    <div>
        {
            users.map(value => <User item={value} key={value.id}/>)

                }

    </div>
  );
}


