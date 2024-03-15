import styled from "styled-components";
import { Header } from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import { Button, Container, Grid, Typography } from "@mui/material";
import { BtnApps } from "../../components/Buttons/btnApps";
import FirstContentIntern from "../../components/Sections/firstContentIntern";

export default function Profissionais() {
  return (
    <PROFISSIONAIS>
      <Header intern />
      <FirstContentIntern title="Construa sua carreira profissional conosco e se torne independente" subtitle="Seja seu próprio chefe e tenha uma renda extra até R$4.000,00 por mês" image="/img/yobelle-mulher.png"/>
      <section className="be-profissional pb-5" id="como-funciona">
        <Container>
          <Typography variant="h3" className="title-section mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
            Seja um profissional Yobelle
          </Typography>

          <Grid container alignItems="center">
            <Grid item xs={12} md={6} className="align-items-center">
              <div className="mock-app mb-5 mb-md-0 aos-init" data-aos="fade-up" data-aos-duration="1000">
                <img src="/img/mock-yobelle.png" alt="Imagem do aplicativo" />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="item-circle item-circle--alt mb-4 aos-init" data-aos="fade-up" data-aos-duration="1000">
                <span className="icon icon-bag--big"></span>
                <div className="item-circle--alt_info">
                  <Typography variant="body1">Seja seu próprio chefe</Typography>
                  <Typography variant="body2">
                    Trabalhe nos dias e horários que quiser. Você pode optar em atender uma região, bairro ou local específico e em horários alternativos e assim ter mais tempo pra você e sua família.
                  </Typography>
                </div>
              </div>
              <div className="item-circle item-circle--alt mb-4 aos-init" data-aos="fade-up" data-aos-duration="1000">
                <span className="icon icon-ticket--big"></span>
                <div className="item-circle--alt_info">
                  <Typography variant="body1">Ganhe acima do mercado</Typography>
                  <Typography variant="body2">
                    Enquanto salões convencionais pagam entre 20-50%, aqui você fica com até 70% de comissão sobre o valor do serviço realizado.
                  </Typography>
                </div>
              </div>
              <div className="item-circle item-circle--alt mb-5 aos-init" data-aos="fade-up" data-aos-duration="1000">
                <span className="icon icon-bronze--big"></span>
                <div className="item-circle--alt_info">
                  <Typography variant="body1">Treinamentos e capacitações</Typography>
                  <Typography variant="body2">Receba treinamento e capacitações gratuitas</Typography>
                </div>
              </div>

              <div className="buttons-app mt-3 aos-init" data-aos="fade-up" data-aos-duration="1000">
                <BtnApps black={true} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="section-character intern pt-5">
        <Container>
          <Grid container alignItems="center">
            <Grid item xs={12} md={6}>
              <div className="image-heart aos-init aos-animate d-none d-md-block" data-aos="fade-up" data-aos-duration="1000">
                <img src="/img/embeleze.png" alt="Embeleze" />
                <span className="svg-heart"></span>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <h2 className="title-section text-center text-md-left mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                Instituto Embelleze &amp; Yobelle
              </h2>
              <div className="image-heart mb-5 d-block d-md-none">
                <img src="/img/embeleze.png" alt="Embeleze" />
              </div>
              <Typography variant="body1" className="subtitle-section aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" gutterBottom>
                Na Yobelle os profissionais de beleza são avaliados pelo Instituto Embelleze, a maior rede de franquias em cursos profissionailizantes no segmento de beleza da América Latina.
                <br /><br />
                São 18 anos de tradição, 270 franquias espalhadas por todo território nacional e mais de 2 milhões de alunos formados ao longo dos anos.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>
      <Footer />
    </PROFISSIONAIS>
  )
}

const PROFISSIONAIS = styled.section`    
`