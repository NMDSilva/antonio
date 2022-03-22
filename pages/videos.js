import Cabecalho from "./components/Cabecalho"
import Navegador from "./components/Navegador"

const videos = () => {
  return (
    <div>
      <Cabecalho />
      <Navegador active='videos' />
      <h1>Videos</h1>
    </div>
  );
}

export default videos;