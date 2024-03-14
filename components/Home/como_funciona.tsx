import { Container, Grid, Typography } from "@mui/material"
import styled from "styled-components"

export const ComoFunciona = () => {

    return (
        <COMOFUNCIONA className="section-how-it-work" id="como-funciona">
            <Container className="section-how-it-work--content container">
                <Typography variant="h3" className="title-section aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                    Como funciona a Yobelle
                </Typography>
                <Grid container alignItems="center">
                    <Grid item xs={12} md={6} className="mb-5 mb-md-0 align-items-center">
                        <div className="mock-app aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                            <img src="img/home-yobelle.png" alt="Imagem do aplicativo" />
                            <span className="svg-heart"></span>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="item-circle mb-5 pb-3 align-items-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                            <span className="icon icon-mobile"></span>
                            <Typography>Baixe o app e escolha um dos nossos serviços</Typography>
                        </div>
                        <div className="item-circle mb-5 pb-3 align-items-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                            <span className="icon icon-calendar"></span>
                            <Typography>Defina o dia e horário que deseja receber o atendimento</Typography>
                        </div>
                        <div className="item-circle mb-5 align-items-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                            <span className="icon icon-smile--alt"></span>
                            <Typography>Você decide se quer ser atendido em domicílio ou no salão credenciado mais próximo</Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </COMOFUNCIONA>
    )
}

const COMOFUNCIONA = styled.section`
    
`