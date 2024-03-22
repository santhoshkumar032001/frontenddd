// Filename - Header.js
import * as React from "react";
import logo from './SLogo.jpg';
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";


export default function Header() {
	return (
	<div>
		<AppBar position="static" style={{backgroundColor:"white"}}>
			<Toolbar>
				{/*Inside the IconButton, we 
					can render various icons*/}
					<img src={logo} alt="Logo" className='rounded w-35' style={{padding:"10px"}}></img>
				<IconButton
					size="large"
					edge="start"
					color="black"
					aria-label="menu"
					sx={{ mr: 5 }}
				>
					{/*This is a simple Menu 
					Icon wrapped in Icon */}
					
				</IconButton>
				{/* The Typography component applies 
					default font weights and sizes */}
                
				<Typography
					variant="h6"
					component="div"
					color="black"
					sx={{ flexGrow: 8 }}
				><span style={{fontWeight:'bold'}}>PEEKAY STEEL CASTINGS PVT LTD</span>
				</Typography>
				<i class="bi bi-person-square">
				<Button color="inherit" href="/" style={{color:"white", border:"1px solid grey",fontWeight:'bold',backgroundColor:'green' }}>Logout</Button></i>
			</Toolbar>
			
		</AppBar>
        <div className="" style={{marginTop:30}}>
         



	    </div>



	</div>	
	);
}
