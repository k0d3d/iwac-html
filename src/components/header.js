
import React, {Component} from 'react';
import NavMenu from './menu'



class HeaderHtml extends Component {
    render () {
        return (
		<header className='theme-menu-wrapper menu-style-three'>
			<div className='header-wrapper'>
				<div className='top-header'>
					<div className='container'>
						<div className='float-right'>
							<p>Contact Us <a href='#' className='tran3s'>services@i-x.it</a></p>
							<ul>
								<li><a href='https://facebook.com/ixitme' className='tran3s'><i className='fa fa-facebook' aria-hidden='true'></i></a></li>
								<li><a href='' className='tran3s'><i className='fa fa-twitter' aria-hidden='true'></i></a></li>
								<li><a href='' className='tran3s'><i className='fa fa-dribbble' aria-hidden='true'></i></a></li>
								<li><a href='' className='tran3s'><i className='fa fa-google-plus' aria-hidden='true'></i></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className='container'>
					<div className='logo float-left '><a href='index.html'>iXit</a></div>
                    <NavMenu></NavMenu>
				</div>
				
			</div>
		</header>
        )
    }
}

export default HeaderHtml