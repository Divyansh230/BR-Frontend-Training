function Header() {
    return <h1 > Welcome to Indian Election Commission < /h1>;
}

function Main() {
    return <h1 > This is information about us < /h1>;
}

function App() {
    return ( <
        div >
        <
        Header / >
        <
        Main / >
        <
        /div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( < App / > );