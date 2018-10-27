import { graphql, Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import { ISocialAccounts } from '../components/social-accounts'

interface Props {
  data: {
    allSocialAccountsJson: {
      edges: [
        {
          node: ISocialAccounts
        }
        ]
    }
  }
}

const IndexPage = ({ data }: Props) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">{data.allSocialAccountsJson.edges[0].node.name}</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query config {
    allSocialAccountsJson {
      edges {
        node {
          name
        }
      }
    }
  }
`