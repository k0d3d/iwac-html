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

        // require('../packages/WOW-master/dist/wow.min.js')

        require('../packages/jquery.appear.js')

        require('../packages/fancybox/dist/jquery.fancybox.min.js')

        require('../packages/jquery.ripples-master/dist/jquery.ripples-min.js')

        require('../js/theme.js')
        jQuery(document).on('ready', function () {
            (function ($) {
                removePlaceholder();
                mixitupGallery();
                testimonialSlider();
                portfolioSlider();
                partnersLogo();
                CounterNumberChanger();
                scrollToTop();
                contactFormValidation();
                closeSuccessAlert();
                themeAccrodion();
                priceRanger();
                productValue();
                productSlider();
                innerBanner();
                masonaryBlog()
            })(jQuery);
        });        
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
