import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SignUp from "../components/elements/SignUp"
import PostBox from "../components/PostBox"

const BlogIndex = ({ data, location, pageContext }) => {
  const posts = data.allMdx.edges
  return (
    <Layout location={location}>
      <div className="post-grid">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          let image
          if (node.frontmatter.image) {
            image = <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
          }
          return (
            <PostBox
              image={node.frontmatter.image ? node.frontmatter.image.childImageSharp.original.src : ""}
              title={title}
              description={node.frontmatter.description || node.excerpt}
              slug={node.fields.slug}
              key={node.fields.slug} />
          )
        })}
      </div>
      <SignUp />
      <SEO title={`Adventures`} />
    </Layout>
  )
}


export default BlogIndex

export const pageQuery = graphql`
  query Adventures {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { category: { eq: "adventure" }  draft: { eq: false } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
            image {
              childImageSharp {
                original { src }
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
