import React from 'react'
import styles from './styles.module.css'

export default function InputTextField({fields, ui}) {
    console.log(ui)
    return (
        <div style={{margin: "15px"}}>
            <div>{fields.label}</div>
            <input
                type="text"
                value={fields.value}
                style={ui}
            />
        </div>
    )
}