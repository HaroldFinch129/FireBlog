import React from 'react';
import './NewBlog.css';

const NewBlog = () => {
    return (
        <div className="NewBlog_container">
      <div className="NewLog_form_container">
        <form action="" className="NewLog_form">
          <div className="NewLog_image"></div>
          <h1 className="NewBlog_form_header">NEW BLOG</h1>
          <input type="text" className="form_input" placeholder="Title*" />
          <input type="password" className="form_input" placeholder="Image URL*" />
          <div className="content_container" >
              <textarea placeholder="Content*" id="content" cols="30" rows="4"></textarea>
          </div>
          <button className="form_button" value = "LOGIN" >
            SUBMIT{" "}
          </button>
         
          
        </form>
      </div>
    </div>
    )
}

export default NewBlog
