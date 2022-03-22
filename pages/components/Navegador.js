import Link from 'next/link'

export default function Navegador({ active }) {
  return (
    <nav className='navbar sticky-top navbar-dark bg-dark navbar-expand-md justify-content-between'>
      <div className='container-fluid'>
        <Link href='/'>
          <a className='navbar-brand mr-auto'>António Travassos</a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className={"nav-item " + (active === 'videos' ? 'active' : '')}>
              <Link href="/videos">
                <a className="nav-link" aria-current="page">Vídeos</a>
              </Link>
            </li>
            <li className={"nav-item " + (active === 'contactos' ? 'active' : '')}>
              <Link href="/contactos">
                <a className="nav-link" aria-current="page">Contactos</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  )
}
