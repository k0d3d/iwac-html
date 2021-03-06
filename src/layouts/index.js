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

import '../images/fav-icon/favicon.png'


import '../css/style.css'
import '../css/responsive.css'
import '../css/custom.css'

const TemplateWrapper = ({ children }) => (
  <div className="main-page-wrapper">
    <Helmet     
    >
        <meta charSet="UTF-8" />
        <meta
httpEquiv="X-UA-Compatible"
content="IE=edge" />
        <meta
name="description"
content="iXit helps you create beautiful mobile applications and websites using the same features and performance design available to the most popular social apps like Facebook and Instagram." />
        <meta
name="keywords"
content="iXit, mobile backup, ixit fast upload, upload movies, upload photos, upload documents, file backup, large uploads, resumable uploads, music, mobile site, web design, mobile app, developer " />
        <meta name="author" content="iXit" />
        <meta
name="viewport"
content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta
property="og:title"
content="We can build a mobile app or website with super-charged features for you." />
        <meta property="og:type" content="website" />
        <meta
property="og:url"
content="http://ixit.com.ng" />
        <meta
property="og:image"
content="/static/images/fav-icon/favicon.png"
alt
title="this is the title" />
        <meta
property="og:description"
content="iXit | Do you need a mobile app or website for your entertainment business? We can build a mobile app or website with super-charged features for you." />
        <meta
name="twitter:card"
content="summary_large_image" />
        <meta name="twitter:site" content="@ixibot" />
        <meta name="twitter:creator" content="@ixitbot" />
        <meta
name="twitter:title"
content="iXit | mobile sites for recording artists and record labels." />
        <meta
name="twitter:description"
content="iXit | Do you need a mobile app or website for your entertainment business? We can build a mobile app or website with super-charged features for you." />
        <meta
name="twitter:image"
content="/static/images/fav-icon/favicon.png" />
        <meta
name="google-site-verification"
content="eD8uIMx9JHCiUwUFhOsHJnzI3wvQW41kyoSBzJTgA9U" />
        <title>
iXit - mobile sites for recording artists and record labels.
</title>

	<link rel="icon" type="image/png" sizes="56x56" href="/static/images/fav-icon/favicon.png" />    
    </Helmet>
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.any,
}

export default TemplateWrapper
