import React, {useState} from 'react'
import styles from './styles.module.css'
import { JSONSchema } from './JSONSchema'
import FormGenerator from './FormGenerator'
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

export default function Panel() {
    const stringJSON = JSON.stringify(JSONSchema, null, '\t')
    const [JSONObj, setJSONObj] = useState(stringJSON)
    const [finalJSON, setFinalJSON] = useState(stringJSON)

    const JSONSchemaArray = JSON.parse(finalJSON).map((element, index) => {
        return <FormGenerator key={index} element={element} />
    })

    const onChange = (newValue) => {
        setJSONObj(newValue)
    }

    const onSubmit = () => {
        setFinalJSON(JSONObj)
    }

    return (
        <div className={styles.gridView}>
            <div>
                {JSONSchemaArray}
            </div>
            <div>
                <AceEditor
                    placeholder="Placeholder Text"
                    mode="javascript"
                    theme="monokai"
                    name="blah2"
                    fontSize={22}
                    height="800px"
                    width="700px"
                    onChange={onChange}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    value={JSONObj}
                    setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: false,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 2,
                }}/>
                <button
                    style={{margin: "15px", padding: "15px", fontSize: "large", fontWeight: "bold"}}
                    onClick={onSubmit}
                >
                    SUBMIT
                </button>
            </div>
        </div>
    )
}