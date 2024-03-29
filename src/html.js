import React, {Component} from 'react'
import favicon from './assets/img/favicon.ico'
import { Link } from 'gatsby'


export default class HTML extends Component {
  render () {
    return (
      <html lang='fr'>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />
          {this.props.headComponents}
          <link rel='shortcut icon' href={favicon} />
        </head>
        <body>
          <div
            id='___gatsby'
            dangerouslySetInnerHTML={{__html: this.props.body}}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    ) 
  }
}
