import baseAxios from "@/lib/baseAxios";

// Helper to make GET requests to Strapi with axios
export async function fetchAxiosAPI(path) {
  console.log(path);
  const response = await baseAxios.get(path, {
    headers: { Authorization: `Bearer ${process.env.JWT_STRAPI_ACCESS_TOKEN}` },
  });
  return response.data;
}
