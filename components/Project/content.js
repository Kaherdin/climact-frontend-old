import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faWind } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Member from "./Member";
import Partner from "./Partner";
import Sdg from "./Sdg";
import OtherProject from "./OtherProject";

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

export default function Content({ project, otherProject }) {
  const { id, attributes } = project;
  const {
    projectTitle,
    subTitle,
    coverCaption,
    milestones,
    members,
    partners,
    sdgs,
    coverPhoto,
    challenge,
  } = attributes;
  const { url: coverPhotoUrl } = coverPhoto.data.attributes;
  return (
    <>
      <section className="top-image-wrapper">
        <Image
          src={`${
            coverPhotoUrl.startsWith("/")
              ? process.env.NEXT_PUBLIC_STRAPI_API_URL
              : ""
          }${coverPhotoUrl}`}
          alt={projectTitle}
          layout="fill"
        />
      </section>
      <div className="content__wrapper border-radius-25 px-5 py-4">
        <h2 className="content__wrapper__title">{projectTitle}</h2>
        <div className="empty-spacing-15"></div>
        <p className="size-20">{subTitle}</p>
        <div className="empty-spacing-50"></div>
        <div className="row">
          {/* Left side */}
          <div className="col-7 p-relative">
            {/* Context section */}
            <h4 className="block__title">Context</h4>
            <div className="block__content">{coverCaption}</div>
            {/* End Context section */}

            <div className="empty-spacing-60"></div>

            {/* Goals section */}
            <h4 className="block__title">Goals</h4>
            <div className="empty-spacing-10"></div>
            <div className="d-flex block__content align-items-center mb-3">
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faBolt} size="2x" color="#CDCFF5" />
              </div>
              <div className="text-wrapper">
                Reduce energy consumption by 50%
              </div>
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
            {challenge.data && (
              <>
                <h4 className="block__title">Description</h4>
                <div className="block__content">
                  {challenge.data.attributes.description}
                </div>
              </>
            )}

            {/* End Description section */}

            <div className="empty-spacing-40"></div>

            {/* Milestones section */}
            <h4 className="block__title">Milestones</h4>
            <div className="block__content d-flex milestones">
              <div className="line"></div>
              {milestones.data.map((milestone, index) => {
                const { attributes, id } = milestone;
                return (
                  <div key={id}>
                    <p className="title">{attributes.title}</p>
                    <label htmlFor="" className="circle"></label>
                    <p className="date">{attributes.number}</p>
                  </div>
                );
              })}
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
            {otherProject.length > 0 && (
              <>
                <h4 className="block__title">Other projects</h4>
                <div className="empty-spacing-10"></div>
                <div className="block__content d-flex">
                  {otherProject.map((project) => {
                    const { id, attributes } = project;
                    return (
                      <OtherProject
                        key={id}
                        project={attributes}
                        id={id}
                      ></OtherProject>
                    );
                  })}
                </div>
              </>
            )}

            {/* Other projects section */}
          </div>
          {/* End Left side */}

          <div className="col-1"></div>

          {/* Right side */}
          <div className="col-4">
            <div className="col-lg-12 mb-5">
              <h4 className="block__title">Team behind this project</h4>
              <div className="row">
                {members.data.map((member) => {
                  const { id, attributes } = member;
                  return <Member key={id} member={attributes}></Member>;
                })}
              </div>
            </div>
            {partners.data.length > 0 && (
              <>
                <div className="col-lg-12 mb-4">
                  <h3>Partners</h3>
                  <div className="row">
                    {partners.data.map((partner) => {
                      const { id, attributes } = partner;
                      return <Partner key={id} partner={attributes}></Partner>;
                    })}
                  </div>
                </div>
                <div className="empty-spacing-40"></div>
              </>
            )}
            {sdgs.data.length > 0 && (
              <div className="col-lg-12">
                <h4 className="block__title">Sustainable Development Goals</h4>
                <div className="row">
                  <div className="col-lg-12">
                    <div>
                      {sdgs.data.map((sdg) => {
                        const { id, attributes } = sdg;
                        return <Sdg key={id} sdg={attributes}></Sdg>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* End Right side */}
        </div>
      </div>
    </>
  );
}
