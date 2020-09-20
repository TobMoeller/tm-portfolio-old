import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";

export default function Datenschutz({ data }) {
  const { edges: sections } = data.allMdx;

  return (
    <Layout sections={sections}>
      <section id="impressum">
        <div className="content">
          <h1>Datenschutz&shy;erkl&auml;rung</h1>
          <p>Hier ist Platz für deine Datenschutzerklärung</p>
        </div>
      </section>
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
