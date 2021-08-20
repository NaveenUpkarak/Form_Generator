export const JSONSchema = [
    {
        two_column_layout: {
            left_child: {
                text_input: {
                    fields: {
                        value: "Jack",
                        label: "*First Name"
                    },
                    ui: {
                        width: "400px",
                        padding: "5px"
                    },
                }
            },
            right_child: {
                text_input: {
                    fields: {
                        value: "Keates",
                        label: "*Last Name"
                    },
                    ui: {
                        width: "400px",
                        padding: "5px"
                    },
                }
            }
        },
    },
    {
        text_input: {
            fields: {
                value: "Jack@gmail.com",
                label: "*Email"
            },
            ui: {
                width: "400px",
                padding: "5px"
            },
        },
    },
    {
        two_column_layout: {
            left_child: {
                text_input: {
                    fields: {
                        value: "COO",
                        label: "*Job Title"
                    },
                    ui: {
                        width: "400px",
                        padding: "5px"
                    },
                }
            },
            right_child: {
                text_input: {
                    fields: {
                        value: "19200 Von Karman Ave",
                        label: "*Street 1"
                    },
                    ui: {
                        width: "400px",
                        padding: "5px"
                    },
                }
            }
        },
    },
    {
        dropdown: {
            fields: {
                dropdown_content: {
                    link_1: "India",
                    link_2: "USA",
                    link_3: "Canada"
                },
                value: "Select Country",
                label: "*Country Code"
            },
            ui: {
                width: "400px",
                padding: "5px"
            },
        },
    },
]