const j1 = {
    name: "Divyansh",
    course: "AIML",
    place: "Lucknow",
}

//Converting to json
const json = JSON.stringify(j1);
console.log(json);

//Always notated as a String
const json_object = ` {
    "name": "Divyansh",
    "Category": "General"
}
`

const js_object = JSON.parse(json_object)
console.log(js_object);