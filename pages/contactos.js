import Cabecalho from "./components/Cabecalho"
import Navegador from "./components/Navegador"

export default function Contactos() {
  return (
    <div>
      <Cabecalho titulo="Contactos" />
      <Navegador active='contactos' />
      <h1>Contactos</h1>
    </div>
  )
}
