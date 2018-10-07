import React, {Component} from 'react';
import MathOperations from '../components/MathOperations';
import { Jumbotron, Button } from 'react-bootstrap';

class App extends React.Component{
	render() {
		return (
			<Jumbotron>
				<h1>Redux Example</h1>
				<MathOperations />
				<p>
			    This is a simple hero unit, a simple jumbotron-style component for calling
			    extra attention to featured content or information.
  			</p>
			</Jumbotron>
		);
	}
}

export default App;
