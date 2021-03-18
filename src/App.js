import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/contact/Contact';
import EditContact from './component/contact/EditContact';
import ViewContact from './component/contact/ViewContact';
import About from './component/About';
import Inf from './component/Inf';
import Blog from './component/blog/Blog';
import BlogAdmin from './component/blog/BlogAdmin';
import AddPost from './component/blog/AddPost';
import EditPost from './component/blog/EditPost';
import Form from './component/blog/Form';
import ViewPost from './component/blog/ViewPost';
import Login from './component/Login';
import AddUser from './component/users/AddUser';
import EditUser from './component/users/EditUser';
import ViewUser from './component/users/ViewUser';
import ErrorPage from './component/ErrorPage';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import AdminPanel from './AdminPanel';
import ProtectedRoute from './component/ProtectedRoute';





function App() { 
  
  return (
    <div className="background">

      <div className="App">
      
       
        <BrowserRouter>
          <div className="container">
            <Switch>
           
              <Login  exact path="/" component={Login} />
              <Route  exact path="/home"  component={Home} />
              <Route exact path="/contact"  component={Contact} /> 
              <Route exact path="/editcontact/:id"  component={EditContact} />
              <Route exact path="/viewcontact/:id"  component={ViewContact} />
              <Route exact path="/about"  component={About} />
              <Route exact path="/blog"  component={Blog} />
              <Route exact path="/bloga"  component={BlogAdmin} />
              <Route exact path="/addpost"  component={AddPost} />
              <Route exact path="/editpost/:id"  component={EditPost} />
              <Route exact path="/blog/post/:id"  component={ViewPost} />
              <Route exact path="/form"  component={Form} />
              <Route  exact path="/adduser"  component={AddUser} />
              <Route  exact path="/edituser/:id"  component={EditUser} />
              <Route  exact path="/viewuser/:id"  component={ViewUser} />
              <Route  exact path="/inf"  component={Inf} />
              <ProtectedRoute  exact path="/admin"  component={AdminPanel}   />
              <Route   component={ErrorPage} />
             
            </Switch>
          </div> 
        </BrowserRouter>
        
  

      </div>

    </div>




  );



};

export default App;
