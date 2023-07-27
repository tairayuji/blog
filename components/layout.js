import Header from 'components/header'
import Footer from 'components/footer'

const Layout = ({ Children }) => {
  return (
    <>
      <Header />
      <main>{Children}</main>
      <Footer />
    </>
  )
}
export default Layout
