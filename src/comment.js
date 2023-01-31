import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector('#root'));

/*  didn't really feel like adding css but oh well
*   I think it got away from me a bit :)
*   still works though
*   lol
*/

function Avatar(props) {
    return (
        <div style={{
            "display": "flex",
            "flexDirection": "row",
            "alignItems": "baseline",
        }}>
            <img
                src={props.user.avatarUrl}
                alt={props.user.name}
                style={{
                    "borderRadius": "100%",
                    "width": 50,
                    "height": 50,
                }}
            />
            <p>{props.user.name}</p>
        </div>
    );
}

function Text(props) {
    return (
        <pre>{props.text}</pre>
    );
}

function FormattedDate(props) {
    return (
        <p>{new Date(props.time).toDateString()}</p>
    );
}

function Comment(props) {
    return (
        <div>
            <Avatar user={props.user} />
            <FormattedDate time={props.user.time /* oh who cares it's just an exmaple lol */} />
            <Text text={props.user.text} />
            <hr/>
        </div>
    );
}

// ----
// users

const greg123 = {
    avatarUrl: "https://placebear.com/50/50",
    name: "greg123",
    time: Date.now(),
    text: "comment? lorem ipsum dolor sit amet. sussy amon gus!",
}

const sharon456 = {
    avatarUrl: "https://placekitten.com/50/50",
    name: "sharon456",
    time: new Date(0),
    text: "I tihnk I accidentally used Greg and Sharon from Futilitycloset... uh... :)",
}

// -----

function App() {
    return (
        <div>
            <Comment user={greg123} />
            <Comment user={sharon456} />
        </div>
    );
}

root.render(<App />);