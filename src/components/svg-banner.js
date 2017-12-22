import React from 'react'

import Slideshow from '../js/demo1'

export default class SvgBanner extends React.Component {
    componentDidMount () {
        // new Slideshow(document.querySelector('.slideshow'));
        // imagesLoaded('.slide__img', {
        //     background: true
        // }, () => document.body.classList.remove('loading'));
    }
    render() {
        return (
            <main>
                <div className='content content--fixed'>
                    <header className='codrops-header'>
                        <div className='codrops-links'>
                            <a
                                className='codrops-icon codrops-icon--prev'
                                href='https://tympanus.net/Development/ExpandingGridItemAnimation/'
                                title='Previous Demo'>
                                <svg className='icon icon--arrow'>
                                    <use xlinkHref='#icon-arrow'></use>
                                </svg>
                            </a>
                            <a
                                className='codrops-icon codrops-icon--drop'
                                href='https://tympanus.net/codrops/?p=33037'
                                title='Back to the article'>
                                <svg className='icon icon--drop'>
                                    <use xlinkHref='#icon-drop'></use>
                                </svg>
                            </a>
                        </div>
                        <h1 className='codrops-header__title'>Animated Frame Slideshow</h1>
                    </header>
                    <a
                        className='github'
                        href='https://github.com/codrops/AnimatedFrameSlideshow/'
                        title='Find this project on GitHub'>
                        <svg className='icon icon--github'>
                            <use xlinkHref='#icon-github'></use>
                        </svg>
                    </a>
                    <nav className='demos'>
                        <svg className='icon icon--keyboard'>
                            <use xlinkHref='#icon-keyboard'></use>
                        </svg>
                        <a className='demo demo--current' href='index.html'>
                            <span>Demo 1</span>
                        </a>
                        <a className='demo' href='index2.html'>
                            <span>Demo 2</span>
                        </a>
                        <a className='demo' href='index3.html'>
                            <span>Demo 3</span>
                        </a>
                        <a className='demo' href='index4.html'>
                            <span>Demo 4</span>
                        </a>
                        <a className='demo' href='index5.html'>
                            <span>Demo 5</span>
                        </a>
                        <a className='demo' href='index6.html'>
                            <span>Demo 6</span>
                        </a>
                    </nav>

                </div>
                <div className='slideshow'>
                    <div className='slides'>
                        <div className='slide slide--current'>
                            <div className='slide__img' style={{backgroundImage: `url(img/25.jpg)`}}></div>
                            <h2 className='slide__title'>Colossal</h2>
                            <p className='slide__desc'>A matter of delicate proportions and aesthetics.</p>
                            <a className='slide__link' href='#'>Explore our works</a>
                        </div>
                        <div className='slide'>
                            <div className='slide__img' style={{backgroundImage: `url(img/26.jpg)`}}></div>
                            <h2 className='slide__title'>Massive</h2>
                            <p className='slide__desc'>The thoughtful making of space is an art.</p>
                            <a className='slide__link' href='#'>Discover art</a>
                        </div>
                        <div className='slide'>
                            <div className='slide__img' style={{backgroundImage: `url(img/27.jpg)`}}></div>
                            <h2 className='slide__title'>Towering</h2>
                            <p className='slide__desc'>If a building becomes architecture, then it is art.</p>
                            <a className='slide__link' href='#'>Find out more</a>
                        </div>
                        <div className='slide'>
                            <div className='slide__img' style={{backgroundImage: `url(img/28.jpg)`}}></div>
                            <h2 className='slide__title'>Immense</h2>
                            <p className='slide__desc'>Architecture is a visual art, and the buildings speak for themselves.</p>
                            <a className='slide__link' href='#'>Uncover beauty</a>
                        </div>
                    </div>
                    <nav className='slidenav'>
                        <button className='slidenav__item slidenav__item--prev'>Previous</button>
                        <span>/</span>
                        <button className='slidenav__item slidenav__item--next'>Next</button>
                    </nav>
                </div>
            </main>
        )
    }
}
