import React from "react"
import {Outlet,Link} from "react-router-dom"
import Cbean from "./Caribbean.js"
import Europe from "./Europe.js"
import Asia from "./Asia.js"
import "../styles/App.css"
import locations from "./data.js"
import {myFavs,Fav} from "./favs.js"


let isFavourite=false;







function Places(){
		
		
		const[fav,setstate]=React.useState(isFavourite);
		
		
		function toogleFav(){
	
	setstate(prevstate=>!prevstate)
	
	}
		
		const pl=locations.map(place => {
			
			
				return <div>
				
				<div class="place-name">{place.name} </div>
				<div class="continent"> Continent:{place.continent} </div>
				<img class="place-img"  src={place.imageUrl}/>
				<div class="place-description">{place.description} </div>
				
					
								
				<myFavs isfav={fav} />
				
				
			
				</div>
		})
			
		
		
		return(
		<>
		
		
		<h1>List of all places </h1>
		
		{pl}
		

		<nav class="places-subnav">


			<Link to='Caribbean'> Caribbean </Link>
			<Link to='Europe'> Europe </Link>
			<Link to='Asia'> Asia </Link>


		</nav>
		
		
		

		<Outlet/>
		</>
		)

}









export default Places;