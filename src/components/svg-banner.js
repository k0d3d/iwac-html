import React from 'react'
import $ from 'jquery'
import { withPrefix } from 'gatsby-link'

import imagesLoaded from '../js/imagesloaded.pkgd.min.js'

import Slideshow from '../js/demo1'

import '../css/svg-slider-base.css'
import '../css/pater.css'

export default class SvgBanner extends React.Component {
    componentDidMount () {
        $(document).ready(()=> {

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
                            
                            <h2 className="fadeInUp animated white-h1 slide__title" data-wow-delay="0.1s">
                                Are you a recording <br />or performing <span>artist</span>, <br />record <span>label</span> or comedy <span>act</span>?
                            </h2>                            
                            <p className='slide__desc'>A matter of delicate proportions and aesthetics.</p>
                            <a className='slide__link' href='#'>See Pricing</a>
                        </div>
                        <div className='slide'>
                            <div className='slide__img' style={{backgroundImage: `url(./static/images/home/slide-2.jpg)`}}></div>
                            <h2 className='slide__title'>Massive</h2>
                            <p className='slide__desc'>The thoughtful making of space is an art.</p>
                            <a className='slide__link' href='#'>Discover art</a>
                        </div>
                        <div className='slide'>
                            <div className='slide__img' style={{backgroundImage: `url(./static/images/home/slide-1.jpg)`}}></div>
                            <h2 className='slide__title'>Towering</h2>
                            <p className='slide__desc'>If a building becomes architecture, then it is art.</p>
                            <a className='slide__link' href='#'>Find out more</a>
                        </div>
                        <div className='slide'>
                            <div className='slide__img' style={{backgroundImage: `url(./static/images/home/slide-5.jpg)`}}></div>
                            <h2 className='slide__title'>Immense</h2>
                            <p className='slide__desc'>Architecture is a visual art, and the buildings speak for themselves.</p>
                            <a className='slide__link' href='#'>Uncover beauty</a>
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
