import { Routes, Route } from "react-router-dom";
import { ContextoUsuario } from "./contextos/contexto.jsx";
import { useState } from 'react';
import Inscricao from "./componentes/inscricao.jsx";
import Candidatos from "./componentes/candidatos.jsx";
import Vagas from "./componentes/vagas.jsx";
import Erro404 from "./componentes/erro404.jsx";
import Home from "./componentes/home.jsx";

function App() {

  const [usuario, setUsuario] = useState({
    nome: "",
    logado: false
  });

  if (!usuario.logado) {
    return <ContextoUsuario.Provider value={[usuario, setUsuario]}>
      <Inscricao />
    </ContextoUsuario.Provider>;
  }
  else {
    return (
      <ContextoUsuario.Provider value={[usuario, setUsuario]}>
          <Routes>
            <Route path='/candidatos' element={<Candidatos />} />
            <Route path='/vagas' element={<Vagas />} />
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Erro404 />} />
          </Routes>
      </ContextoUsuario.Provider>
    );
  }
}

export default App;
