import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import SinglePost from "./pages/SinglePost";
import AddPost from "./pages/AddPost";
import EditPosts from "./pages/EditPosts";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Technology from "./pages/Technology";
import Gossip from "./pages/Gossip";
import Trending from "./pages/Trending";
import Creative from "./pages/Creative";
import Fashion from "./pages/Fashion";
import Lifestyle from "./pages/Lifestyle";
import Business from "./pages/Business";
import Switch from "react-bootstrap/esm/Switch";
import Post from "./components/Post";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <Route>
          <Header />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/addpost" component={AddPost} />
        <Route exact path="/technology" component={Technology} />
        <Route exact path="/trending" component={Trending} />
        <Route exact path="/creative" component={Creative} />
        <Route exact path="/fashion" component={Fashion} />
        <Route exact path="/lifestyle" component={Lifestyle} />
        <Route exact path="/business" component={Business} />
        <Route exact path="/gossip" component={Gossip} />
        <Route exact path="/posts/:id" component={EditPosts} />
        <Route exact path="/post/:id" component={SinglePost} />
        <Route path="/" exact component={Home} />
        <Route exact path="/search/:keyword" component={Home} />

        <Footer />
      </Router>
    </>
  );
};

export default App;
