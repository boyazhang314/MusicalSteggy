import React, { useState, useRef } from 'react'
import styles from './DragDrop.module.css'

export default function DragDrop({handleFiles}) {
    const [fileName, setFileName] = useState('')
    const [dragActive, setDragActive] = useState(false)
    const inputRef = useRef(null)
    
    const handleDrag = function(e) {
      e.preventDefault()
      e.stopPropagation()
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true)
      } else if (e.type === "dragleave") {
        setDragActive(false)
      }
    }
    
    const handleDrop = function(e) {
      e.preventDefault()
      e.stopPropagation()
      setDragActive(false)
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        setFileName(e.dataTransfer.files[0].name)
        handleFiles(e.dataTransfer.files)
      }
    }
    
    const handleChange = function(e) {
      e.preventDefault()
      if (e.target.files && e.target.files[0]) {
        setFileName(e.target.files[0].name)
        handleFiles(e.target.files)
      }
    }

    const onButtonClick = () => {
      inputRef.current.click()
    }

    const fileDisplay = fileName ? <div className='text-indigo-200 mt-5 select-none'>{fileName}</div> : ''
    
    return (
      <form className={styles.form} id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
        <input className={styles.input} ref={inputRef} id="input-file-upload"  type="file" multiple={false} onChange={handleChange} />
        <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
          {!dragActive &&
            <div>
              <p className="text-white font-bold select-none">Drag and drop your file here or</p>
              <button className="text-yellow-200 font-bold select-none" onClick={onButtonClick}>Upload a file</button>
              {fileDisplay}
            </div> 
          }
        </label>
        {dragActive && 
          <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>
            <img className='w-1/5' src='/images/Icon.png' />
          </div>
        }
      </form>
    );
  };