import React, { Component } from 'react';
import classnames from 'classnames'


require('../js/fortumopay.js')
export default class PricingTable extends Component {

    constructor (props) {
        super(props)
        this.state = {
            tabActive: `one-year`,
            expBenefitsClass :  `isClosed`,
            expBenefitsText: `Expand`
        }
        this.expBenefits = false,
        
        this.state.packageBenefits = [
            `Download Store link`,
            `Upcoming Events List`,
            `Sell albums, single and tickets.`,
            `Music and Video Player.`,
            `File Sharing and Transfer.`,
            `Photo Gallery.`,
            `Anti-hacker Protection.`,
            `Data Backup.`,
            `Theming &amp; Customization Support.`,
            `Social Network Growth Hacking.`            
        ]
        
        this.handleClick  = this.handleClick.bind(this)
    }
    handleClick (isActive) {
        this.setState({
            tabActive: isActive
        })
        return false
    }
    toggleExpandedBenefits () {
        let isOpen = this.expBenefits = !this.expBenefits
        this.setState({
            expBenefitsClass: isOpen ? `isOpen` : `isClosed`,
            expBenefitsText: isOpen ? `Collapse` : `Expand`
        })
    }

    componentDidMount () {
        // var aScript = document.createElement('script');
        // aScript.type = 'text/javascript';
        // aScript.src = "https://assets.fortumo.com/fmp/fortumopay.js";
// <script src='https://assets.fortumo.com/fmp/fortumopay.js' type='text/javascript'></script>


        // document.head.appendChild(aScript);
        // aScript.onload = function () {
        //     console.log('fortumo loaded')
        // };        
    }

    render() {
        let dialogClassesOneYear = classnames('tab-pane fade in', { active: this.state.tabActive == `one-year` } )
        let dialogClassesOneTime = classnames('tab-pane fade in', { active: this.state.tabActive == `one-time` } )
        let packageBenefitsHTML = this.state.packageBenefits.map((v, key) => {
            return <li className={this.state.expBenefitsClass} key={key}><span className='icon tick'></span>{v}</li>
        })
        let expandText = this.state.expBenefitsText
        return (
            <section className='two-section-wrapper'>

			<div className='pricing-plan-one'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 col-xs-12 wow fadeInLeft'>
                                <div className='theme-title'>
                                        <h6 id='pricing'>Simple pricing</h6>
                                        <h2>
                                            Get your business going online.
                                    </h2>
                                        <p>
                                            Amazing packages wrapped in flat fees and shipped with measurable results. You can decide to pay for a mobile app, desktop site or both one-time or annually, whichever suits your business.
                                        <br /><i style={{fontSize: `10pt`}}>All plans come with a 14 business day cash refund<sub>*.</sub></i>
                                    </p>
                                </div>
                                <ul className='nav nav-tabs'>
                                    <li className={this.state.tabActive == `one-year`? `active` : ``}><button onClick={()=>this.handleClick(`one-year`)}>One year</button></li>
                                    <li className={this.state.tabActive == `one-time` ? `active` : ``}><button onClick={()=>this.handleClick(`one-time`)}>One time</button></li>
                                </ul>
                            </div>

                            <div className='col-md-6 col-xs-12 wow fadeInRight'>
                                <div className='tab-content'>
                                    <div id='one-time' className={dialogClassesOneTime}>
                                        <div className='clearfix'>
                                            <div className='float-left left-side'>
                                                <span><sub>₦</sub>50<sup>,000</sup></span>
                                                <h6>express.</h6>
                                                <a href='#'>+</a>
                                            </div>
                                            <div className='right-side float-left'>
                                                <h6>One-time,</h6>
                                                <h4>Limited Support package</h4>
                                                <ul>
                                                    <li>10GB Storage</li>
                                                    <li>All shinny modules &amp; features </li>
                                                    <li>Working hours support</li>
                                                    <li>Free updates for life.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div id='one-year' className={dialogClassesOneYear}>
                                                <div className='clearfix'>
                                                    <div className='float-left left-side'>
                                                        <span><sub>₦</sub>10<sup>,000</sup></span>
                                                        <h6>per month.</h6>
                                                        <a href='#'>+</a>
                                                    </div>
                                            <div className='right-side float-left'>
                                                        <h6>12 months contract,</h6>
                                                        <h4>Dedicated Support package</h4>
                                                        <ul>
                                                            <li>Unlimited Storage</li>
                                                            <li>All shinny modules &amp; features </li>
                                                            <li>Dedicated professional support.</li>
                                                            <li>Free updates for life.</li>
                                                        </ul>
                                                    </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                                <div className='col-md-12'>

                                    <div id='generic_price_table'>
                                        <section>
                                            <div className='container'>
                                                <div className='row'>
                                                    <div className='col-md-12'>
												<div className='price-heading clearfix'>
												</div>
											</div>
                                                </div>
                                            </div>
                                            <div className='container'>

                                                <div className='row'>
                                                    <div className='col-md-4'>

                                                        <div className='generic_content clearfix'>

                                                            <div className='generic_head_price clearfix'>

                                                                <div className='generic_head_content clearfix'>

                                                                    <div className='head_bg'></div>
                                                                            <div className='head'>
                                                                                <span>Starter</span>
                                                                            </div>

                                                                </div>

                                                                <div className='generic_price_tag clearfix'>
                                                                    <span className='price'>
                                                                        <span className='sign'>₦</span>
                                                                        <span className='currency'>0</span>
                                                                        <span className='cent'>.99</span>
                                                                        <span className='month'>/month</span>
                                                                    </span>
                                                                </div>

                                                            </div>

                                                            <div className='generic_feature_list'>
                                                                <ul>
                                                                    <li><span>5GB</span> Transfer Bandwidth</li>
                                                                    <li><span>1GB</span> Storage</li>
                                                                    <li><span>0</span> custom domain</li>
                                                                    <li><span>0</span> emails</li>
                                                                    <li><span>Online</span> Support</li>
                                                                    {packageBenefitsHTML}
                                                                </ul>
                                                            </div>
                                                                    

                                                            
                                                            <div className='generic_price_btn clearfix'>
                                                                        <a className='' href=''>Not available.</a>
                                                                    </div>
                                                                    

                                                        </div>
                                                                

                                                    </div>

                                                    <div className='col-md-4'>

                                                        
                                                        <div className='generic_content clearfix'>

                                                                    
                                                            <div className='generic_head_price clearfix'>

                                                                        
                                                                <div className='generic_head_content clearfix'>

                                                                            
                                                                    <div className='head_bg'></div>
                                                                            <div className='head'>
                                                                                <span>Express</span>
                                                                            </div>
                                                                            

                                                                </div>
                                                                        

                                                                
                                                                <div className='generic_price_tag clearfix'>
                                                                            <span className='price'>
                                                                                <span className='sign'>₦</span>
                                                                                <span className='currency'>50,000</span>
                                                                                <span className='cent'>.00</span>
                                                                                <span className='month'>/once</span>
                                                                            </span>
                                                                        </div>
                                                                        

                                                            </div>
                                                                

                                                            
                                                            <div className='generic_feature_list'>
                                                                <ul>
                                                                    <li><span>50GB</span> Bandwidth</li>
                                                                    <li><span>10GB</span> Storage</li>
                                                                    <li><span>1</span> free domain</li>
                                                                    <li><span>Unlimited</span> emails</li>
                                                                    <li><span>Limited</span> Professional Support</li>
                                                                    {packageBenefitsHTML}
                                                                </ul>
                                                            </div>
                                                                    

                                                            
                                                            <a id="fmp-button" href="#" rel="4250516fbef88e5140f84c026ad2b50d">
                                                                <img src="https://assets.fortumo.com/fmp/fortumopay_150x50_red.png" width="150" height="50" alt="Mobile Payments by Fortumo" />
                                                            </a>                                                                        
                                                            <div className='generic_price_btn clearfix'>
                                                                <a className='' href='https://paystack.com/pay/ixit-one-time-mobile-development'>
                                                                    <i className="fa fa-credit-card fa-1x" aria-hidden="true"></i>
                                                                    &nbsp;Pay Now                                                                
                                                                </a>
                                                            </div>
                                                                    

                                                        </div>
                                                                

                                                    </div>
                                                    <div className='col-md-4'>

                                                                
                                                        <div className='generic_content clearfix'>

                                                                    
                                                            <div className='generic_head_price clearfix'>

                                                                        
                                                                <div className='generic_head_content clearfix'>

                                                                            
                                                                    <div className='head_bg'></div>
                                                                            <div className='head'>
                                                                                <span>Contract</span>
                                                                            </div>
                                                                            

                                                                </div>
                                                                                                                               
                                                                <div className='generic_price_tag clearfix'>
                                                                            <span className='price'>
                                                                                <span className='sign'>₦</span>
                                                                                <span className='currency'>10,000</span>
                                                                                <span className='cent'>.00</span>
                                                                                <span className='month'>/month</span>
                                                                            </span>
                                                                </div>
                                                                        

                                                            </div>
                                                            
                                                            <div className='generic_feature_list'>
                                                                <ul>
                                                                    <li><span>100GB</span> Bandwidth</li>
                                                                    <li><span>Unlimited</span> Storage</li>
                                                                    <li><span>1</span> free domain</li>
                                                                    <li><span>Unlimited</span> emails</li>
                                                                    <li><span>Dedicated</span> Professional Support</li>
                                                                    {packageBenefitsHTML}
                                                                </ul>
                                                            </div>
                                                            <a id="fmp-button" href="#" rel="3b47bfb783d2762e474fa2dd35d256ee"><img src="https://assets.fortumo.com/fmp/fortumopay_150x50_red.png" width="150" height="50" alt="Mobile Payments by Fortumo"  /></a>        
                                                            <div className='generic_price_btn clearfix'>
                                                            <a className='' href='https://paystack.com/pay/ixit-monthly-mobile-development'>
                                                                <i className="fa fa-credit-card fa-1x" aria-hidden="true"></i>
                                                                &nbsp;Pay Now
                                                            </a>
                                                            </div>
                                                                    
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className='row'>
                                                        <div className="col-md-12 col-xs-12">
                                                            <p className="cta-see-features mt"><button onClick={() => this.toggleExpandedBenefits()} className="btn btn-outline">{expandText}</button></p>
                                                        </div>
                                                </div>

                                            </div>
                                        </section>
                                        <footer>
                                        </footer>
                                    </div>

                                </div>

                        </div>
                    </div>
			</div>
		</section>

        )
    }
}