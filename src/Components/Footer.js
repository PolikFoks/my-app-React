import React from "react";
import "../css/footer.css";

function Footer() {

  return (
    <div className="footer">
     <a className="fa" href="#"> &copy; {new Date().getFullYear()}</a>
     <a className="fa" href="#">Impressum</a>
     <a className="fa" href="#">[phonenumber]</a>
       </div>
  );
}

export default Footer;