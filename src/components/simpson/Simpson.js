import "./Simpson.css";


export default function Simpson({simpson}) {
  const {name, surname, age, info, photo} = simpson;

  return (
    <div>
    <h2>{name}</h2>
    <h2>{surname}</h2>
    <h2>{age}</h2>
    <p>{info}</p>
    <img src={photo} alt="1"/>
    </div>
  )
}