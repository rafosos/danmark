import Link from 'next/link'
import Title from '../components/title/title';

export default function NotFound() {
  return <>
  <Title>Página não encontrada</Title>
    <h1>404 - Page Not Found</h1>
        <p>vish, n tem nada nesse link não</p>
    <Link href="/">
        Go back home
    </Link>
  </>
}