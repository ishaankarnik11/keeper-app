import React from "react";

let dt = new Date();
let year = dt.getFullYear();


function Footer() {
    return <div className="footer">Copyright © {year}</div>;
}

export default Footer;