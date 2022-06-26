import React from 'react'
import styles from './DragDrop.module.css'

export default function DragDrop({handleFiles}) {
    const [dragActive, setDragActive] = React.useState(false);
    const inputRef = React.useRef(null);
    
    const handleDrag = function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
      } else if (e.type === "dragleave") {
        setDragActive(false);
      }
    };
    
    const handleDrop = function(e) {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFiles(e.dataTransfer.files);
      }
    };
    
    const handleChange = function(e) {
      e.preventDefault();
      if (e.target.files && e.target.files[0]) {
        handleFiles(e.target.files);
      }
    };

    const onButtonClick = () => {
      inputRef.current.click();
    };
    
    return (
      <form className={styles.form} id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
        <input className={styles.input} ref={inputRef} id="input-file-upload"  type="file" multiple={false} onChange={handleChange} />
        <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
          <div>
            <p className="text-white">Drag and drop your file here or</p>
            <button className="text-white" onClick={onButtonClick}>Upload a file</button>
          </div> 
        </label>
        { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
      </form>
    );
  };