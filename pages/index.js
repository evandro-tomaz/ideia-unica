import { useState } from 'react';

function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <Contador />
        </div>
    )
}

function Contador() {
    const [cont, setCont] = useState(1);

    function addCont() {
        setCont(cont + 1);
    }

    return (
        <div>
            <h1>{cont}</h1><br />
            <button onClick={addCont}>Aumentar contador</button>
        </div>
    )
}

export default Home