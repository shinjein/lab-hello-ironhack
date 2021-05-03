import React from 'react';
import './app.css';

function App() {
return (
    <div className="app">
    <section className="nav"> 
        <img className="banner-img" src="public/images/ironhack-logo.svg"/>
        <img className="banner-img" src="public/images/menu-top.svg" />
    </section>

    <section className="dark"> 
        <h1>
            Say Hello to React JS
        </h1>
        <p className="dark-text"> You will learn how to use the most popular 
        frontend library and become a super Ninja developer</p>
        <button>Awesome..</button>
    </section>
        <section className="section">
            <article className="parts">            
            <img src="/public/images/icon1.png"/>
                <h3>
                    Declarative
                </h3>
                <p>React makes it painless to create interactive UIs</p>
            </article>
            <article className="parts">
            <img src="/public/images/icon2.png"/>
                <h3>
                    Components
                </h3>
                <p>Build encapsulated components that manage their state</p>
            </article>
            <article className="parts">
            <img src="/public/images/icon3.png"/>
                <h3>
                    Single-Way
                </h3>
                <p>A set of immutable values are passed to the components</p>
            </article>
            <article className="parts">
            <img src="/public/images/icon4.png"/>
                <h3>
                    JSX
                </h3>
                <p>Statically-typed designed to run on modern browsers</p>
            </article>
        </section>
    </div>
)}

// function second() {
//     return (
//         <div className="">
//             <h3 className="app">Declarative</h3>
//             <h3 className="app">Components</h3>
//             <h3 className="app">Single-Way</h3>
//             <h3 className="app">JSX</h3>
//         </div>
//     )
// }

export default App;
