import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className='bg-two'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3 col-sm-6 col-xs-12'>
                            <div className='footer-logo'>
							<div className='logo'><a href='index.html' style={{color: `black`}}>iXit</a></div>
                                    <h5><a href='#' className='tran3s'>support@ixit.com.ng</a></h5>
                                    <h6 className='p-color'>202. 277. 3894</h6>
						</div>
                            </div>
                            <div className='col-md-3 col-sm-6 col-xs-12 footer-list'>
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><a href='#benefits' className='tran3s'>Benefits</a></li>
                                    <li><a href='#pricing' className='tran3s'>Pricing</a></li>
                                    <li><a href='#hiring' className='tran3s'>We're Hiring</a></li>
                                    <li><a href='#' className='tran3s'>Urgent Support</a></li>
                                </ul>
                            </div>
                            <div className='col-md-3 col-sm-6 col-xs-12 footer-list'>
                                <h4>iXit Internationally</h4>
                                <ul>
                                    <li><a href='#' className='tran3s'>Nigeria</a></li>
                                    <li><a href='#' className='tran3s'>Ghana</a></li>
                                    <li><a href='#' className='tran3s'>South Africa</a></li>
                                    <li><a href='#' className='tran3s'>Taiwan</a></li>
                                    <li><a href='#' className='tran3s'>China</a></li>
                                </ul>
                            </div>

                            <div className='col-md-3 col-sm-6 col-xs-12 footer-subscribe'>
                                <h4>Subscribe Us</h4>
                                <form action='#'>
                                    <input type='text' placeholder='Enter your mail' />
                                </form>
                                    <ul>
                                        <li><a href='' className='tran3s'><i className='fa fa-facebook' aria-hidden='true'></i></a></li>
                                        <li><a href='' className='tran3s'><i className='fa fa-twitter' aria-hidden='true'></i></a></li>
                                        <li><a href='' className='tran3s'><i className='fa fa-dribbble' aria-hidden='true'></i></a></li>
                                        <li><a href='' className='tran3s'><i className='fa fa-google-plus' aria-hidden='true'></i></a></li>
                                    </ul>
					</div>
                            </div>

				<div className='bottom-footer clearfix'>
                                <p className='float-left'>&copy; 2017 <a href='#' className='tran3s p-color'>iXIt</a>. All rights reserved</p>
                            </div>
                        </div>
		</footer>
        )
    }
}