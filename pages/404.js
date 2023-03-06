import Link from 'next/link'
import Header from '../components/header/header'

export default function NotFound() {
  return <>
    <Header/>
    <h1>404 - Page Not Found</h1>
        <p>vish, n tem nada nesse link não</p>
    <Link href="/">
        Go back home
    </Link>
  </>
}