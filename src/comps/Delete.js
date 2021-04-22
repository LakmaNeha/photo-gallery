import React from 'react';
import { galleryStorage , db } from '../firebase_config';
const  Delete = ({docId, setDocId, delUrl, setDelUrl}) => {

    db.collection("images").doc(docId).delete();
    setDocId(null);
    let pictureRef = galleryStorage.refFromURL(delUrl);
   
    pictureRef.delete()

    setDelUrl(null);

    return (

        <div></div>

    )
        
}

export default Delete;

