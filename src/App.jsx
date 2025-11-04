import logo from './imagens/spaceship.svg';
import './App.css';
import Formulario from './componentes/Formulario';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo-svg" alt="logo OrionX" />
        <h1>OrionX</h1>
      </header>

      <main>
        <section className='espaco-formulario'>

          <Formulario />

        </section>

      </main>
      <footer className='rodape'>
        <p>instagram | @orionX</p>
        <p>X | @orionX</p>
        <p>facebook | OrionX Oficial</p>
      </footer>
    </div>
  );
}

export default App;
