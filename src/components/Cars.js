import {useEffect, useState} from "react";
import {getCars} from "../service/car.api.service";
import Car from "./Car";

export default function Cars() {
    let [cars, setCars] = useState([]);
    useEffct(() => {
        getCars().then(value => {setCars([...value])})
    }, [cars]);
    return(
        <div>
            {
            cars.map(value => <Car item ={value} key={value.id}/>)
            }
        </div>
    )}