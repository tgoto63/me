import * as React from 'react'
import Section from '../components/section'
import './index.scss'
import { graphql } from 'gatsby'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import SiteMetadata from './siteMetadata'
import ScrollReveal from 'scrollreveal'

// UIKit is undefined in static build
if (typeof UIkit.use === 'function') UIkit.use(Icons)

export interface ISocialAccounts {
  icon: string
  color: string
  name: string
  href: string
}

interface Props {
  data: {
    allSocialAccountsJson: {
      edges: [
        {
          node: ISocialAccounts
        }
      ]
    }
    allMediumPost: {
      edges: [
        {
          node: {
            id: string
            title: string
            virtuals: [
              {
                subtitle: string
                previewImage: {
                  imageId: string
                }
              }
            ]
            author: {
              name: string
            }
            uniqueSlug: string
          }
        }
      ]
    }
  }
}

export default class IndexPage extends React.Component<Props> {
  componentDidMount() {
    const config = {
      origin: 'top',
      duration: 1000,
      delay: 300,
      scale: 1,
      easing: 'ease',
      reset: true
    }

    ScrollReveal().reveal('.uk-grid', config)
  }

  render(): React.ReactNode {
    const socialAccounts = this.props.data.allSocialAccountsJson
    const mediumPosts = this.props.data.allMediumPost

    return (
      <React.Fragment>
        <SiteMetadata pathname={'/'} />

        {/*About*/}
        <Section color="#3498db">
          <h2>About</h2>
          <div className="uk-grid uk-grid-match uk-child-width-1-2@s">
            <div>
              <h3 className="slide-up">Takayuki Goto</h3>
              <p>I'm a application engineer.</p>
            </div>
            <div>
              <h3>Account</h3>
              {socialAccounts.edges.map(edge => (
                <p key={edge.node.name}>
                  <a
                    href={edge.node.href}
                    aria-label={edge.node.name}
                    rel="noopener"
                    target="_blank"
                    className="uk-icon-link "
                    uk-icon={'icon: ' + edge.node.icon + '; ratio: 2.5'}
                    style={{ color: '#ffffff' }}
                  />
                </p>
              ))}
            </div>
          </div>
        </Section>

        <Section color="#2ecc71">
          <h2>Carriers</h2>
          <div className="uk-grid uk-grid-match uk-child-width-1-2@s">
            <div>
              <h3>Skills</h3>
              <p>/(Java|Type)Script/</p>
              <p>AWS</p>
              <p>Angular</p>
            </div>
            <div>
              <h3>Carriers</h3>
              {/*<p>Freelancer 2019/2 ~</p>*/}
              <p>e-reverse.com Inc. 2016/01 ~ 2018/05</p>
              <p>Tokyo Systems Laboratories, Inc. 2010/04~2015/01</p>
            </div>
          </div>
        </Section>

        <Section color="#f1c40f">
          <h2>Activities</h2>
          <div className="uk-grid-match uk-child-width-1-3@s uk-grid">
            <div>
              <h3>Twitter</h3>
              <p>■■■■■■■■■■</p>
              <p>■■■■■■■■■■</p>
              <p>■■■■■■■■■■</p>
              <p>■■■■■■■■■■</p>
              <p>■■■■■■■■■■</p>
            </div>
            <div>
              <h3>Note</h3>
              <p>■■■■■■■■■■</p>
              <p>■■■■■■■■■■</p>
              <p>■■■■■■■■■■</p>
              <p>■■■■■■■■■■</p>
              <p>■■■■■■■■■■</p>
              <p>■■■■■■■■■■</p>
              <p>■■■■■■■■■■</p>
              <p>■■■■■■■■■■</p>
              <p>■■■■■■■■■■</p>
            </div>
            <div>
              <h3>Medium</h3>
              {mediumPosts.edges.map(edge => (
                <p>
                  <a
                    href={'https://medium.com/@catatsuy/' + edge.node.uniqueSlug}
                    aria-label={edge.node.title}
                    rel="noopener"
                    target="_blank"
                    style={{ color: '#ffffff' }}
                  >
                    {edge.node.title}
                  </a>
                </p>
              ))}
            </div>
          </div>
        </Section>

        {/* Applications */}
        <Section color="#e74c3c">
          <h2>Activities</h2>
          <div className="uk-grid-match uk-child-width-1-3@s uk-grid">
            <div>
              {/* Applications */}
              <h3>Applications</h3>
              <p>slashreader.net</p>
            </div>
          </div>
        </Section>

        <div className="uk-section" style={{ backgroundColor: '#2c3e50', minHeight: '50vh' }}>
          <div className="uk-container uk-container-small uk-text-center uktext">
            <p>
              The codes of this site is{' '}
              <a href="https://github.com/tgoto63/me" aria-label="tgoto63/me on Github" rel="noopener" target="_blank">
                HERE
              </a>
              .
            </p>
            <p>© 2019 - Copyright tgoto63.me, All Rights Reserved.</p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export const query = graphql`
  query config {
    allSocialAccountsJson {
      edges {
        node {
          icon
          color
          name
          href
        }
      }
    }
    allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          virtuals {
            subtitle
            previewImage {
              imageId
            }
          }
          author {
            name
          }
          uniqueSlug
        }
      }
    }
  }
`
