import React from 'react'
import TextInputField from './TextInputField'
import styles from './styles.module.css'

export default function LeftPanel() {

    const userInfo = [
        {value: "Jack", name:"*First Name"},
        {value: "Keates@smawins.com", name: "*Email"},
        {value: "******", name: "*Password"},
        {value: "COO", name: "*Job Title"},
        {value: "SMA, Inc.", name: "*Company"},
        {value: "[Enter Division or Department]", name: "*Division or Department"},
        {value: "Keates", name: "*Last Name"},
        {value: "(949)975-1550", name: "*Office Phone"},
        {value: "(949)969-1804", name: "*Mobile Phone"}
    ]
    const inputFieldArray = userInfo.map((user) => {
        return <TextInputField value={user.value} name={user.name}/>
    })
    return (
        <div className={styles.inputPanel}>
            {inputFieldArray}
        </div>
    )
}