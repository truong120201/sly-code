import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './Slider.module.css'

import React, { Component } from "react";
import Slider from "react-slick";

import { Link } from 'react-router-dom'

export default class SimpleSlider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch(
            "https://sly-json.herokuapp.com/products")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            }, [])
    }

    render() {

        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 848,
                    settings: {
                        infinite: false,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 548,
                    settings: {
                        infinite: false,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                }
            ]
        };
        return (
            <>
                <Slider {...settings}>
                    {
                        this.state.items.filter(item => item.genre === this.props.genreToLoad).map((item, index) => {
                            return (
                                <div key={index}>
                                    <Link className={styles.sliderLink} to={`/${item.id}`}>
                                        <img className={styles.pic} src={item.picture} />
                                        <p className={styles.productName}>{item.name}</p>
                                        <p className={styles.productPrice}>{item.price} VNĐ</p>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </Slider>
            </>
        );
    }
}