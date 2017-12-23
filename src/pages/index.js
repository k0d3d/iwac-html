import React, {Component} from 'react';
import SvgBanner from '../components/svg-banner'
import HeaderHtml from '../components/header'
import WhatWeDo from '../components/what-we-do'
import WhatWeDoCont from '../components/what-we-do-cont'
import OurServices from '../components/our-services'
import YourBenefits from '../components/your-benefits'
import PricingTable from '../components/pricing'
import ClientPartners from '../components/client-partners'
import Footer from '../components/footer'

import $ from 'jquery';
if (typeof window === 'undefined') {
    global.window = {}
}
window.jQuery = $

let jQuery = jQuery || $



class Home extends Component {
    componentDidMount () {
        require('../packages/bootstrap-mega-menu/js/menu.js')
        require('../js/theme.js')
        
    }
    render () {
        return (
            <div> 
                <HeaderHtml></HeaderHtml>
                <SvgBanner></SvgBanner>
                <WhatWeDo />
                <WhatWeDoCont />
                <OurServices />
                <YourBenefits />
                <PricingTable />
                <ClientPartners />
                <Footer />
            </div>
        )
    }
}
    

export default Home
