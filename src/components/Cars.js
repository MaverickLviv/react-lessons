import {useEffect, useState} from "react";
import {getCars} from "../services/Car.api.services";
import Car from "./Car";

export default function Cars() {
    let [cars, setCars] = useState([]);
    useEffect(() => {
        getCars().then(value => {setCars([...value])});
    }, [cars]);
    return (
        <div>
            {
                cars.map(value => <Car item ={value} key={value.id}/>)
            }
        </div>
    )}