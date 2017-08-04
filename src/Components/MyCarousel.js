import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';

export default class MyCarousel extends Component {

    render() {
        //const width = 500;
        //const height = 400;
        return (

            <div className='container' style={{'position': 'center'}}>
                <div className="row row-content col-xs-12 col-md-10 col-md-offset-2">

                    <Carousel interval={3000}>
                        <Carousel.Item>
                            <img src="./static/images/P1000623.JPG" alt="my 1"/>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="./static/images/P1000624.JPG" alt="my 2"/>
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="./static/images/P1000625.JPG" alt="my 3"/>
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </div>
            </div>

        );

    }
}