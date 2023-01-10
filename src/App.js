const Pet = (props) => {
    return React.createElement(
        "div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ]);
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {
                name: 'Rex',
                animal: 'Dog',
                breed: 'K-9'
            }),
            React.createElement(Pet, {
                name: 'Oyundi',
                animal: 'bird',
                breed: 'small'
            }),
            React.createElement(Pet, {
                name: 'puss',
                animal: 'cat',
                breed: 'brown'
            }),
        ]
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));