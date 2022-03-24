import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navegador() {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <nav>
      <div class="nav-wrapper">
        <Link href="/">
          <a class="brand-logo">António Travassos</a>
        </Link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <Link href="/videos">
              <a>Vídeos</a>
            </Link>
          </li>
          <li>
            <Link href="/contactos">
              <a>Contactos</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    //<a className={'nav-link ' + (router.pathname === '/videos' ? 'active' : '')} aria-current="page">*/
  );
}
