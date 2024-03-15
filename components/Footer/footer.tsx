import Link from "next/link"
import { FOOTER } from "./footer.styles"
import { Button, Container, Grid, Typography } from "@mui/material"
import { BtnApps } from "../Buttons/btnApps"

export const Footer = () => {
    return (
        <FOOTER>
            <Container className="footer-content">
                <Grid container spacing={3} className="d-block d-md-none">
                    <Grid item xs={12}>
                        <Link href="/" className="logo-footer" aria-label="Logo">
                            <img src="/img/yobelle-logo-alt.png" alt="" />
                        </Link>
                        <Typography variant="body1" className="mb-5 about-text">
                            A Yobelle é o maior e melhor aplicativo delivery de beleza e bem estar do Norte e Nordeste. Através do nosso aplicativo de beleza e bem-estar é possível ficar mais bela e sentir-se bem sem sair de casa. Com a Yobelle, você é atendido pelos melhores profissionais ou salões com menor custo da região.
                        </Typography>
                        <ul className="menu-footer menu-footer--alt mb-5">
                            <li><Link href="/#como-funciona">Como Funciona</Link></li>
                            <li><Link href="/#servicos">Serviços</Link></li>
                            <li><Link href="/profissionais">Profissionais</Link></li>
                            <li><Link href="/salao">Salões</Link></li>
                            <li><Link href="/empresas">Empresas</Link></li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} className="mb-5">
                        <BtnApps black={true} />
                    </Grid>
                    <Grid item xs={12}>
                        <div className="redes">
                            <Link href="https://facebook.com.br/useyobelle" className="redes-item" aria-label="Logo">
                                <span className="icon-social icon-facebook"></span>
                            </Link>
                            <Link href="https://instagram.com.br/useyobelle" className="redes-item" aria-label="Logo">
                                <span className="icon-social icon-instagram"></span>
                            </Link>
                            <Link href="malito:contato@yobelle.com.br" className="redes-item" aria-label="Logo">
                                <span className="icon-social icon-mail"></span>
                            </Link>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={3} className="d-none d-md-flex">
                    <Grid item xs={3}>
                        <Link href="" className="logo-footer" aria-label="Logo">
                            <img src="svg/yobelle-logo-alt.svg" alt="" />
                        </Link>
                        <ul className="menu-footer">
                            <li><Link href="/#como-funciona">Como Funciona</Link></li>
                            <li><Link href="/#servicos">Serviços</Link></li>
                            <li><Link href="/profissionais">Profissionais</Link></li>
                            <li><Link href="/salao">Salões</Link></li>
                            <li><Link href="/empresas">Empresas</Link></li>
                        </ul>
                    </Grid>
                    <Grid item xs={9}>
                        <div className="redes">
                            <Link href="http://facebook.com.br/yobelleoficial" className="redes-item" aria-label="Logo">
                                <span className="icon-social icon-facebook"></span>
                            </Link>
                            <Link href="http://instagram.com.br/useyobelle" className="redes-item" aria-label="Logo">
                                <span className="icon-social icon-instagram"></span>
                            </Link>
                            <Link href="malito:contato@yobelle.com.br" className="redes-item" aria-label="Logo">
                                <span className="icon-social icon-mail"></span>
                            </Link>
                        </div>
                        <Typography variant="body1" className="mb-4 about-text">
                            A Yobelle é o maior e melhor aplicativo de delivery de beleza e bem estar do Norte e Nordeste. Através do nosso aplicativo de beleza e bem-estar é possível ficar mais bela e sentir-se bem sem sair de casa. Com a Yobelle, você é atendido pelos melhores profissionais com menor custo da região.
                        </Typography>
                        <div className="buttons-app">
                            <BtnApps black={true}/>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <div className="subfooter">
                <Typography variant="body1" className="text-center">
                    © Yobelle - Av. Terminal da França, 393, Comércio, Salvador, BA - CNPJ nº 28.700.786/0001-79.
                </Typography>
            </div>
        </FOOTER>
    )
}