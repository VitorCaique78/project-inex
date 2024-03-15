import React, { useEffect, Suspense } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Cabecalho } from '../components/Home/cabecalho';

// Importando os componentes usando lazy loading
const ComoFunciona = React.lazy(() => import('../components/Home/como_funciona').then(module => ({ default: module.ComoFunciona })));
const Servicos = React.lazy(() => import('../components/Home/servicos').then(module => ({ default: module.Servicos })));
const Beneficios = React.lazy(() => import('../components/Home/beneficios').then(module => ({ default: module.Beneficios })));
const Instituto = React.lazy(() => import('../components/Home/instituto').then(module => ({ default: module.Instituto })));
const Profissional = React.lazy(() => import('../components/Home/profissional').then(module => ({ default: module.Profissional })));
const Testemunhas = React.lazy(() => import('../components/Home/testemunhas').then(module => ({ default: module.Testemunhas })));
const Footer = React.lazy(() => import('../components/Footer/footer').then(module => ({ default: module.Footer })));

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <HOME data-scrollbar>      
        <Cabecalho />
        <ComoFunciona />
        <Servicos />
        <Beneficios />
        <Instituto />
        <Profissional />
        <Testemunhas />
        <Footer />
    </HOME>
  );
}

const HOME = styled.div``;
