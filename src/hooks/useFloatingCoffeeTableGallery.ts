import { graphql, useStaticQuery } from "gatsby"
import { FluidObject } from "gatsby-image"

interface Query {
  allFile: {
    nodes: {
      id: string
      name: string
      publicURL: string
      childImageSharp: {
        fluid: FluidObject
      }
    }[]
  }
}

const useFloatingCoffeeTableGallery = () => {
  const data = useStaticQuery<Query>(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "content/gallery" }
          absolutePath: { regex: "/floating_coffee_table/" }
        }
        sort: { order: ASC, fields: name }
      ) {
        nodes {
          id
          name
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return data.allFile.nodes.map(node => ({
    ...node.childImageSharp,
    id: node.id,
    name: node.name,
    publicURL: node.publicURL,
  }))
}

export default useFloatingCoffeeTableGallery
