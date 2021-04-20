import React from 'react';
import { db } from '../firebase_config';
const  Delete = ({docId, setDocId}) => {

    db.collection("images").doc(docId).delete();setDocId(null);
    

  

    return (

        <div></div>

    )
        
}

export default Delete;

