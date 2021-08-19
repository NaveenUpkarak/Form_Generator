import React from 'react'
import TwoColumnLayout from './TwoColumnLayout'
import InputField from './InputField'


export default function FormGenerator({field}) {

    const name = field[0]
    const fieldValues = field[1]

    console.log(fieldValues.left_child.component.value)

    const leftChild = <InputField values={element.component} />
    return (
        <div>
            <TwoColumnLayout leftChild={leftChild} />
        </div>
    )
}