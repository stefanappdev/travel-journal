
import React from "react"
import locations from "./data.js"

function Europe(){


	const sites_EU=locations.map(location=>{

			if (location.continent=="Europe"){

				return (<div>
					

					<img src={location.imageUrl}/>


					</div>)
			}
		})



	return(

		<>

		<h1>this is the Europe page</h1>


		{sites_EU}

		</>
		)

}


export default Europe;