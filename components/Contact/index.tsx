import React from 'react';
import { Container, Grid, Typography, TextField, Button } from '@mui/material';

const ContactForm = () => {
    return (
        <section className="get-budget">
            <Container>
                <Grid container justifyContent="center">
                    <Grid item xs={12} md={6} style={{ position: 'relative' }}>
                        <div className="contact-form" data-aos="fade-up" data-aos-duration="1000">
                            <h3 className="contact-form--title aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                                Gostou? Então não perde tempo.
                            </h3>
                            <Typography variant="body1" gutterBottom>
                                Preencha o formulário que entraremos em contato.
                            </Typography>

                            <form>
                                <TextField fullWidth margin="normal" label="Seu nome" />
                                <TextField fullWidth margin="normal" label="Nome do estabelecimento" />
                                <TextField fullWidth margin="normal" type="email" label="Email" />
                                <TextField fullWidth margin="normal" label="Seu cargo" />
                                <TextField fullWidth margin="normal" label="Telefone (71) 9 9999-9999" />
                                <TextField fullWidth margin="normal" multiline rows={3} label="Quais principais serviços deseja oferecer? (ex. Manicure, corte masculino, massagem, etc.)" />

                                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                    <Button variant="contained" className='btn-apps-black' href="#" role="button">
                                        Solicite orçamento
                                    </Button>
                                </div>
                            </form>
                        </div>
                        <span className="svg-heart--alt heart-contact d-none d-md-block"></span>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

export default ContactForm;