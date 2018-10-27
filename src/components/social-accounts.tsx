import * as React from 'react'

export interface ISocialAccounts {
  name: string;
}

export class SocialAccounts extends React.Component<ISocialAccounts, object> {
  public render() {
    const { name } = this.props

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name}
        </div>
      </div>
    )
  }
}
