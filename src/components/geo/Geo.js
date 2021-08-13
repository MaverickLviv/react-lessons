
export default function Geo({geo}) {
  const {lat, lng} =geo;
  return (
    <div>

      <h3>{lat}</h3>
      <h3>{lng}</h3>


    </div>
  );
}