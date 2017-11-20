import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Switch, Route, withRouter } from 'react-router-dom';

import './App.css';

import ArticlePagesList from './ArticlePagesList';
import Page from './Page'

const DataState = {
	LOADING: 1,
	SUCCESS: 2,
	FAIL: 3
};

var PageWithHistory = withRouter(Page);
var ArticlePagesListWithHistory = withRouter(ArticlePagesList);

class Footer extends Component {
	render() {
		return (
			<div className="App-footer">
			    <img style={{"width": "100vw", "height": "13px"}} src="img/line1.jpg" alt=''/>
				<div className="contacts">
					<a href="http://www.ipfran.ru" target="_blank" rel="noopener noreferrer">
						Institute of Applied Physics of the Russian Academy of Sciences</a><br />
						contact <a href="mailto:ireneb86@appl.sci-nnov.ru">webmaster</a><br />
				</div>
			</div>
		);
	}
}

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
	
		var header = (
			<div className="App-header">
			  <div style={{"minWidth": "2000px"}}>
			  	<img src="img/index.jpg" alt="MicroWave Spectroscopy Laboratory" />
			  	<img style={{"width": "1000px", "height": "139px"}} src="img/index-right.jpg" alt="" />
			  </div>
			  <img style={{"width": "100vw", "height": "13px"}} src="img/line1.jpg" alt=''/>
			</div>
		)
		
		var line = (
			  <svg width="20" height="7">
  				<rect width="15" height="4" className="menu_item" style={{"strokeWidth": "0"}} />
  				-
			  </svg>
		)
		
		var menu = (
			<div className="App-menu">
				<div className="menu_item"><a href="/index.html">{line}Main directions of activity</a></div>
				<div className="menu_item"><a href="/people.html">{line}People</a></div>
				<div className="menu_item"><a href="/instrum.html">{line}Instruments</a></div>

				<div className="menu_item_active"><span>{line}List of publications</span></div>

				<div className="menu_item"><a href="/about.html">{line}About</a></div>
				<div className="menu_item"><a href="/interest.html">{line}Интересующимся</a></div>
			</div>
		)
	
		if (this.state.dataState === DataState.LOADING) {
			content = <p className="App-intro">
			  Loading...
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
						<div>
							<div className="main_pane">
								<ArticlePagesListWithHistory colors="light" pageTitles={pageTitles} />
							</div>
							<div style={{"position":"fixed", "bottom": "0"}}>
								<Footer />
							</div>
						</div>
					)
				  } />
				  <Route path='/page/:index' render={ 
					(props) => (
						<div>
							<div className="main_pane">
								<PageWithHistory page={json.pages[props.match.params.index]} />
							</div>
							<Footer />
						</div>
					)
				  } />
				</Switch>
			)
			
			leftPane = (
				<Switch>
				  <Route exact path='/' render={ 
					(props) => (
						<div className="left_pane">
							{menu}			
						</div>
					)
				  } />
				  <Route path='/page/:index' render={ 
					(props) => (
						<div className="left_pane">
							{menu}
							<ArticlePagesListWithHistory colors="dark" pageTitles={pageTitles} />
						</div>
					)
				  } />
				</Switch>
			)
	  	}
	  	
		return (
		  <div className="App">
			{header}

			{leftPane}
			
		    {content}
			
		  </div>
		);
	  }
}

export default App;

