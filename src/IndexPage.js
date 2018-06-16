import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';

import './ArticlePagesList.css';
import './Page.css';

export default class IndexPage extends Component {
  	render() {
		return (
			<table>
				<tr>
					<td>
						<div  className="page">	
							<h1>Main directions of activity:</h1>
  							<div className="article_title"><ul><ol type="1">
  								<li>
  									<a href="devel.html">Development of methods and technique</a> of microwave spectroscopy in millimeter and submillimeter wave range.
  								</li>
  								<li>
  									<a href="stud.html">Studies of the molecular spectra</a> by the developed experimental and theoretical methods.
  								</li>
  								<li>
  									<a href="interact.html">Studies of manifestations of molecular collisional interactions</a> through lineshape, broadening, shifting and coupling of spectral lines.
  								</li>
  							</ol></ul></div>
  						</div>
  					</td>
  				</tr>
  				<tr>
    				<td>
    					<div  className="page">
    						<h1>We  can supply  spectroscopic data and perform  equipment testing for planetary and interstellar remote sensing by millimeter and submillimeter waves</h1>
    					</div>
    				</td>
  				</tr>
  			</table>
		);
  	}
}