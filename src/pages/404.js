import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import NotFoundSection from "../components/NotFoundSection/NotFoundSection";

export default function notFound({ data }) {
  const { edges: sections } = data.allMdx;

  return (
    <Layout sections={sections}>
      <NotFoundSection />
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
