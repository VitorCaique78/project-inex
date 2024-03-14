import styled from "styled-components";
import React, { useEffect} from 'react'
import { Footer } from '../components/Footer/footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Cabecalho } from '../components/Home/cabecalho';
import { ComoFunciona } from "../components/Home/como_funciona";
import { Servicos } from "../components/Home/servicos";
import { Beneficios } from "../components/Home/beneficios";
import { Instituto } from "../components/Home/instituto";
import { Profissional } from "../components/Home/profissional";
import { Testemunhas } from "../components/Home/testemunhas";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <HOME data-scrollbar>
      <Cabecalho/>
      <ComoFunciona/>
      <Servicos/>
      <Beneficios/>
      <Instituto/>
      <Profissional/>
      <Testemunhas/>
      <Footer />
    </HOME>
  )
}

const HOME = styled.div`
    
`