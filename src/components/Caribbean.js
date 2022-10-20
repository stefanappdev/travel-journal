
import React from "react"
import locations from "./data.js"
import "../styles/Caribbean.css"






function Cbean(){

	let staricon="images/star-empty.png"

	const sites_Caribbean=locations.map(location=>{

			if (location.continent==="Americas"){

				return (<div>
					

						<div>

						<img src={location.imageUrl}/>
						<br/>
						<img src={staricon} class="fav-icon" alt='its a empty star' />
					

						</div>
						
							


					</div>)
			}
		})



	return(

		<>

		<h1></h1>


		{sites_Caribbean}

		</>
		)

}




export default Cbean;