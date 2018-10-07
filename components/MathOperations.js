import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

import { connect } from 'react-redux';
import { increment, decrement } from '../actions/mathAction';

class MathOperations extends React.Component{
	render() {
		return (
      <div className="container">
				<div className="row">
					<div className="col-sm-6">
						<h1>{this.props.counter}</h1>
						<p>
							<Button onClick={()=>this.props.increment(1)} bsStyle="primary">+</Button> &nbsp;
							<Button onClick={()=>this.props.decrement(1)} bsStyle="primary">-</Button>
						</p>
					</div>
				</div>
      </div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
    counter:state.counter
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		increment: (number) => {
			dispatch( increment(number) );
		},
		decrement: (number) =>{
			dispatch( decrement(number) );
		}
	};
};

export default connect( mapStateToProps, mapDispatchToProps )( MathOperations );
