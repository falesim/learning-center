import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Card from '../components/TOCCard'

import './index.css'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query HomepageTOC {
        site {
          siteMetadata {
            title
            subtitle
            description
            keywords
          }
        }
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___order] }
        ) {
          edges {
            node {
              id
              frontmatter {
                date(formatString: "MMM DD, YYYY")
                order
                path
                title
              }
            }
          }
        }
      }
    `}
    render={(props) => (
      <div className='index'>
        <div className='jumbotron gradient'>
          <h1>{props.site.siteMetadata.title}</h1>
          <h2>{props.site.siteMetadata.subtitle}</h2>
        </div>

        <Card title='Activities' content={props.allMarkdownRemark.edges} />
      </div>
    )}
  />
)

export default IndexPage