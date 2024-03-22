import * as React from "react";
import logo from './SLogo.jpg';


export default function Footer(){
    return(
          
          <footer class="py-3 my-4" >
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
                <a href="#" class="nav-link px-2 text-muted">Home</a>
            </li>    
            <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">Features</a>
            </li>
            <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">Signup</a>
            </li>
            </ul>
          <p class="text-center text-muted">Copyright © 2024 Peekay Steel Castings - All Rights Reserved. IT Team Peekay Steel</p>
          </footer>
    );
}