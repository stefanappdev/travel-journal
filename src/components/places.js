import React from "react"
import {Outlet,Link} from "react-router-dom"
import Cbean from "./Caribbean.js"
import Europe from "./Europe.js"
import Asia from "./Asia.js"


function Places(){

	return(

		<>
		<h1>this is the Places page</h1>

		<nav>


			<Link to='Caribbean'> Caribbean </Link>
			<Link to='Europe'> Europe </Link>
			<Link to='Asia'> Asia </Link>


		</nav>


		

		<Outlet/>

		</>


		)

}


export default Places;