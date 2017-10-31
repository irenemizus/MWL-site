import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import queryString from 'query-string';
import { Link, withRouter } from 'react-router-dom';

import './Page.css';

import License from './License'

class ArticleAuthor extends Component {
	render() {		
		return (
			<span>{renderHTML(this.props.author)}</span>
		);
	}
}


class Article extends Component {
	render() {		
		let authorsList = [];
		let key = 0;
		for (let i in this.props.article.authors) {
			authorsList.push(
				<ArticleAuthor key={key++} author={this.props.article.authors[i]} />
			);
			
			if (i < this.props.article.authors.length - 1) {
				authorsList.push(
					<span key={key++}>, </span>
				)
			}
		}
		
		let journal_title;
		if (this.props.article.journal) {
		    journal_title = [
		        <span key={key++} className="article_journal_title">{renderHTML(this.props.article.journal)}</span>,
		        <span key={key++}>, </span>
		    ]
		}
		
		let language;
		if (this.props.article.url && this.props.article.url_trans && this.props.article.language) {
			language = [
				<span key={key++} className="article_span_space" />,
				<span key={key++} className="article_language"><Link to={this.props.location.pathname + '?showlicense=true&url=' + this.props.article.url}>[{renderHTML(this.props.article.language)}]</Link></span>
			]
		}
		else if (this.props.article.language) {
			language = [
				<span key={key++} className="article_span_space" />,
				<span key={key++} className="article_language">[{renderHTML(this.props.article.language)}]</span>
			]
		};
		
		let translation;
		if (this.props.article.url && this.props.article.url_trans && this.props.article.language_trans) {
			translation = [
				<br key={key++} />,
				<span key={key++} className="article_journal_title">{renderHTML(this.props.article.journal_trans)}</span>,
				<span key={key++}>, </span>,
				<span key={key++} className="article_span_space" />,
				<span key={key++} className="article_data">{renderHTML(this.props.article.data_trans)}</span>,
				<span key={key++} className="article_span_space" />,
				<span key={key++}>({renderHTML(this.props.article.year_trans)})</span>,
				<span key={key++} className="article_span_space" />,
				<span key={key++} className="article_language"><Link to={this.props.location.pathname + '?showlicense=true&url=' + this.props.article.url_trans}>[{renderHTML(this.props.article.language_trans)}]</Link></span>
				]
		}
		else if (this.props.article.language_trans) {
		translation = [
				<br key={key++} />,
				<span key={key++} className="article_journal_title">{renderHTML(this.props.article.journal_trans)}</span>,
				<span key={key++}>, </span>,
				<span key={key++} className="article_span_space" />,
				<span key={key++} className="article_data">{renderHTML(this.props.article.data_trans)}</span>,
				<span key={key++} className="article_span_space" />,
				<span key={key++}>({renderHTML(this.props.article.year_trans)})</span>,
				<span key={key++} className="article_span_space" />,
				<span key={key++} className="article_language">[{renderHTML(this.props.article.language_trans)}]</span>
				]
		};
		
		let article_title;
		if (this.props.article.url) {
			article_title = 
				<div className="article_title">
					<Link to={this.props.location.pathname + '?showlicense=true&url=' + this.props.article.url} >{renderHTML(this.props.article.title)}</Link>
				</div>;
		}
		else if (this.props.article.url_trans) {
			article_title = 
				<div className="article_title">
					<Link to={this.props.location.pathname + '?showlicense=true&url=' + this.props.article.url_trans}>{renderHTML(this.props.article.title)}</Link>
				</div>;
		}
		else {
			article_title = 
				<div className="article_title">
					{renderHTML(this.props.article.title)}
				</div>;
		}
		
		return (
			<li className="article_item">
				<span className="article_authors_list">{authorsList}</span>
				<br />
				{article_title}
				{journal_title}
				<span className="article_data">{renderHTML(this.props.article.data)}</span>
				<span className="article_span_space" />
				<span>({renderHTML(this.props.article.year)})</span>
				{language}
				{translation}
			</li>
		);
	}
}

var ArticleWithHistory = withRouter(Article);

class Paragraph extends Component {
	render() {
		let articlesList = [];
		for (let i in this.props.paragraph.articles) {
			articlesList.push(
				<ArticleWithHistory key={i} article={this.props.paragraph.articles[i]} />
			)
		}
		
		return (
			<div>
				<h2>{renderHTML(this.props.paragraph.title)}</h2>
				<ol>
					 {articlesList}
				</ol>
			</div>
		);
	}
}

class Page extends Component {
	render() {
		window.scrollTo(0, 0);
  		const { location } = this.props;
		const search = location.search;
		//const params = new URLSearchParams(search);
		const params = queryString.parse(search);
		
		this.state = {	
			showlicense: params['showlicense'],
			url: params['url']
		}

		let paragraphsList = [];
		for (let i in this.props.page.paragraphs) {
			paragraphsList.push(
				<Paragraph key={i} paragraph={this.props.page.paragraphs[i]}  />
			)
		}
		
		let license;
			if (this.state.showlicense === 'true') {
				license = <License url={this.state.url} backUrl={location.pathname} page={this.props.page} />;
			}
			
		return (
			<div className="page">
				<div>
					{license}
					<h1>{renderHTML(this.props.page.title)}</h1>
					 {paragraphsList}
				</div>
			</div>
		);
	}
}

export default Page;