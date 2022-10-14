import React from "react"
import locations from "./data.js"


function Asia(){


	const sites_asia=locations.map(location=>{

			if (location.continent=="Asia"){

				return (<div>
					

					<img src={location.imageUrl}/>


					</div>)
			}
		})


	return(


		<>

		<h1>this is the Asia page</h1>

		{sites_asia}





		</>

		)

}


export default Asia;