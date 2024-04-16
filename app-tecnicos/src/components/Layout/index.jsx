import '../../css/Layout.css'

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className='layout-container'>
      {children}
    </div>
  )
}

export default Layout