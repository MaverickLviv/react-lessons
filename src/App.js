import {
    BrowserRouter as Router,
    Route,
    Link,


} from "react-router-dom";
import Users from "./compomemts/users/Users";
import Posts from "./compomemts/posts/Posts";
import Comments from "./compomemts/comments/Comments";


export default App;

function App() {
    return (
        <Router>
            <div>

                <Link to={'/'}>default</Link>
                <br/>
                <Link to={'/Users'}>Users</Link>
                <br/>
                <Link to={'/Posts'}>Posts</Link>
                <br/>
                <Link to={'/Comments'}>Comments</Link>


                <Route path={'/Users'} component={Users}/>
                <Route path={'/Posts'} component={Posts}/>
                <Route path={'/Comments'} component={Comments}/>

            </div>

        </Router>

    );
}

