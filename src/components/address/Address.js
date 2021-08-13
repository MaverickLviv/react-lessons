import "./Address.css"
import Geo from "../geo/Geo";


export default function Address({address}) {
  const {street, geo} =address;
  return (

    <div>

      <h3>{street}</h3>

      <Geo geo={geo}/>

    </div>
  );
}