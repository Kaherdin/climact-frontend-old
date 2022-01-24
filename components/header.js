import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import logo from "../public/assets/images/CLIMACT_Logo_CMJN.png";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
const buttonStyle = {
  padding: "0.5rem 1.25rem",
  borderRadius: "8px",
  outline: "2px",
};

export default function Header() {
  const router = useRouter();
  console.log(router);

  return (
    <div className="d-flex absolute justify-content-between align-items-center pb-2 pt-4 px-5 w-100">
      <span className="logo-image" style={{ width: "173px", height: "auto" }}>
        <Image src={logo} alt="Logo" />
      </span>
      <div className="d-flex w-40 justify-content-between align-items-center">
        <ul className="nav d-flex w-100 justify-content-between align-items-center">
          <li className="nav-item mx-4">
            <Link href="/home">
              <a
                className={
                  router.pathname == "/home" ? "nav-link active" : "nav-link"
                }
              >
                Home
              </a>
            </Link>
          </li>
          <li className="nav-item mx-4">
            <Link
              href={{
                pathname: "/projects/[slug]",
                query: { slug: 2 },
              }}
            >
              <a
                className={
                  router.pathname == "/projects/[slug]"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Projects
              </a>
            </Link>
          </li>
          <li className="nav-item mx-4">
            <a className="nav-link" href="#">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <Button outline color="primary" type="button" style={buttonStyle}>
              <span className="btn-inner--icon">
                <FontAwesomeIcon icon={faEnvelopeSquare} />
              </span>
              <span className="btn-inner--text"> Contact us</span>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
