import React from 'react'
import "./TopBar.css"
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

export default function topBar(props) {
    return (
        <div className={"topbar " + (props.onOpen && "active")}>
            <div class="wrapper">
                <div className="left">
                    <a class="logo" href="#intro"></a>
                    <div className="itemContainer">
                        <PersonIcon className="icon"/>
                        <span><a href="tel:+91 93541 23773" className="phoneNumber">+91 93541 23773</a></span>
                    </div>
                    <div className="itemContainer">
                        <EmailIcon className="icon"/>
                        <span><a href="mailto: saujanyaasood@gmail.com" className="mailID">saujanyaasood@gmail.com</a></span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => props.setMenuOpen(!props.onOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
