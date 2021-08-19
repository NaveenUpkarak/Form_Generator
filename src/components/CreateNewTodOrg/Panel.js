import React from 'react'
import styles from './styles.module.css'
import { JSONSchema, testSchema } from './JSONSchema'
import FormGenerator from './FormGenerator'
import { LayoutSchema } from './constants'

export default function Panel() {

    // const layout = Object.keys(LayoutSchema)[0]

    console.log(Object.entries(testSchema))

    const JSONSchemaArray = Object.entries(testSchema).map((field) => {
        return <FormGenerator field={field} />
    })

    // const inputFieldArray = JSONSchema.map((user) => {
    //     return <TextInputField value={user.value} name={user.name}/>
    // })

    return (
        <div className={styles.inputPanel}>
            {/* {inputFieldArray} */}
            {JSONSchemaArray}
        </div>
    )
}