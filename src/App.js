import React, { Components } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contract from './components/contract'
import './App.css';

class App extends Components {
render() {
	return (
	<Router>
		<div className="App">
			<ul className="App-header">
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/About">About Us</Link>
			</li>
			<li>
				<Link to="/contract">Contact Us</Link>
			</li>
			</ul>
		<Routes>
				<Route exact path='/' element={< Home />}></Route>
				<Route exact path='/About' element={< About />}></Route>
				<Route exact path='/contract' element={< Contract />}></Route>
		</Routes>
		</div>
	</Router>
);
}
}

export default App;
