import { Button, Container, Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import styled from "styled-components"
import { BtnApps } from "../Buttons/btnApps";

export const Beneficios = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setScroll(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const translatePosi = scroll > 2000 ? -16 : -5;
    const translate = (scroll > 1700 ? scroll / 100 * translatePosi : 0) * 1.2;
    const backgroundTransform = `translateY(${translate}px)`;

    return (
        <BENEFICIOS className="section-benefits pt-5 pt-md-0">
            <Container className="section-content container">
                <Typography variant="h3" className="title-section aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                    Seja um assinante Yobelle
                </Typography>

                <Typography variant="body1" className="subtitle-section mb-5 mb-md-0 text-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                    {/* Conteúdo do subtítulo aqui */}
                </Typography>

                <Grid container alignItems="center">
                    <Grid item xs={12} md={6} className="order-last pb-5 pb-md-0">
                        <div className="item-circle item-small align-items-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                            <span className="icon icon-tag"></span>
                            <Typography>Assinando você economiza até 60% nos serviços</Typography>
                        </div>
                        <div className="item-circle item-small align-items-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                            <span className="icon icon-medal"></span>
                            <Typography>
                                Você terá uma rede de profissionais autônomos qualificados ou salões credenciados, podendo escolher o da sua preferência
                            </Typography>
                        </div>
                        <div className="item-circle item-small align-items-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                            <span className="icon icon-place"></span>
                            <Typography>
                                Tenha uma variedade de opções de serviços e você pode usar quando e onde quiser
                            </Typography>
                        </div>
                        <div className="item-circle item-small align-items-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                            <span className="icon icon-cash"></span>
                            <Typography>
                                Planos mensais a partir de R$49,90. Baixe agora o nosso app e escolha o seu!
                            </Typography>
                        </div>
                        <div className="buttons-app mt-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                            <BtnApps black={true} />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="mock-app mb-5 mb-md-0">
                            <img src="img/yobelle-sorrindo.png" alt="Imagem do aplicativo" className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <div className="my-paroller" data-paroller-factor="0.15" data-paroller-type="foreground">
                <div className="background-parallax" style={{ transform: backgroundTransform }}></div>
            </div>
        </BENEFICIOS>
    )
}

const BENEFICIOS = styled.section`
    
`