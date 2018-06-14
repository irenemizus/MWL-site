import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';

export default class IndexPage extends Component {
  	render() {
		return (
			<table>
				<tr>
					<td>	
						<h1>Main directions of activity:</h1>
  						<ul><ol type="1">
  							<li>
  								Development of methods and technique of microwave spectroscopy in millimeter and submillimeter wave range.
  								<div><a href="devel.html">Read more...</a></div>
  							</li>
  							<li>
  								Studies of the molecular spectra by the developed experimental and theoretical methods.
  								<div><a href="stud.html">Read more...</a></div>
  							</li>
  							<li>
  								Studies of manifestations of molecular collisional interactions through lineshape, broadening, shifting and coupling of spectral lines.
  								<div><a href="interact.html">Read more...</a></div>
  							</li>
  						</ol></ul>
  					</td>
  				</tr>
  				<tr>
    				<td>
    					<h1>We  can supply  spectroscopic data and perform  equipment testing for planetary and interstellar remote sensing by millimeter and submillimeter waves</h1>
    				</td>
  				</tr>
  			</table>
		);
  	}
}