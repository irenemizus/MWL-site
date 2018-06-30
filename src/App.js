import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './App.css';

import ArticlePagesList from './ArticlePagesList';
import StaffList from './StaffList';
import StaffCategory from './StaffCategory';
import IndexPage from './IndexPage';
import Page from './Page';
import AssociatePage from './AssociatePage';
import PageButton from './PageButton';
import OneFigPage from './OneFigPage';


const DataState = {
	LOADING: 1,
	SUCCESS: 2,
	FAIL: 3
};

var PageWithHistory = withRouter(Page);
var ArticlePagesListWithHistory = withRouter(ArticlePagesList);
var StaffListWithHistory = withRouter(StaffList);
var StaffCategoryWithHistory = withRouter(StaffCategory);
var IndexWithHistory = withRouter(IndexPage);
var AssociatePageWithHistory = withRouter(AssociatePage);
var OneFigPageWithHistory = withRouter(OneFigPage);

class Menu extends Component {
	render() {
		var line = (
			<svg width="20" height="7">
  				<rect width="15" height="4" className="menu_item" style={{"strokeWidth": "0"}} />
  					-
			</svg>
		)

		var menu_var = (
			<Switch>
				<Route path='/list' render={ 
					(props) => (
						<div className="App-menu">
							<div className="menu_item"><Link to={"/"}>{line}Main directions of activity</Link></div>
							<div className="menu_item"><Link to={"/people"}>{line}People</Link></div>
							<div className="menu_item"><a href="/instrum.html">{line}Instruments</a></div>
							<div className="menu_item_active"><span>{line}List of publications</span></div>					
							<div className="menu_item"><a href="/about.html">{line}About</a></div>
							<div className="menu_item"><a href="/interest.html">{line}Интересующимся</a></div>
						</div>
					)
				} />
				<Route path='/people' render={ 
					(props) => (
						<div className="App-menu">
							<div className="menu_item"><Link to={"/"}>{line}Main directions of activity</Link></div>
							<div className="menu_item_active"><span>{line}People</span></div>
							<div className="menu_item"><a href="/instrum.html">{line}Instruments</a></div>
							<div className="menu_item"><Link to={"/list"}>{line}List of publications</Link></div>		
							<div className="menu_item"><a href="/about.html">{line}About</a></div>
							<div className="menu_item"><a href="/interest.html">{line}Интересующимся</a></div>
						</div>
					)
				} />
				<Route path='/' render={ 
					(props) => (
						<div className="App-menu">
							<div className="menu_item_active"><span>{line}Main directions of activity</span></div>
							<div className="menu_item"><Link to={"/people"}>{line}People</Link></div>
							<div className="menu_item"><a href="/instrum.html">{line}Instruments</a></div>
							<div className="menu_item"><Link to={"/list"}>{line}List of publications</Link></div>		
							<div className="menu_item"><a href="/about.html">{line}About</a></div>
							<div className="menu_item"><a href="/interest.html">{line}Интересующимся</a></div>
						</div>
					)
				} />
			</Switch>
		)
	
		return (
			<div>{menu_var}</div>
		);
	}
}

class Footer extends Component {
	render() {
		var footer_var = (
			<Switch>
				<Route exact path='/' render={ 
					(props) => (
						<div className="App-footer">
			    			<img style={{"width": "100vw", "height": "13px"}} src="img/line1.jpg" alt=''/>
							<div className="contacts">
								<a href="http://www.ipfran.ru" target="_blank" rel="noopener noreferrer">
									Institute of Applied Physics of the Russian Academy of Sciences</a><br />
									contact <a href="mailto:ireneb86@appl.sci-nnov.ru">webmaster</a><br />
							</div>
							<div className="contacts">
								Last update 28.06.18
							</div>
						</div>
					)
				} />
				<Route path='/' render={ 
					(props) => (
						<div className="App-footer">
			    			<img style={{"width": "100vw", "height": "13px"}} src="img/line1.jpg" alt=''/>
							<div className="contacts">
								<a href="http://www.ipfran.ru" target="_blank" rel="noopener noreferrer">
									Institute of Applied Physics of the Russian Academy of Sciences</a><br />
									contact <a href="mailto:ireneb86@appl.sci-nnov.ru">webmaster</a><br />
							</div>
						</div>
					)
				} />
			</Switch>
		)

		return (
			<div>{footer_var}</div>
		);
	}
}

class StaffCatButtons extends Component {
  	render() {
    	let categoryButtons = [];
    	for (let i in this.props.staff) {
    		let buttonView;
    		let prefix = '/people/';
    		
    		if (this.props.location.pathname === prefix + this.props.categoryId && i === this.props.categoryId) {
   				buttonView = <PageButton active={true} key={i} index={i} title={this.props.staff[i].title} prefix={prefix}/>;
   			} else {    		
   				buttonView = <PageButton colors={this.props.colors} key={i} index={i} title={this.props.staff[i].title} prefix={prefix}/>;
    		}		 
    		
    		categoryButtons.push(buttonView);
    	}

		return (
			<div className="article_pages_list">
				{categoryButtons}
			</div>
		);
  	}
}

class MainDirButtons extends Component {
  	render() {
    	let directionsButtons = [];
    	for (let i in this.props.dir) {
    		let buttonView;
    		let prefix = '/';
    		
    		if (this.props.dir[i].link_from === "IndexPage") {
    			if (this.props.location.pathname === prefix + this.props.url && i === this.props.url) {
   					buttonView = <PageButton active={true} key={i} index={i} title={this.props.dir[i].short_title} prefix={prefix}/>;
   				} else {    		
   					buttonView = <PageButton colors={this.props.colors} key={i} index={i} title={this.props.dir[i].short_title} prefix={prefix}/>;
 	   			}		 
    		
    			directionsButtons.push(buttonView);
    		}
    	}

		return (
			<div className="article_pages_list">
				{directionsButtons}
			</div>
		);
  	}
}


var StaffCatButtonsWithHistory = withRouter(StaffCatButtons);
var MainDirButtonsWithHistory = withRouter(MainDirButtons);

class App extends Component {
	constructor() {
		super();
		
		this.state = {
			dataState: DataState.LOADING,
			dataStatePeople: DataState.LOADING,
			dataStateOneFigPage: DataState.LOADING,
			json: null,
			jsonPeople: null,
			jsonOneFigPage: null
		};
		
		let app = this;
    
        Promise.all([
    		axios.get('/papers_list.json'),
    		axios.get('/people_list.json'),
    		axios.get('/one_fig_template.json')
    	])
			.then(([papersResp, peopleResp, oneFigPageResp]) => {
	  
			    app.setState({
					dataState: DataState.SUCCESS,
					dataStatePeople: DataState.SUCCESS,
					dataStateOneFigPage: DataState.SUCCESS,
					json: papersResp.data,
					jsonPeople: peopleResp.data,
					jsonOneFigPage:oneFigPageResp.data
	    		});
	    	
	  		})
	  		.catch(([error, errorPeople, errorOneFigPage]) => {
				console.log(error);
				console.log(errorPeople);
				console.log(errorOneFigPage);

	    		app.setState({
	    			dataState: DataState.FAIL,
	    			dataStatePeople: DataState.FAIL,
	    			dataStateOneFigPage: DataState.FAIL,
	    			json: null,
	    			jsonPeople: null, 
	    			jsonOneFigPage: null,
	    			error: {
	    				code: error.papersResp.status,
	    				text: error.papersResp.statusText
	    			},
	    			errorPeople: {
	    				code: errorPeople.peopleResp.status,
	    				text: errorPeople.peopleResp.statusText
	    			},
	    			errorOneFigPage: {
	    				code: errorOneFigPage.oneFigPageResp.status,
	    				text: errorOneFigPage.oneFigPageResp.statusText
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
			const jsonPeople = this.state.jsonPeople;
			const jsonOneFigPage = this.state.jsonOneFigPage;
	
			let pageTitles = Object.keys(json.pages).sort();
			
			content = (
				<Switch>
				  <Route exact path='/list' render={ 
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
				  <Route path='/list/:index' render={ 
					(props) => (
						<div>
							<div className="main_pane">
								<PageWithHistory page={json.pages[props.match.params.index]} />
							</div>
							<Footer />
						</div>
					)
				  } />
				  <Route exact path='/people' render={ 
					(props) => (
						<div>
							<div className="main_pane">
								<StaffListWithHistory colors="light" staff={jsonPeople.category} />
							</div>
							<div style={{"position":"fixed", "bottom": "0"}}>
								<Footer />
							</div>
						</div>
					)
				  } />
				  <Route path='/people/:category/:id' render={ 
					(props) => (
						<div>
							<div className="main_pane">
								<AssociatePageWithHistory associate={jsonPeople.category[props.match.params.category].staff[props.match.params.id]} category={props.match.params.category} page_id={props.match.params.id} data={json}/>
							</div>
							<div style={{"position":"fixed", "bottom": "0"}}>
								<Footer />
							</div>
						</div>
					)
				  } />
				  <Route path='/people/:category' render={ 
					(props) => (
						<div>
							<div className="main_pane">
								<StaffCategoryWithHistory colors="light" categoryId={props.match.params.category} category={jsonPeople.category[props.match.params.category]} />
							</div>
							<div style={{"position":"fixed", "bottom": "0"}}>
								<Footer />
							</div>
						</div>
					)
				  } />
				  <Route exact path='/' render={ 
					(props) => (
						<div>
							<div className="main_pane">
								<IndexWithHistory dirs={jsonOneFigPage.url}/>
							</div>
							<div style={{"position":"fixed", "bottom": "0"}}>
								<Footer />
							</div>
						</div>
					)
				  } />
				  <Route path='/:ofpage' render={ 
					(props) => (
						<div>
							<div className="main_pane">
								<OneFigPageWithHistory ofpage={jsonOneFigPage.url[props.match.params.ofpage]}/>
							</div>
							<div style={{"position":"fixed", "bottom": "0"}}>
								<Footer />
							</div>
						</div>
					)
				  } />
				</Switch>
			)
			
			leftPane = (
				<Switch>
				  <Route exact path='/list' render={ 
					(props) => (
						<div className="left_pane">
							<Menu />			
						</div>
					)
				  } />
				  <Route path='/list/:index' render={ 
					(props) => (
						<div className="left_pane">
							<Menu />
							<ArticlePagesListWithHistory colors="dark" pageTitles={pageTitles} />
						</div>
					)
				  } />
				  <Route exact path='/people' render={ 
					(props) => (
						<div className="left_pane">
							<Menu />			
						</div>
					)
				  } />
				  <Route path='/people/:category/:id' render={ 
					(props) => (
						<div className="left_pane">
							<Menu />
							<StaffCatButtonsWithHistory colors="dark" staff={jsonPeople.category} />
						</div>
					)
				  } />
				  <Route path='/people/:category' render={ 
					(props) => (
						<div className="left_pane">
							<Menu />
							<StaffCatButtonsWithHistory colors="dark" staff={jsonPeople.category} categoryId={props.match.params.category}/>
						</div>
					)
				  } />
				  <Route exact path='/' render={ 
					(props) => (
						<div className="left_pane">
							<Menu />			
						</div>
					)
				  } />
				  <Route path='/:ofpage' render={ 
					(props) => (
						<div className="left_pane">
							<Menu />
							<MainDirButtonsWithHistory colors="dark" dir={jsonOneFigPage.url} url={props.match.params.ofpage}/>			
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

