import Header from './Header'

export default function Layout({ title, description, keywords, children }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
    </>
  )
}