import {useState} from "react";

export default function Form() {

    let [username, setUsername] = useState ('enter username');
    let [email, setEmail] = useState('enter email');

    let onFormSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.username.value);

    };
    return (
      <div>

          <form>
                  <input type="text" name={'username'}/>
                   <input type="email" name={'email'}/>
                 <button>save</button>

            </form>

    </div>

  );
}