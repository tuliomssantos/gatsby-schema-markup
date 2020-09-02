import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"

const IndexPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            siteUrl
          }
        }
      }
    `
  )

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Guiding Digital",
    "description" : site.siteMetadata.description,
    "url": site.siteMetadata.siteUrl,
    "logo": "https://e7.pngegg.com/pngimages/859/906/png-clipart-tree-drawing-tree-branch-monochrome.png"
  }


  return (
    <div className="container">
      <SEO title="Home" schemaMarkup={schema} />
      <h1>Home Page</h1>
    </div>
  )
}

export default IndexPage
