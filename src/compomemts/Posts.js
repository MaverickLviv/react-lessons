import {withRouter} from "react-router-dom";
function Posts (props) {
    console.log(props);
  return (
    <div>
        <h3>home page</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque blanditiis cumque debitis
            distinctio doloribus eius fugit illum incidunt ipsam minima praesentium quas quidem, repellat,
            reprehenderit sint vero voluptatem voluptatibus!</p>

    </div>
  );
}
export default withRouter(Posts);