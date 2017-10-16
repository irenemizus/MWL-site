import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route, withRouter } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import ArticlePagesList from './ArticlePagesList';
import Page from './Page'

const DataState = {
	LOADING: 1,
	SUCCESS: 2,
	FAIL: 3
};

var PageWithHistory = withRouter(Page);

class App extends Component {
	constructor() {
		super();
		
		this.state = {
			dataState: DataState.LOADING,
			json: null
		};
		
		let app = this;
    
    	axios.get('/papers_list.json')
			.then(function (response) {
				console.log(response);
				
	  			//
	  
			    app.setState({
					dataState: DataState.SUCCESS,
					json: response.data
	    		});
	    	
	  		})
	  		.catch(function (error) {
				console.log(error);

	    		app.setState({
	    			dataState: DataState.FAIL,
	    			json: null,
	    			error: {
	    				code: error.response.status,
	    				text: error.response.statusText
	    			}
	    		});
		});
  	}

	render() {
		let content, leftPane;
	
		if (this.state.dataState === DataState.LOADING) {
			content = <p className="App-intro">
			  Loading..
			</p>;
		} else if (this.state.dataState === DataState.FAIL) {
			content = <p className="App-intro">
			  Error {this.state.error.code}: {this.state.error.text}
			</p>;
		} else {
			const json = this.state.json;
	
			let pageTitles = Object.keys(json.pages).sort();
			
			content = (
				<Switch>
				  <Route exact path='/' render={ 
					(props) => ( 
						<ArticlePagesList pageTitles={pageTitles} />
					)
				  } />
				  <Route path='/page/:index' render={ 
					(props) => ( 
						<PageWithHistory page={json.pages[props.match.params.index]} />
					)
				  } />
				</Switch>
			)
			
			leftPane = (
				  <Route path='/page/:index' render={ 
					(props) => ( 
						<ArticlePagesList pageTitles={pageTitles} />
					)
				  } />
			)

	  	}
	  	
		return (
		  <div className="App">
			<div className="App-header">
			  <img src="img/index.jpg" alt="MicroWave Spectroscopy Laboratory" />
			  <br />
			  <img src="img/line1.jpg" />
			</div>
			
			<div className="left_pane">
				{leftPane}
			</div>
			<div className="main_pane">
			    {content}
			</div>
		  </div>
		);
	  }
}

export default App;

