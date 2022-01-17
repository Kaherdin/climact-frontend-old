import Header from "../sections/header"

export default function Layout({ children, pageName }) {
  return (
    <div className="container wrapper p-0">
      <div className="header-wrapper w-100 p-relative bottom-3 p-relative ">
        <Header />
      </div>
      <main>{children}</main>
    </div>
  )
}
