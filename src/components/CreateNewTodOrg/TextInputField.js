import React from 'react'
import styles from './styles.module.css'

export default function TextInputField(props) {
    return (
        <div className={styles.inputBox}>
            <div className={styles.fieldName}>{props.name}</div>
            <input
                type="text"
                value={props.value}
                className={styles.inputField}
            />
        </div>
        
    )
}