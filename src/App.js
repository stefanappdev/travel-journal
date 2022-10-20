import React from 'react';
import{ BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import "./styles/App.css"
//import {Fav,myFavs} from "./components/favs.js"
import Home from "./components/home.js"
import Europe from "./components/Europe.js"
import Cbean from "./components/Caribbean.js"
import Asia from "./components/Asia.js"
import Places from "./components/places.js"

function App() {
  return (
   <div className="App">
   
      <Router>
        <nav>
          

        <div id="main-app-nav">


				<div id="home"  >
					
					<Link to="/">     


					   <img src= "images/house-red.png" id="house-icon"/>

					</Link>
				   
				   
				</div>


			  
				  <div id="locations" >
						  
					<Link to="places">  
							   
						<img src= "images/places-red.png" id='places-icon'/> 

					  </Link>  

				  </div>
					 


         

				</div>
        </nav>
		
		
        <Routes>

          <Route path="/" element={<Home />}/>
          <Route path="/places" element={<Places />}>
              <Route path="Europe" element={<Europe />}/>
              <Route path="Caribbean" element={<Cbean />}/>
              <Route path="Asia" element={<Asia />}/>
         </Route>       
			
        </Routes>
     </Router>
	 
    </div>

    );
}

export default App;
