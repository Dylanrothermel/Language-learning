import { React, useState, useReducer } from 'react'
import './Upload.css';
import { storage, db } from '../../config/firebase'
import { ref } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore'
import words from './word.json'
import sentences from './sentence.json'

const reducer = (state, action) => {
  switch (action.type) {
    case "adjective":
        const upload = async (e) => {
            e.preventDefault();
            const myCollection = collection(db, 'Adjectives')
            await addDoc(myCollection, data)
        }
  }
};

const Upload = () => {

    const [ data, setData ] = useState ({
        word: '',
        pronunciation: '',
        verbClass: '',
        gender: '',
        translation: '',
        animateInanimate: ''
    });

    const uploadAdjective = async (e) => {
        e.preventDefault();
        const myCollection = collection(db, 'Adjectives', "batch1",'batch1')
        await addDoc(myCollection, data)
        e.target.reset();
    } //`Notes/${note.id}`

    const uploadNoun = async (e) => {
        e.preventDefault();
        const myCollection = collection(db, 'Nouns')
        await addDoc(myCollection, data)
        e.target.reset();
    }

    

    const update = (event) => {
        setData((data) => ({
            ...data,
            [event.target.name]: event.target.value
        }))
    }

    const uploadWords = async () => {
    const wordsCollection = collection(db, 'Sentences', 'batch1', 'batch1');

    await Promise.all(
        sentences.map((word) =>
            addDoc(wordsCollection, word)
        )
    );

    console.log('Upload complete');
};


  return (
    <div className='upload'>
        <button onClick={() => uploadWords()}>Upload JSON</button>
        <form 
        onSubmit={uploadAdjective}
        className='uploadForm'
        >
            <label>
                <input 
                    type="text"  
                    name='word' 
                    
                    placeholder='Adjective' 
                    onChange={update}
                />
            </label>
            
            <label>
                <input 
                type="text" 
                 name='pronunciation'
                 
                 placeholder='Pronunciation' 
                 onChange={update}
                />
            </label>

            <label>
                <input 
                type="text" 
                 name='translation'
                 
                 placeholder='Translation' 
                 onChange={update}
                />
            </label>

            <input type="submit" />
        </form>

        <form 
        onSubmit={uploadNoun}
        className='uploadForm'
        >
            <input 
                type="text" 
                name='word'
                
                placeholder='noun'
                onChange={update}
            />

            <input 
                type="text" 
                name='pronunciation'
                
                placeholder='Pronunciation'
                onChange={update}
            />

            <input
                type="text" 
                name='gender'
                
                placeholder='Gender'
                onChange={update}
            />

            <input
                type="text" 
                name='translation'
                
                placeholder='Translation'
                onChange={update}
            />

            <input
                type="text" 
                name='animateInanimate'
                
                placeholder='Animate or not'
                onChange={update}
            />

            <input type="submit" />
        </form>
        
    </div>
  )
}

export default Upload