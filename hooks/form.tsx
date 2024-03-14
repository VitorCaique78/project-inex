
import { TextField, InputLabel, FormControl, Box, Select, MenuItem, Button as ButtonMui, } from "@mui/material";
import * as Yup from "yup"
import { useState, useEffect } from "react";
import { getPokemonList, getPokemonLocation, getPokemonRegion } from "../pages/api/pokeAPI/pokemonAPI";
import { toBRCurrencyHook } from "./toBrCurrency";
import AddIcon from '@mui/icons-material/Add';
import { useFormik } from "formik"

const initialValues = {
    firstName: "",
    lastName: "",
    occupation: "",
    city: "",
    country: "",
    email: "",
    password: "",
}


//validation schema

export async function getStaticProps() {
    const api = "https://pokeapi.co/api/v2/pokemon?limit=70&offset=0"
    const res = await fetch(api)
    const data = await res.json()

    data.results.forEach((item: any, index: any) => {
        item.id = index + 1
    })
    return {
        props: {
            pokemons: data.results
        }
    }
}

let validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Nome é obrigatório"),
    lastName: Yup.string().required("Sobrenome é obrigatório")
    
})

const UseForm = () => {
    const [pokemonList, setPokemonList] = useState<any>([])
    const [selectedTeam, setSelectedTeam] = useState<any>([])
    const [selectedRegion, setSelectedRegion] = useState(" ")
    const [selectedLocation, setSelectedLocation] = useState(" ")
    const [pokemonLocation, setPokemonLocation] = useState<any>([])
    const [pokemonRegion, setPokemonRegion] = useState<any>([])
    const [timeList, setTimeList] = useState<any>([])
    const [dateList, setDateList] = useState<any>([])
    const [selectedTime, setSelectedTime] = useState(" ")
    const [selectedDate, setSelectedDate] = useState(" ")

    const getPokemon = async () => {
        const pokemonList = await getPokemonList()
        pokemonList.forEach((item: any, index: any) => {
            item.value = index + 1,
                delete item.url
        });
        setPokemonList(pokemonList)
    }

    const getLocation = async () => {
        const pokemonLocation = await getPokemonLocation()
        pokemonLocation.forEach((item: any, index: any) => {
            item.value = index + 1,
                delete item.url
        });
        setPokemonLocation(pokemonLocation)
    }

    const getRegion = async () => {
        const pokemonRegion = await getPokemonRegion()
        pokemonRegion.forEach((item: any, index: any) => {
            item.value = index + 1,
                delete item.url
        });
        setPokemonRegion(pokemonRegion)
    }

    const getTime = async () => {
        const response = await fetch("/api/scheduling/time", {
            headers: new Headers({
                'content-type': "application/json"
            }),
            method: "POST"
        });
        const data = await response.json();
        const finalData = data.map((item: any, index: any) => ({
            name: item,
            value: item
        }));
        setTimeList(finalData)
    }

    const getDate = async () => {
        const response = await fetch("/api/scheduling/date", {
            headers: new Headers({
                'content-type': "application/json"
            }),
            method: "POST"
        });
        const data = await response.json();
        const finalData = data.map((item: any, index: any) => ({
            name: item,
            value: item
        }));
        setDateList(finalData)
    }

    useEffect(() => {
        getPokemon()
        getLocation()
        getRegion()
        getTime()
        getDate()
    }, [])

    const increment = (): any => {
        setSelectedTeam([...selectedTeam, null])
    };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            region: '',
            city: '',
            pokemon: {},
            date: '',
            hour: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values: any) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box className='flex-center'>

                <TextField
                    fullWidth
                    id="firstName"
                    name="firstName"
                    label="Nome"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && Boolean(formik.errors.firstName)}
                />

                <TextField
                    fullWidth
                    id="lastName"
                    name="lastName"
                    label="Sobrenome"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && Boolean(formik.errors.lastName)}
                />
            </Box>
            <Box className='flex-center'>
                <FormControl fullWidth>
                    <InputLabel id="region" shrink>Região</InputLabel>
                    <Select
                        defaultValue=""
                        variant="outlined"
                        labelId="Região"
                        id="region"
                        value={selectedRegion}
                        label="Região"
                        size="small"
                        onChange={event => setSelectedRegion(event.target.value)}
                    >
                        <MenuItem value=" " key="">
                            Selecione a Região
                        </MenuItem>
                        {pokemonRegion.map((item: any, i: any) => (
                            <MenuItem value={item.value} key={item.value}>
                                {item.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel shrink>Cidade</InputLabel>
                    <Select
                        defaultValue=""
                        variant="outlined"
                        labelId="Cidade"
                        id="period"
                        value={selectedLocation}
                        label="Cidade"
                        size="small"
                        onChange={event => setSelectedLocation(event.target.value)}
                    >
                        <MenuItem value=" " key="">
                            Selecione a Cidade
                        </MenuItem>
                        {pokemonLocation.map((item: any, i: any) => (
                            <MenuItem value={item.value} key={item.value}>
                                {item.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <p className="register-team">Cadastre seu time</p>
            <span>Atendemos até 06 pokémons por vez</span>
            {
                selectedTeam.map((item: any, index: any) => {
                    return (
                        <Box sx={{ display: 'flex', alignItems: "center", justifyContent: 'space-between', marginBottom: '40px' }} key={index}>
                            <p>Pokémon 0{index + 1}</p>
                            <FormControl sx={{ m: 1, width: 400 }}>
                                <InputLabel shrink>Pokémon {index + 1}</InputLabel>
                                <Select
                                    defaultValue=""
                                    variant="outlined"
                                    labelId="Pokemon"
                                    id="date"
                                    value={item?.value ?? " "}
                                    label="Pokemon"
                                    size="small"
                                    onChange={event => {
                                        // setSelectedPokemon(event.target.value)
                                        const tempTeam = [...selectedTeam]
                                        const selectedPokemon = pokemonList.find((item: any) => item.value === event.target.value)
                                        tempTeam[index] = selectedPokemon
                                        setSelectedTeam(tempTeam)
                                    }}
                                >
                                    <MenuItem value=" " key="">
                                        Selecione um pokemon
                                    </MenuItem>
                                    {pokemonList.map((item: any, i: any) => (
                                        <MenuItem value={item.value} key={item.value}>
                                            {item.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    )
                })
            }
            <Box sx={{ margin: '20px 0px' }}>
                <ButtonMui className="add-pokemon" variant="outlined" onClick={() => { increment() }} disabled={selectedTeam.length < 6 ? false : true} endIcon={<AddIcon />}>Adicionar novo pokémon ao time...</ButtonMui>
            </Box>
            <Box className='flex-center' sx={{ marginBottom: '20px' }}>
                <FormControl fullWidth>
                    <InputLabel shrink>Data</InputLabel>
                    <Select
                        defaultValue=""
                        variant="outlined"
                        labelId="Data"
                        id="period"
                        value={selectedDate}
                        label="Data"
                        size="small"
                        onChange={event => setSelectedDate(event.target.value)}
                    >
                        <MenuItem value=" " key="">
                            Selecione a Data
                        </MenuItem>
                        {dateList.map((item: any, i: any) => (
                            <MenuItem value={item.value} key={item.value}>
                                {item.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="time" shrink>Horário de Atendimento</InputLabel>
                    <Select
                        defaultValue=""
                        variant="outlined"
                        labelId="Horário"
                        id="time"
                        value={selectedTime}
                        label="Horário"
                        size="small"
                        onChange={event => setSelectedTime(event.target.value)}
                    >
                        <MenuItem value=" " key="">
                            Selecione um Horário
                        </MenuItem>
                        {timeList.map((item: any, i: any) => (
                            <MenuItem value={item.value} key={item.value}>
                                {item.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

            </Box>
            <br />
            <hr />
            <br />
            <Box>
                <div className="resume">
                    <p>Número de pokémons a serem atendidos:</p> <span>0{selectedTeam.length}</span>
                </div>
                <div className="resume">
                    <p>Atendimento unitário por pokémon: </p> <span>{toBRCurrencyHook(70, 2)}</span>
                </div>
                <div className="resume">
                    <p>Subtotal:</p> <span>{toBRCurrencyHook(70 * selectedTeam.length, 2)}</span>
                </div>
                <div className="resume">
                    <p>Taxa geracional*: </p> <span>{toBRCurrencyHook(2.10, 2)}</span>
                </div>
                <span>*adicionamos uma taxa de 3%, multiplicado pelo número da geração mais alta do time, com limite de até 30%</span>
            </Box>
            <Box className='flex' sx={{ marginTop: "30px", display: 'flex', justifyContent: 'space-between' }}>
                <h4>Valor Total: {toBRCurrencyHook(selectedTeam.length > 0 ? 70 * selectedTeam.length + 2.10 : 0, 2)}</h4>
                <ButtonMui type="submit">Concluir Agendamento</ButtonMui>
            </Box>
        </form>
    )
}

export default UseForm
