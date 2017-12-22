import React, { Component } from 'react';


import $ from 'jquery'

import OwlCarousel from 'react-owl-carousel';


import logoImg1 from '../images/logo/1.jpg'
import logoImg2 from '../images/logo/2.jpg'
import logoImg3 from '../images/logo/3.jpg'
import logoImg4 from '../images/logo/4.jpg'
import logoImg5 from '../images/logo/5.jpg'
import logoImg6 from '../images/logo/6.jpg'
import logoImg7 from '../images/logo/7.jpg'
import logoImg8 from '../images/logo/8.jpg'
import logoImg9 from '../images/logo/9.jpg'
import logoImg10 from '../images/logo/10.jpg'
import logoImg11 from '../images/logo/11.jpg'
import logoImg12 from '../images/logo/12.jpg'
import logoImg13 from '../images/logo/13.jpg'
import logoImg14 from '../images/logo/14.jpg'
import logoImg15 from '../images/logo/15.jpg'
import logoImg16 from '../images/logo/16.jpg'
import logoImg17 from '../images/logo/17.jpg'
import logoImg18 from '../images/logo/18.jpg'
import logoImg19 from '../images/logo/19.jpg'
import logoImg20 from '../images/logo/20.jpg'
import logoImg21 from '../images/logo/21.jpg'
import logoImg22 from '../images/logo/22.jpg'
import logoImg23 from '../images/logo/23.jpg'
import logoImg24 from '../images/logo/24.jpg'
import logoImg25 from '../images/logo/25.jpg'
import logoImg26 from '../images/logo/26.jpg'
import logoImg27 from '../images/logo/27.jpg'
import logoImg28 from '../images/logo/28.jpg'
import logoImg29 from '../images/logo/29.jpg'


export default class ClientPartners extends Component {
	constructor(props) {
		super(props)
		this.state = {
			options: {
				loop: true,
				nav: false,
				dots: false,
				autoplay: true,
				autoplayTimeout: 3000,
				autoplaySpeed: 1600,
				lazyLoad: true,
				// singleItem: true,
				responsive: {
					0: {
						items: 2
					},
					551: {
						items: 3
					},
					768: {
						items: 3
					},
					992: {
						items: 5
					}
				},
			},
			items: [
				<div className='item' key={1}><img src={logoImg1} alt='logo' /></div>,
				<div className='item' key={2}><img src={logoImg2} alt='logo' /></div>,
				<div className='item' key={3}><img src={logoImg3} alt='logo' /></div>,
				<div className='item' key={4}><img src={logoImg4} alt='logo' /></div>,
				<div className='item' key={5}><img src={logoImg5} alt='logo' /></div>,
				<div className='item' key={6}><img src={logoImg6} alt='logo' /></div>,
				<div className='item' key={7}><img src={logoImg7} alt='logo' /></div>,
				<div className='item' key={8}><img src={logoImg8} alt='logo' /></div>,
				<div className='item' key={9}><img src={logoImg9} alt='logo' /></div>,
				<div className='item' key={10}><img src={logoImg10} alt='logo' /></div>,
				<div className='item' key={11}><img src={logoImg11} alt='logo' /></div>,
				<div className='item' key={12}><img src={logoImg12} alt='logo' /></div>,
				<div className='item' key={13}><img src={logoImg13} alt='logo' /></div>,
				<div className='item' key={14}><img src={logoImg14} alt='logo' /></div>,
				<div className='item' key={13}><img src={logoImg13} alt='logo' /></div>,
				<div className='item' key={15}><img src={logoImg15} alt='logo' /></div>,
				<div className='item' key={16}><img src={logoImg16} alt='logo' /></div>,
				<div className='item' key={17}><img src={logoImg17} alt='logo' /></div>,
				<div className='item' key={18}><img src={logoImg18} alt='logo' /></div>,
				<div className='item' key={19}><img src={logoImg19} alt='logo' /></div>,
				<div className='item' key={20}><img src={logoImg20} alt='logo' /></div>,
				<div className='item' key={21}><img src={logoImg21} alt='logo' /></div>,
				<div className='item' key={22}><img src={logoImg22} alt='logo' /></div>,
				<div className='item' key={23}><img src={logoImg23} alt='logo' /></div>,
				<div className='item' key={24}><img src={logoImg24} alt='logo' /></div>,
				<div className='item' key={25}><img src={logoImg25} alt='logo' /></div>,
				<div className='item' key={26}><img src={logoImg26} alt='logo' /></div>,
				<div className='item' key={27}><img src={logoImg27} alt='logo' /></div>,
				<div className='item' key={28}><img src={logoImg28} alt='logo' /></div>,
				<div className='item' key={29}><img src={logoImg29} alt='logo' /></div>				
			]
		}
	}
	componentDidMount() {
		// let t = this
		$(document).ready(function () {
			// partnersLogo()
		})		
	}
    render() {
        return (
		<div className='partent-logo-section'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6 col-xs-12 wow fadeInLeft'>
						<div className='theme-title'>
							<h6>Previous Clients</h6>
							<h2>
								All Outstanding results.
							</h2>
							<p>
								Over the last 10 years, we have helped and guided small and medium scale organisations to achieve outstanding results with their websites and tech needs.
							</p>
						</div>
					</div>
					<div className='col-md-6 col-xs-12 wow fadeInLeft'>
						<div className='partner-logo'>
							<OwlCarousel
								ref={inst => this.slider = inst}
								className="owl-theme"
								{...this.state.options}
							>
								{this.state.items.slice(0, 14)}
							</OwlCarousel>

						</div>
						<div className='partner-logo'>
								<OwlCarousel
									ref={inst => this.slider = inst}
									className="owl-theme"
									{...this.state.options}
								>
									{this.state.items.slice(13)}
								</OwlCarousel>
						</div>
					</div>
				</div>
			</div>
		</div>
        )
    }
}