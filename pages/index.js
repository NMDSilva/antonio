import Cabecalho from './components/Cabecalho';
import Navegador from './components/Navegador';

export default function Home() {
  return (
    <div>
      <Cabecalho />
      <Navegador />

      <main className="container"></main>

      <footer></footer>
    </div>
  );
}
