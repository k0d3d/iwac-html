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


// import '../packages/bootstrap/bootstrap.css'

// import '../packages/bootstrap-select/dist/css/bootstrap-select.css'
// import '../packages/Camera-master/css/camera.css'
// import '../packages/bootstrap-mega-menu/css/menu.css'
// import '../fonts/font-awesome/css/font-awesome.min.css'
// import '../packages/owl-carousel/owl.carousel.css'
// import '../packages/owl-carousel/owl.theme.css'
// import '../packages/WOW-master/css/libs/animate.css'
// import '../packages/hover.css'
// import '../fonts/icon/font/flaticon.css'
// import '../packages/fancybox/dist/jquery.fancybox.min.css'
// import '../packages/jquery-ui/jquery-ui.min.css'

// import '../css/style.css'
// import '../css/responsive.css'
// import '../css/custom.css'

class Home extends Component {
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
