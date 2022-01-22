import Image from "next/image";
import Link from "next/link";

export default function Member({ member }) {
  const { firstName, lastName, affiliation, avatar, link } = member;
  const { url } = avatar.data.attributes;
  return (
    <div className="col-lg-12 mb-4">
      <Link href={link}>
        <div className="d-flex" role="button">
          <div>
            <Image
              src={`${
                url.startsWith("/")
                  ? process.env.NEXT_PUBLIC_STRAPI_API_URL
                  : ""
              }${url}`}
              className="avatar"
              alt={`${firstName} ${lastName} avatar`}
              width={avatar.data.attributes.width}
              height={avatar.data.attributes.height}
            />
          </div>
          <div className="d-flex align-items-start flex-column ms-3 justify-content-start">
            <span>
              <b>{`${firstName} ${lastName}`}</b>
            </span>
            <span className="color-gray-scale-label">{affiliation}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
