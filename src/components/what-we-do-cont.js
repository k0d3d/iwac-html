import React, { Component } from 'react';

import stopWatchImg from '../images/stopwatch.png'
import smartPhoneImg from '../images/smartphone.png'
import supportImg from '../images/support.png'

export default class WhatWeDoCont extends Component {
    render () {
        return (
            <div className='what-we-do-styletwo'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 col-sm-6 col-xs-12'>
                            <div className='single-block'>
                                <div className='icon'>
                                    <img src={smartPhoneImg} alt='smartphone' />
							</div>
                                    <h6>All the slick features and styling</h6>
                                    <p>that make the most popular social applications work. </p>
                                </div>
					</div>
					<div className='col-md-4 col-sm-6 col-xs-12'>
                                <div className='single-block'>
                                    <div className='icon'>
                                        <img src={stopWatchImg} alt='stopwatch' />
							</div>
                                        <h6>Pay attention to what matters</h6>
                                        <p>like your music, your videos, your fans and your business.</p>
                                    </div>
					</div>
					<div className='col-md-4 hidden-sm col-xs-12'>
                                    <div className='single-block'>
                                        <div className='icon'>
                                            <img src={supportImg} alt='support' />
							</div>
                                            <h6>World-class Support &amp; Monitoring</h6>
                                            <p>Get real-time response when you need it. </p>
                                        </div>
					</div>
				</div>
			</div>
		</div>

        )
    }
}