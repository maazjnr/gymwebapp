import React, {useState} from "react";
import {Box} from '@mui/material';
import HeroBanner from "../components/HeroBanner";
import SearchExercise from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
    
    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);

    return(
    <Box>
        <HeroBanner />
        <SearchExercise setExercises={setExercises} 
        bodyPart={bodyPart} setBodyPart={setBodyPart} />
        
        <Exercises 
        setExercises={setExercises} 
        bodyPart={bodyPart}
        exercises={exercises} />
    </Box>
    )
}

export default Home