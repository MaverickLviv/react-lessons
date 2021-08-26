import {createRef, useState} from "react";
import {saveUser} from "../service/user.api.service";

export default function Form() {

    let onFormSubmit = (e) => {
        e.preventDefault();
        console.log('form submit')
        console.log(e.target.username.value);
        console.log(e.target.email.value);
        let userToSave = {username: e.target.username.value, email: e.target.email.value}

        saveUser(userToSave);
    };
    return (
      <div>

          <form onSubmit ={onFormSubmit}>
                  <input type="text" name={'username'} placeholder='username'/>
                   <input type="email" name={'email'} placeholder='email'/>
                 <button>save</button>
            </form>
    </div>

  );
}