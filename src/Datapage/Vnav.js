import React from "react";
import './Vnav.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Vnav=()=>{

    return(
<nav class="main-menu">
            <ul>
                <li>
                    <a href="http://justinfarrow.com">
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                            Home
                        </span>
                    </a>
                  
                </li>
                <li class="has-subnav">
                    <a href="#">
                        <i class="fa fa-heart fa-2x"></i>
                        <span class="nav-text">
                            Favoris
                        </span>
                    </a>
                </li>    
                <li class="has-subnav">
                    <a href="#">
                        <i class="fa fa-pencil fa-2x"></i>
                        <span class="nav-text">
                            Custom Offre
                        </span>
                    </a>
                </li> 
                <li class="has-subnav">
                    <a href="#">
                        <i class="fa fa-plus fa-2x"></i>
                        <span class="nav-text">
                            Add Offre
                        </span>
                    </a>
                </li> 
               
            </ul>

            <ul class="logout">
                <li>
                   <a href="#">
                         <i class="fa fa-power-off fa-2x"></i>
                        <span class="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>

 
    );

}




export default Vnav