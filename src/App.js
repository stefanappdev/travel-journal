import React from 'react';
import{ BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"

import Favs from "./components/favs.js"
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
          <Link to="/">Home</Link>
          <Link to="places">Places</Link>
          <Link to="Favs">Favs</Link>

        </nav>
        <Routes>

          <Route path="/" element={<Home />}/>
          <Route path="/places" element={<Places />}>
              <Route path="Europe" element={<Europe />}/>
              <Route path="Caribbean" element={<Cbean />}/>
              <Route path="Asia" element={<Asia />}/>
         </Route>


            <Route path="/favs" element={<Favs />} />
        </Routes>
     </Router>
    </div>

    );
}

export default App;
