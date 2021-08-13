import "./Users.css";
import {getUsers} from "../../services/user.service";
import {useEffect, useState} from "react";
import User from "../user/User";

export default function Users() {
  const [users, setUsers] = useState([]);   /*-деструктуризация массива и возврат массива с 2мя елементами*/
    // змінна з результатом/функція яка задає результат
  useEffect(() => {                     /*hook*/
    getUsers().then(value => setUsers([...value]))

  }, []) ;

  console.log(users);

  return (
    <div className={'users'}>
      {
        users.map(user => <User key={user.id} user ={user}/>)

      }

    </div>
  );
}