import Link from 'next/link'
import Title from '../components/title/title';
import utils from '../styles/utils.module.scss';
export default function NotFound() {
  return <>
  <Title>Página não encontrada</Title>
  <div style={{
    flex: 1,
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center',
    height: '100% '
  }}>
    <h1>404 - Page Not Found</h1>
        <p>Oh, nej! Parece que nesse link não tem nada :(</p>

    <Link href="/" className={utils.links}>Clique aqui para voltar para o menu principal e continuar explorando!</Link>
  </div>
  </>
}