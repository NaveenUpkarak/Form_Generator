import React from 'react'


export default function TwoColumnLayout({leftChild, rightChild}) {
    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            {leftChild}
            {rightChild}
        </div>
    )
}