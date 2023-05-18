import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Inicial from "./components/Inicial/Inicial";
import Projetos from "./components/Projetos/Projetos";
import Sobre from "./components/Sobre/Sobre";
import Contato from "./components/Contato/Contato";
import Linguagens from "./components/Linguagens/Linguagens";

const App = ( ) => {
    return (
        <>
       <Navbar />
       <main className='main'>
        <Inicial />
        <Sobre />
        <Projetos />
        <Linguagens />
        <Contato />
       </main>
       </>
    );
};

export default App