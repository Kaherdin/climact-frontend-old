import Layout from "@/components/Layout/index";
import Project from "@/components/Project/content";
import { fetchAxiosAPI } from "@/lib/request";
const qs = require("qs");

export default function ProjectPage({ project, otherProject }) {
  return (
    <Layout pageName="project">
      <Project project={project} otherProject={otherProject} />
    </Layout>
  );
}

export const getServerSideProps = async ({ query: { slug }, req }) => {
  const query = qs.stringify(
    {
      populate: {
        members: { populate: "avatar" },
        challenge: { populate: "*" },
        milestones: { populate: "*" },
        objectives: { populate: "*" },
        partners: { populate: "*" },
        sdgs: { populate: "*" },
        coverPhoto: { populate: "*" },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  const otherProjectQuery = qs.stringify(
    {
      populate: {
        coverPhoto: { populate: "*" },
      },
      sort: ["createdAt:desc"],
      pagination: {
        page: 1,
        pageSize: 2,
      },
      filters: {
        id: {
          $ne: slug,
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  const { data: project } = await fetchAxiosAPI(`/projects/${slug}?${query}`);
  const { data: otherProject } = await fetchAxiosAPI(
    `/projects/?${otherProjectQuery}`
  );
  console.log(otherProject);
  return { props: { project: project, otherProject: otherProject } };
};
