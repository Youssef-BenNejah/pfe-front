import React from 'react'
import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addReponse, editMessage,addMail } from '../../../Service/service';
import { Link, useHistory, useParams } from 'react-router-dom';
import NavBar from '../Nav/Navbar';
import jwt from 'jsonwebtoken'
import Header from '../Header'


const initialValue = {
    email: '',
    reponse: ''
}

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})


const Mail = () => {
    const [reponses, setReponses] = useState(initialValue);


    const { email, reponse, } = reponses;
    let navigate = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setReponses({ ...reponses, [e.target.name]: e.target.value })
    }
    const classes = useStyles();

    const addReponseDetails = async () => {
        await addMail(reponses); 
        console.log(reponses);

        // navigate.push('/all-reponses');
    }

    return (
        <div className='main-content'>

            <NavBar />
            <Header />
            <FormGroup className={classes.container}>
                <Typography variant="h4"> reponse</Typography>
                <FormControl>
                    <InputLabel htmlFor="my-input">email</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">reponse</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='reponse' value={reponse} id="my-input" />
                </FormControl>

                <FormControl>
                    <Button variant="contained" color="primary" onClick={() => addReponseDetails()}>Envoyer</Button>
                </FormControl>
            </FormGroup>



        </div>
    )
}

export default Mail;  