import "mdb-react-ui-kit/dist/css/mdb.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import SinglePost from "./pages/SinglePost";
import AddPost from "./pages/AddPost";
import EditPosts from "./pages/EditPosts";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Router>
        
        <Header />
        <Route exact path='/login' component={Login} />
        <Route exact path='/post/dd' component={EditPosts} />
        <Route exact path='/addpost' component={AddPost} />
        <Route exact path='/posts' component={SinglePost} />
        <Route path='/' exact component={Home} />
        <Footer />
        
      </Router>
    </>
  );
};

export default App;
