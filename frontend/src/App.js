import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import SinglePost from "./pages/SinglePost";
import AddPost from "./pages/AddPost";
import EditPosts from "./pages/EditPosts";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <Header />
        <Route exact path="/login" component={Login} />
        <Route exact path="/addpost" component={AddPost} />
        <Route exact path="/posts/:id" component={EditPosts} />
        <Route exact path="/post/:id" component={SinglePost} />
        <Route path="/" exact component={Home} />
        <Footer />
      </Router>
    </>
  );
};

export default App;
