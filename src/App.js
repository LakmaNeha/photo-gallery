import React , {useState} from 'react';
import './App.css';
import ImgeGrid from './comps/ImgeGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function App() {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
     <Title/>
     <UploadForm/>
     
    <ImgeGrid setSelectedImage={setSelectedImage} />
    {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/> }
     
     
    </div>
  );
}

export default App;
