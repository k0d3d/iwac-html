import React, {Component} from 'react';
import HeaderHtml from '../components/header'
import Banner from '../components/index-banner'
import WhatWeDo from '../components/what-we-do'
import WhatWeDoCont from '../components/what-we-do-cont'
import OurServices from '../components/our-services'
import YourBenefits from '../components/your-benefits'
import PricingTable from '../components/pricing'
import ClientPartners from '../components/client-partners'
import Footer from '../components/footer'

import $ from "jquery";
import 'react-bootstrap'

let jQuery = jQuery || $

import '../packages/bootstrap-select/dist/js/bootstrap-select.js'


// import '../packages/Camera-master/scripts/jquery.mobile.customized.min.js'
import '../packages/Camera-master/scripts/jquery.easing.1.3.js'
// import '../packages/Camera-master/scripts/camera.min.js'

import '../packages/bootstrap-mega-menu/js/menu.js'

import '../packages/WOW-master/dist/wow.min.js'

import '../packages/owl-carousel/owl.carousel.min.js'

import '../packages/jquery.appear.js'
import '../packages/jquery.countTo.js'

import '../packages/fancybox/dist/jquery.fancybox.min.js'
import '../packages/jquery.ripples-master/dist/jquery.ripples-min.js'

import '../js/theme.js'



class Home extends Component {
    componentDidMount () {
        jQuery(document).on('ready', function () {
            (function ($) {
                removePlaceholder();
                // BannerSlider();
                wowAnimation();
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
            })(jQuery);
        });        
    }
    render () {
        return (
            <div> 
                <HeaderHtml></HeaderHtml>
                <Banner></Banner>
                <WhatWeDo />
                <WhatWeDoCont />
                <OurServices />
                <YourBenefits />
                <PricingTable />
                <Footer />
            </div>
        )
    }
}
    

export default Home
