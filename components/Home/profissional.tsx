import { Button, Container, Grid, Typography } from "@mui/material"
import styled from "styled-components"
import { BtnApps } from "../Buttons/btnApps"

export const Profissional = () => {

  return (
    <PROFISSIONAL className="section-be-profissional bg-light">
      <Container className="section-content container">
        <Typography variant="h3" className="title-section aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
          Seja um profissional Yobelle e aumente sua renda
        </Typography>
        <Typography variant="body1" className="subtitle-section text-center mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
          Junte-se a nossa rede de profissionais e conquiste uma renda de até R$ 4.000,00
        </Typography>

        <Grid container>
          <Grid item xs={12} md={6} className="order-last">
            <div className="item-circle item-small aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              <span className="icon icon-bronze"></span>
              <Typography>
                Aprovado você receberá treinamento e workshop gratuito do Instituto Embelleze
              </Typography>
            </div>
            <div className="item-circle item-small aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              <span className="icon icon-bag"></span>
              <Typography>
                Seja seu próprio chefe trabalhando quando e onde quiser
              </Typography>
            </div>
            <div className="item-circle item-small aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              <span className="icon icon-calendar--small"></span>
              <Typography>
                Controle sua agenda de forma simples e prática
              </Typography>
            </div>
            <div className="item-circle item-small aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              <span className="icon icon-ticket"></span>
              <Typography>
                Controle seus recebíveis na carteira digital e receba em poucos dias
              </Typography>
            </div>

            <div className="buttons-app mt-3 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              <BtnApps black={true} />
            </div>
          </Grid>
          <Grid item xs={12} md={6} className="mb-5 mb-md-0">
            <div className="image-heart revert aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              <img src="img/yobelle-profissional.png" alt="Profissional Yobelle" />
              <span className="svg-heart d-none d-md-block"></span>
            </div>
          </Grid>
        </Grid>
      </Container>
    </PROFISSIONAL>
  )
}

const PROFISSIONAL = styled.section`
    
`