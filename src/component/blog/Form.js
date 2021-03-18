import React from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Form=()=>{
    Form.modules = {
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
    return(
        <div className="container">
        <form>
        Username:<input type="text" name="username" value="username" /> <br />
        body:<ReactQuill   modules={Form.modules} name="username" value="body" /><br />
        <button type="button" value="submit" />
        
        </form>
        </div>
    )
} 
export default Form;