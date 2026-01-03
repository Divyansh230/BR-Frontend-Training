//Creating custom react

// create element
const element1 = React.createElement(
    'h1', { className: "element", id: "first" },
    'Hello World! This is created using JavaScript'
);

ReactDOM.render(element1, root);