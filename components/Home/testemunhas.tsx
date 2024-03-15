import { Button, Container, Grid, Typography } from "@mui/material"
import { useEffect, useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components"

export const Testemunhas = () => {

  const sliderRef = useRef<Slider>(null);
  const controlsSlideRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const slickSlider = sliderRef.current;

      // Event listener para navegação ao clicar nos botões
      const handlePrevClick = () => slickSlider.slickPrev();
      const handleNextClick = () => slickSlider.slickNext();

      const prevButton = document.getElementById('slidePrev2');
      if (prevButton) {
        prevButton.addEventListener('click', handlePrevClick);
      }

      const nextButton = document.getElementById('slideNext2');
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
    appendArrows: controlsSlideRef.current,
    responsive: [
      {
        breakpoint: 762,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          variableWidth: true,
        }
      },
    ],
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  // Função para retroceder o slider
  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <TESTEMUNHAS className="testmonials aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
      <div className="testmonials-slide-content">
        <h2 className="section-testmonials--desc text-center d-block d-md-none mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
          Veja a opinião de <br /> quem é assinante
        </h2>
        <div className="testmonials-slide--controls d-none d-sm-flex">
          <h2 className="section-testmonials--desc aos-init aos-animate">
            Veja a opinião de <br /> quem é assinante
          </h2>
          <div className="controls-slide controls-slide--testmonials" ref={controlsSlideRef}>
            <button className="btn-controls btn-controls--prev" id="slidePrev2" onClick={handlePrevClick}>Prev</button>
            <button className="btn-controls btn-controls--next" id="slideNext2" onClick={handleNextClick}>Next</button>
          </div>
        </div>


        <div className="testmonials-slide--content">
          <Slider ref={sliderRef} {...settings}>
            {/* tabIndex="0" */}
            <div className="testmonials-slide--content_item">
              <div className="testmonials-item">
                <div className="testmonials-item--content">
                  <Typography variant="body1">
                    "A melhor parte do serviço de beleza no trabalho é não precisar sair do escritório. A economia do tempo e a comodidade me levaram a optar pela Yobelle."
                  </Typography>
                </div>
                <Typography variant="body2" className="testmonials-item--author">Luciana A. | Salvador - BA</Typography>
              </div>
            </div>
            {/* tabIndex="0" */}
            <div className="testmonials-slide--content_item">
              <div className="testmonials-item">
                <div className="testmonials-item--content">
                  <Typography variant="body1">
                    "O que eu mais gosto do meu plano é que eu posso ser atendido onde eu quiser. Posso fazer em casa, na academia ou no trabalho."
                  </Typography>
                </div>
                <Typography variant="body2" className="testmonials-item--author">Adriana S.| Belo Horizonte - MG</Typography>
              </div>
            </div>
            {/* tabIndex="-1" */}
            <div className="testmonials-slide--content_item">
              <div className="testmonials-item">
                <div className="testmonials-item--content">
                  <Typography variant="body1">
                    "Todos os profissionais que me atenderam até agora foram incríveis! Atendimento e qualidade do serviço nota 10!"
                  </Typography>
                </div>
                <Typography variant="body2" className="testmonials-item--author">Ana Rosa | Salvador-Ba</Typography>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </TESTEMUNHAS>
  )
}

const TESTEMUNHAS = styled.section`
    
`