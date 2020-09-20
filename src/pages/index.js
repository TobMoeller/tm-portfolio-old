import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import Content from "../components/Content/Content";

export default function Home({ data }) {
  const { edges: sections } = data.allMdx;
  return (
    <Layout sections={sections}>
      <Content sections={sections} />
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___order, order: ASC }
      filter: { fileAbsolutePath: { regex: "/src/sections{1}/" } }
    ) {
      edges {
        node {
          slug
          body
          id
          frontmatter {
            lang
            title
          }
        }
      }
    }
  }
`;
