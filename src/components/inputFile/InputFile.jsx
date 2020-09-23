import React, {useState,useEffect} from 'react';
import { MdImage } from 'react-icons/md'

const InputFile = ({widt, height, placeholder = 'Add something'}) => {

  const [nameFile, setNameFile] = useState('') 

  const handleInputFile = (ev) => {
    setNameFile(ev.currentTarget.files[0].name)
  }

  return (
      <div className="input-file__view">
        <input type="file" onChange={handleInputFile} />
        <p>
          { nameFile.length > 0 ? nameFile : placeholder }
        </p>
        <MdImage size="24" />
      </div>
  );
} 

export default InputFile;
