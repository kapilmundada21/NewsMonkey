import React from 'react'
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="wrapper">
        <input type="checkbox" id="check" />
        <header>
            <div className="left_area">
                <label for="check"><i className="fas fa-bars" id="sidebar_btn"></i></label>
                <span>Annapurna</span>
            </div>
            <div className="right_area">
                <a href="#" className="logout_btn" onclick="logout()">Logout</a>
            </div>
        </header>
        <div className="sidebar">
            <center>
                <img src="profile_image.jpg" className="profile_image" alt="" />
            </center>
            <a href="index.php"><i className="fa fa-desktop" aria-hidden="true"></i><span>Home</span></a>
            <a href="post.php"><i className="fas fa-book" aria-hidden="true"></i><span>Post</span></a>
            <a href="feedback.php"><i className="fa fa-cog" aria-hidden="true"></i><span>Feedback</span></a>
        </div>
        <div className="content"></div>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
    </div>
  )
}
