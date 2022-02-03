import Header from "../header";

export default function Layout({ children, pageName }) {
  return (
    <div className="wrapper p-0">
      <div className="header-wrapper w-100 p-relative bottom-3">
        <Header />
      </div>
      <main>{children}</main>
    </div>
  );
}
