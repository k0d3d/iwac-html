import React, { Component } from 'react';

export default class YourBenefits extends Component {
    render() {
        return (
            <section className='home-blog-section'>
                <div className='container'>
                    <div className='theme-title text-center'>
                        <h6>Stylish Everything </h6>
                        <h2>Beautiful layouts and easy to use features.</h2>
                        <p>
                            Because you are a band, label, studio, festival, dj or singer, you will get a website or app packed with carefully selected and crafted features.
                        </p>
                    </div>
				<div className='row'>
                        <div className='col-md-12 col-xs-12'>
                            <p>
                                <img src='images/bg-white-section-mod.jpg' alt='' />
						</p>
                                <div className='single-blog color-one'></div> 
					</div> 

				</div>
				<div className='row' style={{marginBottom: `120px`}}>
                            <div className='col-md-12 col-xs-12'>
                                <p className='cta-see-features'>
                                    <a className='btn btn-outline' href='/features.php'>See all features available.</a>
                                </p>
                            </div>
                        </div>
                    </div> 
		</section> 

        )
    }
}