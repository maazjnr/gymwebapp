import React, { useState, useEffect } from "react";
import {Box, Button, Stack, TextField, Typography} from '@mui/material';
import { exercisesOptions, fetchData } from "../utils/fetchData";
import HorinzontalScrollbar from "./HorinzontalScrollbar ";


const SearchExercise = ({setExercises, bodyPart, setBodyPart}) => {

    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartData = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
                exercisesOptions
                );

                setBodyParts(['all', ...bodyPartData]);
        }

        fetchExercisesData();
    }, [])

    const HandleSearch = async () => {
        if(search) {
            const exercisesData = await fetchData
            ('https://exercisedb.p.rapidapi.com/exercises',
            exercisesOptions);
            const searchedExercise = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase.includes(search)
                || exercise.target.toLowerCase.includes(search)
                || exercise.equipment.toLowerCase.includes(search)
                || exercise.bodyPart.toLowerCase.includes(search)
            );

            setSearch('')
            setExercises(searchedExercise)
        }
    }

    return(
        <Stack alignItems="center" mt="37px" 
        justifyContent="center" p="20px">

            <Typography fontWeight={700} sx={{
                fontSize: {lg: '40px', sm: '30px'}
            }} mb="50px" textAlign='center'>
                Awesome Exercises
                You <br /> Should Know
            </Typography>

            <Box position='relative' mb="72px">

                <TextField 
                sx={{
                input: {fontWeight: '700', border: 'none',
                borderRadius: "4px"},
                width: {lg: '800px', xs: '250px'},
                backgroundColor: "#fff", borderRadius: "40px"
                
                }}
                height='76px' value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search Exercise'
                type='text'
                />

                <Button className="search-btn"
                sx={{
                    bgcolor: '#ff2625', 
                    color: "#fff",
                    textTransform: "none",
                    width: {lg: '175px', xs: "80px"},
                    fontSize: {lg: '20px', xs: '14px'},
                    height: '56px',
                    position: 'absolute',
                    right: '0'
                }} 

                onClick={HandleSearch}
                >
                    Search
                </Button>

            </Box>

            <Box sx={{
                position: 'relative', width: '100%', p: '20px'}}>
                    <HorinzontalScrollbar data={bodyParts}
                    bodyPart={bodyPart} setBodyPart={setBodyPart}
                     />
            </Box>

        </Stack>
    )
}

export default SearchExercise