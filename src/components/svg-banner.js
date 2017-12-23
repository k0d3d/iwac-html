import React from 'react'
import $ from 'jquery'
import { withPrefix } from 'gatsby-link'

if (typeof window === 'undefined') {
    global.window = {}
}


import Slideshow from '../js/demo1'

import '../css/svg-slider-base.css'
import '../css/pater.css'

export default class SvgBanner extends React.Component {
    componentDidMount () {
        $(document).ready(()=> {
            let imagesLoaded = require('../js/imagesloaded.pkgd.min.js')
            new Slideshow(document.querySelector('.slideshow'));
            imagesLoaded('.slide__img', {
                background: true
            }, () => document.body.classList.remove('loading'));
        })
    }
    render() {
        return (
            <main>
                <div className='slideshow'>
                    <div className='slides'>
                        <div className='slide slide--current'>
                            <div className='slide__img' style={{ backgroundImage: `url(${__PATH_PREFIX__ }/static/images/home/slide-3.jpg)`}}></div>
                            <h2 className='slide__title fadeInUp animated white-h1'>
                                Are you a recording or performing <br /><span>artist</span>, record <span>label</span><br /> or comedy <span>act</span>?
                            </h2>
                            <a className='slide__link' href='#'>Amazing benefits</a>

                        </div>
                        <div className='slide'>
                            <div className='slide__img' style={{backgroundImage: `url(./static/images/home/slide-2.jpg)`}}></div>
                            <h2 className='slide__title fadeInUp animated white-h1'>
                                Do you need a <span>mobile app</span> <br />or <span>website</span> for your <br />entertainment business?
                            </h2>
                            <a className='slide__link' href='#'>Amazing benefits</a>

                        </div>
                        <div className='slide'>
                            <div className='slide__img' style={{backgroundImage: `url(./static/images/home/slide-1.jpg)`}}></div>
                            <h2 className='slide__title fadeInUp animated white-h1'>
                                Do you need <span>professional </span>tech<br /> <span>support</span> and <span>consultation</span> <br /> for your business?
                            </h2>
                            <a className='slide__link' href='#'>Amazing benefits</a>
                        </div>
                        <div className='slide'>
                            <div className='slide__img' style={{backgroundImage: `url(./static/images/home/slide-5.jpg)`}}></div>
                            <h2 className='slide__title fadeInUp animated white-h1'>
                                We can build a <span>mobile app</span> <br />or <span>website</span> with <span>super-charged</span>  <br />features for you.
                            
                            </h2>
                            <a className='slide__link' href='#'>Amazing benefits</a>
                            
                        </div>
                    </div>
                    <nav className='slidenav'>
                        <a className='slidenav__item slidenav__item--prev'>back</a>
                        <span>/</span>
                        <a className='slidenav__item slidenav__item--next'>more</a>
                    </nav>
                </div>
            </main>
        )
    }
}
