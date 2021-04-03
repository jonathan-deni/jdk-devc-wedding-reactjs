import React, { Component } from 'react';
import BannerImage from '../../assets/images/banner.jpeg';

export default class Banner extends Component {
    render() {
        return (
            <section id="banner" className="container-banner">
                <img src={BannerImage} alt="Banner Wedding" />
                <div className="content-banner">
                    <div className="content-title">
                        Atta &amp; Aurel Wedding
                    </div>
                    <div className="content-text">April 3rd 2021</div>
                </div>
            </section>
        );
    }
}
