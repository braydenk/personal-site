import React from "react"
import Header from "./header"
import "./layout.css"

export default class Layout extends React.Component {

  render() {
    return (
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <Header siteTitle="Brayden Killeen" />
        {this.props.children}
      </div>
    )
  }
}
