import { useState } from 'react';
import styles from './Task.module.css'
import { FaRegTrashAlt, FaCheck  } from "react-icons/fa";

export function Task({isChecked, ...props}){
  const [checked, setChecked] = useState(isChecked)

  function handleCheckboxChange(){
    setChecked(!checked)
  }

  return(
    <div className={styles.task}>
      <div className={styles.checkbox}>
        <input
        type="checkbox"
        id='myCheckbox'
        checked = {checked}
        onChange={handleCheckboxChange}
        />
        <label htmlFor="myCheckbox" className={styles.check}>
        <FaCheck />
        </label>
      </div>
      <p className={checked ? styles.checked : styles.unchecked}>{props.content}</p>
      <button>
        <FaRegTrashAlt />
      </button>
    </div>
  )
}