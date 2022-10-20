import React from "react"






function myFavs(props){
	
	let res=""
	props.isfav?res="images/star-filled.jpeg":res="images/star-empty.png";
	
	return (<div>
	
			
	
				<img src={res} />
	
	
	</div>)
}


export default myFavs;