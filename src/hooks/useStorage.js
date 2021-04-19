import { galleryStorage, db, timestamp } from '../firebase_config';
import {useState , useEffect} from 'react';

const useStorage = (uploadedInput) => {

const  [progress, setProgress] = useState(0);
const  [error, setError] = useState(null);
const  [url , setUrl] = useState(null);

useEffect(() => {
    
    const storageRef = galleryStorage.ref(uploadedInput.name);
    const collectionRef = db.collection("images");

    storageRef.put(uploadedInput).on('state_changed',(snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
    },
    (err) => {
        setError(err);
    },
    async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({url,createdAt})
        setUrl(url);
    })

}, [uploadedInput]);

    return { progress, url, error}

}

export default useStorage;