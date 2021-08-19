import React from 'react'
import styles from './styles.module.css'

export default function InputField({values}) {
    return (
        <div className={styles.inputBox}>
            <label>{values.label}</label>
            <input
                type={values.type}
                value={values.value}
                className={styles.inputField}
            />
        </div>
    )
}