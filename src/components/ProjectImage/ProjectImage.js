import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

export default function ProjectImage({ currentProject, projectTitle }) {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(
          filter: {
            absolutePath: { regex: "/src/(pers_)?images{1}/" }
            relativeDirectory: { eq: "projects" }
          }
          sort: { order: ASC, fields: relativePath }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  );

  const { edges } = data.allFile;
  // console.log(data);
  return (
    <React.Fragment>
      {edges.length ? (
        <Img
          fluid={edges[currentProject].node.childImageSharp.fluid}
          alt={`${projectTitle} thumbnail`}
        />
      ) : (
        <p>Picture not available</p>
      )}
    </React.Fragment>
  );
}
