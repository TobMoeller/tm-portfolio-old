import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import "./SkillList.css";

export default function SkillList({ skills, skillCaption, iconWidth = 32 }) {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(
          filter: {
            absolutePath: { regex: "/src/(pers_)?images{1}/" }
            relativeDirectory: { eq: "icons" }
          }
          sort: { order: ASC, fields: base }
        ) {
          edges {
            node {
              name
              relativePath
              publicURL
              id
            }
          }
        }
      }
    `
  );
  const { edges } = data.allFile;
  console.log(data);
  // console.log(skills.indexOf("xing"));
  // console.log(skills[1]); style in div: grid with repeat with skills.length
  return (
    <div className="skill-list">
      {skills !== undefined && edges !== undefined ? (
        edges
          .filter(({ node }) => skills.includes(node.name))
          .sort(
            ({ node }, { node: node2 }) => skills.indexOf(node.name) - skills.indexOf(node2.name)
          ) // sorts the imageURLs according to the received props
          .map(({ node }, index) => (
            <figure key={node.id} style={{ width: iconWidth + 30 }}>
              <img src={node.publicURL} alt="test" width={iconWidth} />
              <figcaption>
                {skillCaption !== undefined && skillCaption[index] !== undefined
                  ? skillCaption[index]
                  : node.name}
              </figcaption>
            </figure>
          ))
      ) : (
        <p>Oops, something went wrong</p>
      )}
    </div>
  );
}
