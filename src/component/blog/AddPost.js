import React, { useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { useHistory } from "react-router-dom";
//import ReactQuill from "react-quill";
//import "react-quill/dist/quill.snow.css";
//import App from "../../App";
import {Editor} from '@tinymce/tinymce-react';


const AddPost = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    title: "",
    body:"",
    date: "",
    
  });
  const { title, body, date } = user;
  

  /*const onHandleChange = (e) => {
    setUser({ body: e.body.getData() });
    console.log(user.body);
  };*/
  const handleEditorChange=(e)=>{
   var body=e.target.getContent();
   console.log(body);
   setUser({...user,body});
  }
  
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value});    
    console.log(user.title)
    console.log(user.body)
    
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3004/posts", user,);
    history.push("/blog");
  };
  /*const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "vedio"],
      ["clean"],
      ["code-block"], 
    ],
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "vedio",
    "code-block",
  ];*/

  return (
    <div>
      <Navbar />
      <h1>Create Post</h1>
      <div className="rect container">
        <form method="post" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="title"
              name="title"
              value={title}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <Editor apiKey="1j30ojnrvsvvep80l0krkys8zjekyp1hut8cvdklzp39516v"
              //modules={modules}
              //formats={formats}
              type="body"
              name="body"
              placeholder="body"
              value={body}
              onChange={handleEditorChange}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control"
              placeholder="date"
              name="date"
              value={date}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Add Post
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default AddPost;
