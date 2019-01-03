import * as React from 'react'
import './section.scss'

interface SectionProps {
  children: React.ReactNode
  color?: string
}

const Section: React.SFC<SectionProps> = props => {
  return (
    <div className="section uk-section" style={{ backgroundColor: props.color, minHeight: '100vh' }}>
      <div className="section uk-container uk-container-xsmall uk-text-center" style={{ border: 'solid 3px #ffffff' }}>
        {props.children}
      </div>
    </div>
  )
}

export default Section

Section.defaultProps = {
  color: '#FFF'
}
