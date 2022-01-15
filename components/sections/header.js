import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import logo from "../../public/assets/images/logo.png";

const buttonStyle = {
  padding: "0.5rem 1.25rem",
  borderRadius: "8px",
  outline: "2px",
};

export default function Header() {
  return (
    <div className="d-flex absolute justify-content-between align-items-center pb-2 pt-4 px-5 w-100">
      <div>
        <img src={logo.src} alt="" />
      </div>
      <div className="d-flex w-40 justify-content-between align-items-center">
        <ul className="nav d-flex w-100 justify-content-between align-items-center">
          <li className="nav-item mx-4">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item mx-4">
            <a className="nav-link active" href="#">
              Projects
            </a>
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
