import React from "react";
import './Vnav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { logout } from "../firebase/fire";
import { useAuth } from "../firebase/fire";

const url= new URLSearchParams(window.location.search)
const city=url.get('city');
const depart=url.get('depart');
const nuits=url.get('nuits');
const budget=url.get('budget');


const Vnav=(props)=>{

const currentUser=useAuth();
const gocustom=()=>{

    window.location.href='../custom?city='+city+'&depart='+depart+'&budget='+budget+"&nuits="+nuits;


}

const goadd=()=>{

    window.location.href='../add';


}

async function  handleLogout(){

    await logout();
 }

const gofavoris=()=>{

    window.location.href='../fav?user='+currentUser.email+'&city='+city+'&depart='+depart+'&budget='+budget+"&nuits="+nuits;

} 

    return(
<nav class="main-menu">
            <ul>
                <li>
                    <a href="../">
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                            Home
                        </span>
                    </a>
                  
                </li>
                {(props.setelement!="fav")?   
                <li class="has-subnav">

                    <a href="#" onClick={()=>gofavoris()}>
                        <i class="fa fa-heart fa-2x"></i>
                        <span class="nav-text">
                            Favoris
                        </span>
                    </a>
                </li>:null} 
                {(props.setelement!="custom")?   
                <li class="has-subnav">
                    <a href="#" onClick={()=>gocustom()}>
                        <i class="fa fa-pencil fa-2x"></i>
                        <span class="nav-text">
                            Custom Offre
                        </span>
                    </a>
                </li>:null} 
                <li class="has-subnav">
                    <a href="#"  onClick={()=>goadd()}>
                        <i class="fa fa-plus fa-2x"></i>
                        <span class="nav-text">
                            Add Offre
                        </span>
                    </a>
                </li> 
                <li class="has-subnav">
                    <a href="#">
                        <i class="fa fa-facebook fa-2x"></i>
                        <span class="nav-text">
                            Facebook
                        </span>
                    </a>
                </li> 
                <li class="has-subnav">
                    <a href="#">
                        <i class="fa fa-instagram fa-2x"></i>
                        <span class="nav-text">
                            Instagram
                        </span>
                    </a>
                </li>
                <li class="has-subnav">
                    <a href="#">
                        <i class="fa fa-twitter fa-2x"></i>
                        <span class="nav-text">
                            Twitter
                        </span>
                    </a>
                </li>
               
            </ul>

            <ul class="logout">
                <li>
                   <a href="../" onClick={handleLogout}>
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