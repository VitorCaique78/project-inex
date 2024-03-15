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
      <FirstContentIntern title="Conquiste mais clientes e aumente o faturamento do seu estabelecimento de beleza com a Yobelle!" subtitle="Ajudamos você a conquistar mais clientes e crescer seu salão, clinica de estética, barbearia ou esmalteria. De forma simples e rápida. Baixe o app e cadastre-se gratuitamente!" image="/img/yobelle-sorrindo.png"/>
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
        <div className="my-paroller" data-paroller-factor="0.15" data-paroller-type="foreground">
          <div className="background-parallax"></div>
        </div>
      </section>
      <ContactForm/>
      <Footer />
    </SALAO>
  )
}

const SALAO = styled.section`    
`