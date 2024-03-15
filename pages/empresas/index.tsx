import styled from "styled-components";
import { Header } from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import { Button, Container, Grid, Typography } from "@mui/material";
import { BtnApps } from "../../components/Buttons/btnApps";
import ContactForm from "../../components/Contact";
import FirstContentIntern from "../../components/Sections/firstContentIntern";

export default function Saloes() {
    return (
        <SALAO>
            <Header intern />
            <FirstContentIntern title="A melhor plataforma de serviços delivery de beleza e bem-estar" subtitle="A fórmula para o aumento da produtividade. Diversidade e qualidade em serviços que visam relaxamento e bem estar aos colaboradores das empresas parceiras." image="/img/sorrindo-yobelle.png" />
            <section className="benefits pb-5 pt-5 pt-md-0">
                <Container>
                    <Typography variant="h3" className="title-section mb-5 pb-4">Benefícios para a sua empresa</Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <div className="item-circle item-circle--alt mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                                <span className="icon icon-smile--white"></span>
                                <div className="item-circle--alt_info">
                                    <Typography variant="body1">Diminuição do absenteísmo</Typography>
                                    <Typography variant="body2">As principais causas que levam os colaboradores a se ausentar é a falta de ânimo e qualidade de vida</Typography>
                                </div>
                            </div>
                            <div className="item-circle item-circle--alt mb-5 pt-md-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                                <span className="icon icon-heart--white"></span>
                                <div className="item-circle--alt_info">
                                    <Typography variant="body1">Diminuição do presenteísmo</Typography>
                                    <Typography variant="body2">As causas estão relacionadas a fatores físicos e/ou emocionais, ocasionando em depressão, menos produtividade e desmotivação</Typography>
                                </div>
                            </div>
                            <div className="item-circle item-circle--alt mb-5 pt-md-5 aos-init" data-aos="fade-up" data-aos-duration="1000">
                                <span className="icon icon-start--white"></span>
                                <div className="item-circle--alt_info">
                                    <Typography variant="body1">Employer Branding</Typography>
                                    <Typography variant="body2">Oferecer benefícios aos seus colaboradores te destaca da concorrência e atrai os melhores talentos para sua empresa</Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="item-circle item-circle--alt mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                                <span className="icon icon-bag--white"></span>
                                <div className="item-circle--alt_info">
                                    <Typography variant="body1">Diminuição do turnover</Typography>
                                    <Typography variant="body2">Quando um profissional de alto valor para a empresa se demite. Gerando muitos custos para a instituição</Typography>
                                </div>
                            </div>
                            <div className="item-circle item-circle--alt pt-md-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                                <span className="icon icon-care--white"></span>
                                <div className="item-circle--alt_info">
                                    <Typography variant="body1">Prevenção de doenças ocupacionais</Typography>
                                    <Typography variant="body2">Os problemas de lesões, dores nas costas e articulações são as maiores razões de afastamento e baixa produtividade laboral</Typography>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className="section-benefits pt-5 pt-md-0">
                <Container className="section-content container">
                    <Typography variant="h3" className="title-section aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                        Como podemos te ajudar
                    </Typography>

                    <Typography variant="body1" className="subtitle-section mb-5 mb-md-0 text-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                        {/* Conteúdo do subtítulo aqui */}
                    </Typography>

                    <Grid container alignItems="center">
                        <Grid item xs={12} md={6} className="order-last pb-5 pb-md-0">
                            <div className="item-circle item-small align-items-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                                <span className="icon icon-tag"></span>
                                <Typography variant="body1">Assinando você economiza até 60% nos serviços</Typography>
                            </div>
                            <div className="item-circle item-small align-items-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                                <span className="icon icon-medal"></span>
                                <Typography variant="body1">Você terá uma rede de profissionais autônomos qualificados ou salões credenciados, podendo escolher o da sua preferência</Typography>
                            </div>
                            <div className="item-circle item-small align-items-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                                <span className="icon icon-place"></span>
                                <Typography variant="body1">Tenha uma variedade de opções de serviços e você pode usar quando e onde quiser</Typography>
                            </div>
                            <div className="item-circle item-small align-items-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                                <span className="icon icon-cash"></span>
                                <Typography variant="body1">Planos mensais a partir de R$49,90. Baixe agora o nosso app e escolha o seu!</Typography>
                            </div>
                            <div className="buttons-app mt-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                                <BtnApps black={true} />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="mock-app mb-5 mb-md-0">
                                <img src="svg/yobelle-coracaolight.svg" alt="Imagem do aplicativo" className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" />
                            </div>
                        </Grid>
                    </Grid>
                </Container>
                <br /><br />
                <div className="my-paroller" data-paroller-factor="0.15" data-paroller-type="foreground">
                    <div className="background-parallax"></div>
                </div>
            </section>
            <ContactForm />
            <Footer />
        </SALAO>
    )
}

const SALAO = styled.section`    
`