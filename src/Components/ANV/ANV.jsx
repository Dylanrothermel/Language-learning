import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { Link, useParams } from 'react-router';
import Button from '../Button/Button';

const ANV = () => {
    const [batches, setBatches] = useState([]);
    const {ANV} = useParams();

    useEffect(() => {
        const getBatches = async() => {
            const batchesCollection = await getDocs(collection(db, ANV));

            const batchesArray = batchesCollection.docs.map((doc) => ({
                id :doc.id,
                ...doc.data()
            }));
            
            setBatches(batchesArray)
            
        };
        getBatches();
    }, []);


  return (
    <>
        <h1>{ANV}</h1>

        {
            batches.map((batch) =>(
                <Link to={`/${ANV}/${batch.id}`} key={batch.id}>{batch.id}</Link>
                
            ))
        }
    </>
  );
};

export default ANV