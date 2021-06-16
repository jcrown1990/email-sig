import React, { Component } from 'react';

class EmailSignature extends Component {

  constructor(props) {
    super(props);
    this.iframe = React.createRef();
  }

  componentDidMount() {
    this.renderIframe();
  }

  componentDidUpdate() {
    this.renderIframe();
  }

  renderIframe() {

    const content = `
    <html>
    <head>
    <title>Email Signature</title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    </head>
    <body style="font-family:'Arial',helvetica,sans-serif;margin:0;padding:0;" >
      <p style="margin: 0;">
      <span style="font-size: 12px; color: #005eb8;"><strong>${ this.props.name }</strong></span> <span style="color: #575757; font-size: 10.5px;">${ this.props.pronoun }</span>
      </p>
      <p style="margin: 0; font-size: 10.5px; color: #575757;">${ this.props.jobTitle }, ${ this.props.family }</p>
      <p style="margin: 0; font-size: 10.5px; color: #575757;">${ this.props.industry }</p>
      <p style="margin: 0; font-size: 10.5px;">&nbsp;</p>
      <p style="margin: 0; font-size: 10.5px; color: #575757;">T ${ this.props.teleNumber} |&nbsp; M ${ this.props.mobileNumber}</p>
      <p style="margin: 0; font-size: 10.5px;">&nbsp;</p>
      <p style="margin: 0; font-size: 10.5px;">&nbsp;</p>
      <p style="margin: 0; font-size: 10.5px; color: #005eb8;">Building a world that works</p>
    </body>
    </html>
    `;

    const doc = this.iframe.current.contentDocument || this.iframe.current.contentWindow.document;

    doc.write(content);
    doc.close();

  }

  render() {
    return <iframe title="This is a unique title" ref={this.iframe} width="400" height="150"/>;
  }
}

export default EmailSignature;
