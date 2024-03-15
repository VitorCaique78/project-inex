import Link from "next/link"
import { HEADER } from "./header.styles";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

interface headerProps {
    intern?: boolean
}

export const Header: React.FC<headerProps> = ({ intern }) => {
    const [scrolled, setScrolled] = useState<boolean>(false);

    const [menuMobileActive, setMenuMobileActive] = useState<boolean>(false);

    const toggleClasses = () => {
        setMenuMobileActive(prevState => !prevState);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    console.log(scrolled);
    console.log(intern);    

    return (
        <HEADER className={(scrolled ? 'scroll' : '') + (intern ? 'intern scroll' : '')}>
            <div className={menuMobileActive ? "filter-menu active" : "filter-menu"}></div>
            <div className={`menu-mobile d-block d-md-none ${menuMobileActive ? 'active' : ''}`}>
                <Link href="/" className="logo">
                    <img src="/svg/yobelle-logo-alt.svg" alt="Logo" />
                </Link>

                <ul className="menu-responsive">
                    <li><Link href="/#como-funciona" onClick={() => {setMenuMobileActive(false)}}>Como Funciona</Link></li>
                    <li><Link href="/#servicos" onClick={() => {setMenuMobileActive(false)}}>Serviços</Link></li>
                    <li><Link href="/profissionais">Profissionais</Link></li>
                    <li><Link href="/salao">Salões</Link></li>
                    <li><Link href="/empresas">Empresas</Link></li>
                </ul>
            </div>
            <Box className="header-content container">
                <Link href="/" className="logo">
                    <img src="/svg/logo.svg" alt="" />
                </Link>

                <ul className="menu d-none d-md-flex">
                    <li><Link href="/#como-funciona">Como Funciona</Link></li>
                    <li><Link href="/#servicos">Serviços</Link></li>
                    <li><Link href="/profissionais">Profissionais</Link></li>
                    <li><Link href="/salao">Salões</Link></li>
                    <li><Link href="/empresas">Empresas</Link></li>
                </ul>

                <Button type="button" className="btn btn-link d-block d-md-none" id="open-menu" onClick={toggleClasses}>
                    <span className={menuMobileActive ? "icon-bars close" : "icon-bars"}></span>
                    <span className="icon-close"></span>
                </Button>
            </Box>
        </HEADER>
    )
}