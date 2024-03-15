import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { BtnApps } from '../Buttons/btnApps';

interface FirstContentInternProps {
    title: string;
    subtitle: string;
    image: string;
}

const FirstContentIntern: React.FC<FirstContentInternProps> = ({ title, subtitle, image }) => {
    return (
        <section className="section-hero intern">
            <Container>
                <div className="section-content container">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6} className="mb-5 mb-md-0 mt-4 mt-md-0 mr-2 mr-md-0">
                            <Typography variant="h1" gutterBottom className="professional--title">
                                {title}
                            </Typography>
                            <Typography variant="body1" gutterBottom className="professional--desc">
                                {subtitle}
                            </Typography>
                            <div className="buttons-app professional">
                                <BtnApps black={true} />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} className="text-center text-md-right">
                            <div
                                className="people-one aos-init aos-animate"
                                id="scene"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                style={{
                                    transform: 'translate3d(0px, 0px, 0px) rotate(0.0001deg)',
                                    transformStyle: 'preserve-3d',
                                    backfaceVisibility: 'hidden',
                                    position: 'relative',
                                    pointerEvents: 'none'
                                }}
                            >
                                <img
                                    src={image}
                                    alt="Celulares"
                                    data-depth="0.2"
                                    style={{
                                        transform: 'translate3d(-10.8px, 9px, 0px)',
                                        transformStyle: 'preserve-3d',
                                        backfaceVisibility: 'hidden',
                                        position: 'relative',
                                        display: 'block',
                                        left: '0px',
                                        top: '0px'
                                    }}
                                />
                                <span
                                    className="icons-yobelle"
                                    data-depth="0.3"
                                    style={{
                                        transform: 'translate3d(-16.1px, 13.5px, 0px)',
                                        transformStyle: 'preserve-3d',
                                        backfaceVisibility: 'hidden',
                                        position: 'absolute',
                                        display: 'block',
                                        left: '0px',
                                        top: '0px'
                                    }}
                                ></span>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </section>
    );
}

export default FirstContentIntern;