import React from 'react'
import styles from './styles.module.css'
import { JSONSchema } from './JSONSchema'
import FormGenerator from './FormGenerator'
import { LayoutSchema } from './constants'

export default function Panel() {

    const JSONSchemaArray = JSONSchema.map((element, index) => {
        return <FormGenerator key={index} element={element} />
    })

    return (
        <div>
            {JSONSchemaArray}
        </div>
    )
}