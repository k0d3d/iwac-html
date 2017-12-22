import React, { Component } from 'react';

export default class OurServices extends Component {
    render () {
        return (
            <div className='home-service-section'>
                <div className='container'>

                    <div className='col-md-9 col-md-offset-3 main-container'>
                        <div className='theme-title'>
                            <h6 id='benefits'>What you get.</h6>
                            <h2>Tons of features your fans and followers will love.</h2>
                            <p>Your goals are our business.</p>
                        </div>
					<ul className='clearfix row'>
                            <li className='col-md-6'>
                                <div>
                                    <i className='flaticon-png-mobile'></i>
                                    <h5><a href='service-v1.html' className='tran3s'>Mobile first, progressive web development.</a></h5>
                                    <p>
                                        Create beautiful mobile applications and responsive sites with the latest technologies.
								</p>
                                </div>
                            </li>
                            <li className='col-md-6'>
                                <div>
                                    <i className='flaticon-png-support'></i>
								<h5><a href='service-v1.html' className='tran3s'>Professional Support and Remote Assistance.</a></h5>
                                    <p>
                                        Call us when you have a headache. We are your dedicated support personel.
								</p>
                                </div>
                            </li>
                            <li className='col-md-6'>
                                <div>
                                    <i className='flaticon-png-media'></i>
                                    <h5><a href='service-v1.html' className='tran3s'>Tons of features. </a></h5>
                                    <p>We have amazing features packed in like a music player, ticket sales, store links.</p>
                                </div>
                            </li>
                            <li className='col-md-6'>
                                <div>
                                    <i className='flaticon-png-signal'></i>
                                    <h5><a href='service-v1.html' className='tran3s'>Network Redundancy and Security</a></h5>
                                    <p>We build hacker-proof secure sites and make scheduled data backups.</p>
                                </div>
                            </li>
                            <li className='col-md-6'></li>
                            <li className='col-md-6'>
                                <div>
                                    <i className='flaticon-png-thumbs'></i>
                                    <h5><a href='service-v1.html' className='tran3s'>Grow and scale your fans. </a></h5>
                                    <p>We can help grow your social media fanbase and followers. Bring people to you.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='col-xs-12 visible-xs'>
                        <div className='iphone-animated' style={{position: `relative`,left: `0px`,top: `0px`}}>
						<img src='images/mobile.gif' alt='Image' className='wow fadeIn' style={{visibility: `visible`, animationName: `fadeIn`, left: `0px`}} />
					</div>
                    </div>
				<div className='iphone-animated hidden-xs'>
                        <img src='images/mobile.gif' alt='Image' className='wow fadeIn' />
				</div>
                    </div>
		</div>            
        )
    }
}