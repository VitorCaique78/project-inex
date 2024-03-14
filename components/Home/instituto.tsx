import { Container, Grid, Typography } from "@mui/material"
import styled from "styled-components"

export const Instituto = () => {

    return (
        <INSTITUTO className="section-character">
             <Container>
          <Grid container alignItems="center">
            <Grid item xs={12} md={6} className="order-last">
              <div className="image-heart aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                <img src="img/yobelle-embelleze.png" className="img-fluid" alt="Instituto Embelleze" />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" className="title-section aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                Segurança e qualidade verificada pelo Instituto Embelleze
              </Typography>
              <Typography variant="body1" className="subtitle-section mb-5 mb-md-0 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                Dentro do aplicativo Yobelle, você conta com a qualidade e o reconhecimento dos profissionais certificados pelo Instituto Embelleze, a maior rede de franquias em cursos profissionalizantes no segmento de beleza da América Latina. <br /><br />
                São 18 anos de tradição, 270 franquias espalhadas por todo território nacional e mais de 2 milhões de alunos formados ao longo dos anos. <br /><br />
                Conte com um atendimento personalizado e o apoio da tecnologia para encontrar os melhores profissionais de beleza da sua região!
              </Typography>
            </Grid>
          </Grid>
        </Container>
        </INSTITUTO>
    )
}

const INSTITUTO = styled.section`
    
`