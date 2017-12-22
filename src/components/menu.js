

import React, {Component} from 'react';

class NavMenu extends Component {
    render () {
        return (
            <nav className='theme-main-menu float-right navbar' id='mega-menu-wrapper'>
				<div className='navbar-header'>
					<button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar-collapse-1' aria-expanded='false'>
				       <span className='sr-only'>Toggle navigation</span>
				       <span className='icon-bar'></span>
				       <span className='icon-bar'></span>
				       <span className='icon-bar'></span>
				     </button>
				</div>
				<div className='collapse navbar-collapse' id='navbar-collapse-1'>
					<ul className='nav'>
						<li className='dropdown-holder menu-list active'><a href='/' className='tran3s'>Cloud Hosting</a>
						</li>
						<li className='dropdown-holder menu-list'><a href='#benefits' className='tran3s'>Benefits</a>
						</li>
						<li className='dropdown-holder menu-list'><a href='#pricing' className='tran3s'>Pricing</a></li>
						<li className='dropdown-holder menu-list'><a href='#' className='tran3s'>Were Hiring</a>
						</li>
					</ul>
				</div>
			</nav>            
            )
    }
}

export default NavMenu
