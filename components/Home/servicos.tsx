import { Container, Grid, Typography } from "@mui/material"
import styled from "styled-components"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useRef } from "react";

export const Servicos = () => {
    const images = [
        'img/yobelle-massagem.png',
        'img/yobelle-unhas.png',
        'img/yobelle-corte-masc.png',
        'img/yobelle-depilacao.png',
        'img/yobelle-cabelo.png',
        'img/yobelle-sobrancelha.png',
        'img/yobelle-esteticafacial.png'
    ]
    const sliderRef = useRef<Slider>(null);

    useEffect(() => {
        if (sliderRef.current) {
            const slickSlider = sliderRef.current;

            // Event listener para navegação ao clicar nos botões
            const handlePrevClick = () => slickSlider.slickPrev();
            const handleNextClick = () => slickSlider.slickNext();

            const prevButton = document.getElementById('slidePrev');
            if (prevButton) {
                prevButton.addEventListener('click', handlePrevClick);
            }

            const nextButton = document.getElementById('slideNext');
            if (nextButton) {
                nextButton.addEventListener('click', handleNextClick);
            }

            // Limpeza dos event listeners quando o componente é desmontado
            return () => {
                if (prevButton) {
                    prevButton.removeEventListener('click', handlePrevClick);
                }

                if (nextButton) {
                    nextButton.removeEventListener('click', handleNextClick);
                }
            };
        }
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 762,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    variableWidth: true,
                },
            },
        ],
    };

    return (
        <SERVICOS className="section-services" id="servicos">
            <Typography variant="h3" className="title-section mb-0 pb-3 mb-md-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                Serviços para você
            </Typography>
            <Typography variant="body1" className="subtitle-section text-center d-block d-md-none mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                Temos uma ampla variedade de tratamentos de beleza e bem-estar que ajudam você a relaxar e se renovar, sem sair de casa ou do escritório.
            </Typography>

            <div className="services-slide-content aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                <Grid item xs={12} md={6} className="services-slide--controls d-none d-md-flex">
                    <Typography variant="body1">
                        Temos uma ampla variedade de tratamentos de beleza e bem-estar que ajudam você a relaxar e se renovar, sem sair de casa ou do escritório.
                    </Typography>
                    <div className="controls-slide controls-slide--services">
                        <button className="btn-controls btn-controls--prev" id="slidePrev">Prev</button>
                        <button className="btn-controls btn-controls--next" id="slideNext">Next</button>
                    </div>
                </Grid>

                <Grid item xs={12} md={6} className="services-slide--content">
                    {/* Here you can map through your images and render them */}
                    {/* For example: */}
                    <Slider ref={sliderRef} {...settings}>
                        {images.map((img: string, key: number) => {
                            return (
                                <div key={key}>
                                    <img className="img-fluid" src={img} alt="Massagens" />
                                </div>
                            )
                        })}
                    </Slider>
                </Grid>
            </div>
        </SERVICOS>
    )
}

const SERVICOS = styled.section`
    
`