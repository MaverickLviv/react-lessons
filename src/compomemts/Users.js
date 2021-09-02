import {useEffect, useState} from "react";
import {getUsers} from "../services/users.services";
import {withRouter} from "react-router-dom";

export default function Users() {
    let [users, setUsers] = useState([]);

    useEffect(()=> {
        getUsers().then(value => setUsers([...value]))
    }, []);

  return (
    <div>
        {
            users.map(value => <Users item={value} key={value.id}/>)

                }

    </div>
  );
}
export default {getUsers};

