import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faWind } from "@fortawesome/free-solid-svg-icons";
import yiLeeAvatar from "../../public/assets/images/yi-lee-avatar.png";
import abelValionAvatar from "../../public/assets/images/abel-valion-avatar.png";
import logoDigitalRGB from "../../public/assets/images/EPFL_Logo_Digital_RGB_PROD.png";
import logoPartnerSwisscom from "../../public/assets/images/Logo-Partner-Swisscom-2017.png";
import eWebGoalOne from "../../public/assets/images/E-WEB-Goal-01.png";
import eWebGoalTwo from "../../public/assets/images/E-WEB-Goal-02.png";
import eWebGoalThree from "../../public/assets/images/E-WEB-Goal-03.png";
import mountain from "../../public/assets/images/image_468.png";
import coffee from "../../public/assets/images/coffee.png";
import Image from "next/image";

import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";

const cardStyle = {
  width: "22rem",
  marginRight: "2rem",
  borderRadius: "25px",
  border: "0px",
};

const buttonStyle = {
  borderRadius: "12px",
  padding: "1.25rem 1.75rem",
  fontWeight: "500",
};

const CardTitleStyle = {
  fontWeight: 700,
  fontSize: "20px",
  paddingTop: "0.25rem",
  paddingBottom: "0.5rem",
};

const cardBodyStyle = {
  padding: "2rem",
};

export default function Content() {
  return (
    <div className="content__wrapper border-radius-25 px-5 py-4">
      <h2 className="content__wrapper__title">Act now for change</h2>
      <div className="empty-spacing-15"></div>
      <p className="size-20">
        A subititle for your landing page describing your product or service
        that you provide.
      </p>
      <div className="empty-spacing-50"></div>
      <div className="row">
        {/* Left side */}
        <div className="col-7 p-relative">
          {/* Context section */}
          <h4 className="block__title">Context</h4>
          <div className="block__content">
            Iaculis ut interdum purus aliquam vestibulum quisque tempus. At
            suspendisse egestas pellentesque sit. Neque imperdiet eget pharetra,
            tristique fermentum massa dignissim.
          </div>
          {/* End Context section */}

          <div className="empty-spacing-60"></div>

          {/* Goals section */}
          <h4 className="block__title">Goals</h4>
          <div className="empty-spacing-10"></div>
          <div className="d-flex block__content align-items-center mb-3">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faBolt} size="2x" color="#CDCFF5" />
            </div>
            <div className="text-wrapper">Reduce energy consumption by 50%</div>
          </div>
          <div className="d-flex block__content align-items-center">
            <div className="icon-wrapper">
              <FontAwesomeIcon
                icon={faWind}
                size="2x"
                rotate="180"
                color="#CDCFF5"
              />
            </div>
            <div className="text-wrapper">
              Produce 1 GWh/year with wind energy
            </div>
          </div>
          {/* End Goals section */}

          <div className="empty-spacing-40"></div>

          {/* Description section */}
          <h4 className="block__title">Description</h4>
          <div className="block__content">
            Lacus leo tristique volutpat, ultricies curabitur. Interdum enim,
            tincidunt neque euismod ultricies lorem. Maecenas vivamus enim
            praesent nisl tellus fermentum porttitor. Aliquam aliquam viverra
            lorem pellentesque. Proin tellus mauris, aliquet massa lectus sed
            donec. Pulvinar elementum ac facilisis tempor, malesuada lacus,
            magna ultrices. Facilisis quis nibh duis id. Cursus pulvinar
            malesuada diam mi. Tristique quis vitae non tempus nulla porttitor
            cursus purus. Libero, duis diam feugiat eget tempor. Id tristique
            pulvinar nec risus lectus. Platea pellentesque vitae laoreet elit
            risus. Augue maecenas turpis quam velit cursus orci integer urna.
            Pellentesque ipsum commodo placerat neque. Enim molestie praesent
            odio viverra. At morbi commodo, cursus at neque a nibh condimentum
            aliquam.
            <br />
            <br />
            Blandit pulvinar volutpat faucibus pretium viverra imperdiet nec.
            Vestibulum arcu dolor sit in nascetur euismod egestas sagittis
            varius. Nisi interdum vestibulum nullam nunc. Nec risus proin etiam
            sit vel elit ut tempor, rhoncus. Volutpat ultricies tempor
            adipiscing sapien magna sed ornare amet tempus.
          </div>
          {/* End Description section */}

          <div className="empty-spacing-40"></div>

          {/* Milestones section */}
          <h4 className="block__title">Milestones</h4>
          <div className="block__content d-flex milestones">
            <div className="line"></div>
            <div>
              <p className="title">Start</p>
              <label htmlFor="" className="circle"></label>
              <p className="date">11.21</p>
            </div>
            <div>
              <p className="title">M1</p>
              <label htmlFor="" className="circle"></label>
              <p className="date">03.22</p>
            </div>
            <div>
              <p className="title">M2</p>
              <label htmlFor="" className="circle"></label>
              <p className="date">07.22</p>
            </div>
            <div>
              <p className="title">End</p>
              <label htmlFor="" className="circle"></label>
              <p className="date">12.22</p>
            </div>
          </div>
          {/* End Milestones section */}

          <div className="empty-spacing-40"></div>

          {/* Docs & references Milestones section */}
          <h4 className="block__title">Docs & references</h4>
          <div className="block__content"></div>
          <ul className="ref">
            <li>
              <a href="#">1. Link 1</a>
            </li>
            <li>
              <a href="#">2. Link 2</a>
            </li>
            <li>
              <a href="#">3. Link 3</a>
            </li>
          </ul>
          {/* Docs & references Milestones section */}

          <div className="empty-spacing-40"></div>

          {/* Other projects section */}
          <h4 className="block__title">Other projects</h4>
          <div className="empty-spacing-10"></div>
          <div className="block__content d-flex">
            <Card style={cardStyle}>
              <CardImg
                alt="..."
                src={mountain.src}
                top
                style={{
                  borderTopLeftRadius: "25px",
                  borderTopRightRadius: "25px",
                }}
              ></CardImg>
              <CardBody style={cardBodyStyle}>
                <CardTitle style={CardTitleStyle}>
                  Example product title heading
                </CardTitle>
                <CardText>
                  Fermentum facilisis sed is nulla amet vulputate.
                </CardText>
                <Button
                  color="primary"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  style={buttonStyle}
                >
                  Discover
                </Button>
              </CardBody>
            </Card>
            <Card style={cardStyle}>
              <CardImg
                alt="..."
                src={coffee.src}
                top
                style={{
                  borderTopLeftRadius: "25px",
                  borderTopRightRadius: "25px",
                }}
              ></CardImg>
              <CardBody style={cardBodyStyle}>
                <CardTitle style={CardTitleStyle}>
                  Example product title heading
                </CardTitle>
                <CardText>
                  Fermentum facilisis sed is nulla amet vulputate.
                </CardText>
                <Button
                  color="primary"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  style={buttonStyle}
                >
                  Discover
                </Button>
              </CardBody>
            </Card>
          </div>

          {/* Other projects section */}
        </div>
        {/* End Left side */}

        <div className="col-1"></div>

        {/* Right side */}
        <div className="col-4">
          <div className="col-lg-12 mb-5">
            <h4 className="block__title">Team behind this project</h4>
            <div className="row">
              <div className="col-lg-12 mb-4">
                <div className="d-flex">
                  <div>
                    <Image
                      src={yiLeeAvatar}
                      className="avatar"
                      alt="Yi Lee avatar"
                    />
                  </div>
                  <div className="d-flex align-items-start flex-column ms-3 justify-content-start">
                    <span>
                      <b>Yi Lee</b>
                    </span>
                    <span className="color-gray-scale-label">Affliation</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="d-flex">
                  <div>
                    <Image
                      src={abelValionAvatar}
                      className="avatar"
                      alt="Abel Valion avatar"
                    />
                  </div>
                  <div className="d-flex align-items-start flex-column ms-3 justify-content-start">
                    <span>
                      <b>Abel Valion</b>
                    </span>
                    <span className="color-gray-scale-label">Affliation </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 mb-4">
            <h3>Partners</h3>
            <div className="row">
              <div className="col-lg-12">
                <div>
                  <Image src={logoDigitalRGB} alt="Logo digital RGB" />
                </div>
              </div>
              <div className="col-lg-12">
                <div>
                  <Image
                    src={logoPartnerSwisscom}
                    alt="Logo partner Swisscom"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="empty-spacing-40"></div>
          <div className="col-lg-12">
            <h4 className="block__title">Sustainable Development Goals</h4>
            <div className="row">
              <div className="col-lg-12">
                <div>
                  <span className="me-4">
                    <Image src={eWebGoalOne} />
                  </span>
                  <span className="me-4">
                    <Image src={eWebGoalTwo} />
                  </span>
                  <span>
                    <Image src={eWebGoalThree} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Right side */}
      </div>
    </div>
  );
}
