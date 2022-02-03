import Image from "next/image";

export default function Partner({ partner }) {
  const { title, logo } = partner;
  const { url } = logo.data.attributes;
  return (
    <span className="me-4">
      <Image
        src={`${
          url.startsWith("/") ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ""
        }${url}`}
        alt={title}
        width={logo.data.attributes.width}
        height={logo.data.attributes.height}
      />
    </span>
  );
}
