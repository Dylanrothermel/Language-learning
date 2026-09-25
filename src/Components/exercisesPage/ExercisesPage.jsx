import React, { useEffect, useState } from 'react';
import './exercisesPage.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useParams } from 'react-router';
import Button from '../Button/Button';

const ExercisesPage = () => {
    const [data, setData] = useState([]);
    const [current, setCurrent] = useState({
        word: '',
        translation: '',
        sentence: '',
        explanation: ''
    });
    const [input, setInput] = useState('');
    const [wOr, setWOr] = useState('');
    const {batchNumber} = useParams();
    const {ANV} = useParams();


    useEffect(() => {
       const getData = async() =>{
            const querySnapshot = await getDocs(collection(db, ANV, batchNumber, batchNumber));

            const exercises = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setData(exercises)
            console.log(exercises)
        };
        getData();
    }, []);

    

    const sInput = (event) => {
        setInput(event.target.value)
    }

    const q = () => {

        if (data.length === 0) {
            setCurrent({
                word: 'No exercises left'
            });
            return;
        }
    
    // If there are no unused exercises yet, start with all data
        const available = data;

    // Pick random exercise
        const randomIndex = Math.floor(Math.random() * available.length);
        const randomExercise = available[randomIndex];

    // Display it
        setCurrent(randomExercise)
    
        console.log(current)

        // Remove it from the available exercises
        setData(available.filter((element, index) => index !== randomIndex));

        setInput('');
        setWOr('');
};
    
    const check = () => {
        if (data.length === 0) return;

        if(input.toLowerCase == current.translation.toLowerCase) {
            setWOr('right')
        } else {
            setWOr('wrong')
        }
    }
    
  return (
    <div className='exercisesPage'>
        <div className='wordSentence'>
            <span>{current?.word}</span>
            <span>{current?.sentence}</span>
        </div>

        {
            wOr == 'right' ?
                <div className='explanation'>
                    <span>Translation: {current?.translation}</span>
                    <span>Explanation: {current?.explanation}</span>
                </div>:
                <div></div>
        }

        <input 
            type="text" 
            value={input}
            onChange={sInput}
        />

        <button onClick={() => q()}>get data</button>
        <div className='check'>
            <button onClick={() => check()}>Check</button>
            <span>{wOr}</span>
        </div>
        <button onClick={() => setWOr('right')}>Show</button>
        
    </div>
  )
}

export default ExercisesPage