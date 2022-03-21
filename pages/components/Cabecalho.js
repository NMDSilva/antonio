import Head from 'next/head'

export default function Cabecalho({ titulo = 'António Travassos' }) {
  return (
    <Head>
      <title>{titulo}</title>
      <meta name="description" content="António Travassos" />
    </Head>
  );
}

