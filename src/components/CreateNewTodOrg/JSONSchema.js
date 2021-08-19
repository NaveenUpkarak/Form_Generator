export const JSONSchema = {
    field_1: {
        component: {
            tag: "input",
            type: "text",
            value: "text1",
            label: "TEXT1"
        },
        ui: {

        },
        layout: {
            name: "two_column_layout",
            position: "left_child"
        }
    },
    field_2: {
        component: {
            tag: "input",
            type: "text",
            value: "text2",
            label: "TEXT2" 
        },
        ui: {

        },
        layout: {
            name: "two_column_layout",
            position: "right_child"
        }
    }
}

export const testSchema = {
    two_column_layout: {
        left_child: {
            component: {
                tag: "input",
                type: "text",
                value: "text1",
                label: "TEXT1"
            },
            ui: {
    
            },
        },
        right_child: {
            component: {
                tag: "input",
                type: "text",
                value: "text2",
                label: "TEXT2"
            },
            ui: {
    
            },
        }
    }
}