import React from 'react'
import InputTextField from './InputTextField'


export default function TwoColumnLayout({fields}) {
    const uiLeftChild = fields.left_child.text_input.ui
    const uiRightChild = fields.right_child.text_input.ui
    
    const leftChild = <InputTextField fields={fields.left_child.text_input.fields} ui={uiLeftChild} />
    const rightChild = <InputTextField fields={fields.right_child.text_input.fields} ui={uiRightChild} />

    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            {leftChild}
            {rightChild}
        </div>
    )
}