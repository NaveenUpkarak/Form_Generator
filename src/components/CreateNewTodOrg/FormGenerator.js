import React from 'react'
import TwoColumnLayout from '../Layouts/TwoColumnLayout/TwoColumnLayout'
import InputTextField from "../FormComponents/InputTextField/InputTextField"


export default function FormGenerator({element}) {
    const name = Object.keys(element)[0]
    const fieldValues = Object.values(element)[0]

    let component = <div></div>

    if (name === "two_column_layout") {
        component = <TwoColumnLayout fields={fieldValues}  />
    }
    if (name === "text_input") {
        component = <InputTextField fields={fieldValues.fields} ui={fieldValues.ui}/>
    }

    return (
        <div>
            {component}
        </div>
    )
}