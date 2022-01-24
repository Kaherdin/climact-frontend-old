import Image from "next/image";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";
import Link from "next/link";

export default function OtherProject({ project, id }) {
  const { coverPhoto, projectTitle, subTitle } = project;
  const { url: coverPhotoUrl } = coverPhoto.data.attributes;
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
  return (
    <Card style={cardStyle}>
      <CardImg
        alt="..."
        src={`${
          coverPhotoUrl.startsWith("/")
            ? process.env.NEXT_PUBLIC_STRAPI_API_URL
            : ""
        }${coverPhotoUrl}`}
        top
        style={{
          borderTopLeftRadius: "25px",
          borderTopRightRadius: "25px",
          height: "200px",
        }}
      ></CardImg>
      <CardBody style={cardBodyStyle}>
        <CardTitle style={CardTitleStyle}>{projectTitle}</CardTitle>
        <CardText>{subTitle}</CardText>
        <Link href={`/projects/${id}`} passHref>
          <Button color="primary" href="#pablo" style={buttonStyle}>
            Discover
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
}
