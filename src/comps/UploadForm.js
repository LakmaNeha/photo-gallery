import React,{useState} from 'react';
import ProgressBar from './ProgressBar';

const UploadForm =  () => {
   
    const [uploadedInput, setUploadedInput] = useState(null);
    const [error , setError ] = useState(null);
    const typeOfFilesAccepted =['image/png','image/jpeg'];

    function uploadHandler(event){
 
        let selected =  event.target.files[0];
        
        if(selected && typeOfFilesAccepted.includes(selected.type))
        {
            
                setUploadedInput(selected);
                setError('');
            
        }
        else{
            setUploadedInput(null);
            setError('Please select an image file (png or jpeg)');

        }
    }

    return (
        <form>
        <label>
        <input  id = "hide" type="file" onChange={uploadHandler} />
        <span>➕</span>
        </label>
        <div style={{letterSpacing:"2px"}}>
        <div style = {{color: "red",textAlign: "center" }}>
                {error}
        </div>
        {uploadedInput && <div>{uploadedInput.name}</div> }
        {uploadedInput && <ProgressBar uploadedInput={uploadedInput} setUploadedInput={setUploadedInput} />}
        </div>
        
        </form>
        
    )
}

export default  UploadForm;
   
