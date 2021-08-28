import {createRef, useState} from "react";
import {saveCar} from "../service/car.api.service";

export default function Form(car) {

    let [formState, setFormState] =useState({model:'', price'', year''});

    let [onFormSubmit] = (e) => {
        e.setFormState({...formState, [e.target.name]: e.target.value})
    };
    let save = (e) => {
        e.preventDefault();
        console.log(formState);
        saveCar(formState);
    }

        return (
      <div>

          <form onSubmit ={save}>
                  <input type="model" name={'model'} value={formState.model} onChange={onFormChange}/>
                  <input type="price" name={'price'} value={formState.price} onChange={onFormChange}/>
                  <input type="year" name={'year'} value={formState.year} onChange={onFormChange}/>
                 <input type="submit"/>
            </form>
    </div>

  );
}