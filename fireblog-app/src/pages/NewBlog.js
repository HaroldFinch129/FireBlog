import React from 'react';
import './NewBlog.css';

const NewBlog = () => {
    return (
        <div className="NewBlog_container">
      <div className="form_container">
        <form action="" className="Login_form">
          <div className="form_image"></div>
          <h1 className="form_header">NEW BLOG</h1>
          <input type="text" className="form_input" placeholder="Email" />
          <input type="password" className="form_input" placeholder="Password" />
          <div className="content_container" >
              <textarea placeholder="Content" id="content" cols="32" rows="7"></textarea>
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
