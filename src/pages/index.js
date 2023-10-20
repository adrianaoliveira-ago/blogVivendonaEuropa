import * as React from "react"
import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "./index.css"
import Date from "../components/date"
import PhotoCover from "../components/photoCover"
import AboutMe from "../components/aboutMe"
import SeparatorImage from "../components/separatorImage"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <div className="main-container">
        {/* <Bio /> */}
        <AboutMe />
        <SeparatorImage />

        <ol style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <Link
                    to={post.fields.slug}
                    itemProp="url"
                    className="index-link-post"
                  >
                    <div className="index-header-container">
                      <h2 className="index-title">
                        {title}
                        {/* <span itemProp="headline"></span> */}
                      </h2>
                      <Date month={post.frontmatter.date} />
                    </div>

                    <PhotoCover image={post.frontmatter.featuredImage} />

                    <section>
                      <p
                        className="index-description-post"
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                  </Link>
                </article>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 1240)
            }
          }
        }
      }
    }
  }
`
