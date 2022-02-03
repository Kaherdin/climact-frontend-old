import Image from "next/image";

export default function Sdg({ sdg }) {
  const { title, image } = sdg;
  const { url } = image.data.attributes;
  return (
    <span className="me-4">
      <Image
        src={`${
          url.startsWith("/") ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ""
        }${url}`}
        alt={title}
        width={image.data.attributes.width}
        height={image.data.attributes.height}
      />
    </span>
  );
}
