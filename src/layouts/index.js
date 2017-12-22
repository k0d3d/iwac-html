import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'


import '../packages/bootstrap/bootstrap.css'
import '../packages/bootstrap-select/dist/css/bootstrap-select.css'
import '../packages/Camera-master/css/camera.css'
import '../packages/bootstrap-mega-menu/css/menu.css'
import '../fonts/font-awesome/css/font-awesome.min.css'
import '../packages/owl-carousel/owl.carousel.css'
import '../packages/owl-carousel/owl.theme.css'
import '../packages/WOW-master/css/libs/animate.css'
import '../packages/hover.css'
import '../fonts/icon/font/flaticon.css'
import '../packages/fancybox/dist/jquery.fancybox.min.css'
import '../packages/jquery-ui/jquery-ui.min.css'


import '../css/style.css'
import '../css/responsive.css'
import '../css/custom.css'

const TemplateWrapper = ({ children }) => (
  <div className="main-page-wrapper">
    <Helmet
      title="IXit"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
