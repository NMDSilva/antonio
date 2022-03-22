import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navegador() {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <nav className="navbar sticky-top navbar-dark bg-dark navbar-expand-md justify-content-between">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">António Travassos</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/videos">
                <a className={'nav-link ' + (router.pathname === '/videos' ? 'active' : '')} aria-current="page">
                  Vídeos
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contactos">
                <a className={'nav-link ' + (router.pathname === '/contactos' ? 'active' : '')} aria-current="page">
                  Contactos
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
