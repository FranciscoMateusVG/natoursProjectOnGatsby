import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ imagem, classe }) => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "logo-white.png" }) {
        id
        childImageSharp {
          fixed(width: 100, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      image2: file(relativePath: { eq: "logo-green-2x.png" }) {
        id
        childImageSharp {
          fixed(width: 100, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      photo1: file(relativePath: { eq: "nat-1-large.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      photo2: file(relativePath: { eq: "nat-2-large.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      photo3: file(relativePath: { eq: "nat-3-large.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      photo4: file(relativePath: { eq: "nat-8.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      photo5: file(relativePath: { eq: "nat-9.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  let image
  switch (imagem) {
    case "logo":
      image = data.image.childImageSharp.fixed
      return <Img fixed={image} className={classe} />

    case "logo2":
      image = data.image2.childImageSharp.fixed
      return <Img fixed={image} className={classe} />

    case "nat1":
      image = data.photo1.childImageSharp.fluid
      return <Img fluid={image} className={classe} />

    case "nat2":
      image = data.photo2.childImageSharp.fluid
      return <Img fluid={image} className={classe} />

    case "nat3":
      image = data.photo3.childImageSharp.fluid
      return <Img fluid={image} className={classe} />

    case "nat8":
      image = data.photo4.childImageSharp.fluid
      return <Img fluid={image} className={classe} />

    case "nat9":
      image = data.photo5.childImageSharp.fluid
      return <Img fluid={image} className={classe} />

    default:
      console.log("Não existe a imagem selecionada")
      break
  }
}

export default Image
