import React, { Component } from 'react'
import { BrowserRouter as Router,Link as Links} from "react-router-dom";
import { animateScroll as scroll , Link} from 'react-scroll'
import './../../Assets/Styles/Navigation.scss'

window.onload =(function(){
     var refButton = document.getElementById('icon');
        refButton.onclick = ()=>{
        var a = document.getElementById("nav_ul").className;
            if(a ==="showing"){
                document.getElementById("nav_ul").className="";
            }
            else{
                document.getElementById("nav_ul").className="showing";
            }
        }
})


const scroller = () =>{
    
    var nav1 = document.getElementById("nav_black");
    
    if(window.scrollY>0){
        nav1.classList.add("black");
    }
    else{
        nav1.classList.remove("black");
    }
    
}
window.addEventListener('scroll',scroller)

export default function Nav() {
    return (
            <div id="wrapper" className="wrapper" >
                <nav id="nav_black">
                    <div className="menu-icon" id="icon" >
                        <i className="fa fa-bars fa-4x"></i>
                    </div>
                    <div className="logo" onClick={()=>scroll.scrollToTop()}>
                        Phantom
                    </div>
                    <div className="menu">
                        <ul id="nav_ul" className="hide">
                            <li>
                                <Link 
                                    className="header__menu__item" 
                                    to="About"
                                    spy={true} 
                                    smooth={true} 
                                    offset={50} 
                                    duration={1000}>About Us
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    className="header__menu__item"
                                    spy={true}
                                    smooth ={true}
                                    offset={-70}
                                    duration={1000}
                                    to="feedback">Contact Us
                                </Link>
                            </li>
                            <li>
                                    <Links
                                        className="header__menu__item" 
                                        to="/login"
                                        duration={1000}
                                        >
                                        <i className="fa fa-user" aria-hidden="true"></i>Login
                                    </Links>
                            </li>
                            <li>
                            <select name="Languages" className="header__menu__select">
                                    <option defaultValue>English</option>
                                    <option  defaultValue>French</option>
                                    <option  defaultValue>Kinyarwanda</option>
                            </select>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
    )
}

