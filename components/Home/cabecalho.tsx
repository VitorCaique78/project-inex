import { Button, Container, Grid, Typography } from "@mui/material"
import styled from "styled-components"
import { Header } from "../Header/header"
import { Player } from '@lottiefiles/react-lottie-player';
import { BtnApps } from "../Buttons/btnApps";

export const Cabecalho = () => {

    const handleMouseOver = () => {
        console.log('ta passando aqui');
    };

    return (
        <CABECALHO className="section-hero">
            <Header intern={false} />
            <Container className='section-content container'>
                <Grid container alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h1" className="section-hero--title" data-aos="fade-up" data-aos-duration="1000">
                            A melhor plataforma de serviços delivery de beleza e bem-estar
                        </Typography>
                        <Typography variant="body1" className="section-hero--desc" data-aos="fade-up" data-aos-duration="1000">
                            Faça serviços de unhas, massagem, depilação, escova de cabelo, corte masculino, sem precisar sair de casa ou nos melhores salões, mais próximos de você!
                        </Typography>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <BtnApps black={false} />
                        </div>
                    </Grid>
                    <Grid>
                        <div
                            id="scene"
                            onMouseOver={handleMouseOver}
                            className="people-one aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            style={{
                                transform: 'translate3d(0px, 0px, 0px) rotate(0.0001deg)',
                                transformStyle: 'preserve-3d',
                                backfaceVisibility: 'hidden',
                                position: 'relative',
                                pointerEvents: 'none'
                            }}>
                            <img
                                data-depth="0.2"
                                src="/img/mulher-sorrindo-segurando-celular.png"
                                alt=""
                                style={{
                                    transform: 'translate3d(0px, 0px, 0px) rotate(0.0001deg)',
                                    transformStyle: 'preserve-3d',
                                    backfaceVisibility: 'hidden',
                                    position: 'relative',
                                    pointerEvents: 'none'
                                }}
                            />
                        </div>
                    </Grid>
                </Grid>
                <div className='scroll-animation d-none d-md-flex'>
                    {/* Replace 'lottie-player' with your preferred animation component */}
                    <Player
                        autoplay
                        loop
                        src="looties/lootie.json"
                        style={{ height: '30px', width: '30px' }}
                    >
                    </Player>
                </div>
            </Container>
        </CABECALHO>
    )
}

const CABECALHO = styled.section`
    
`