import React, { Component } from 'react';
import EmailSignature from './EmailSignature.jsx';
import logo from './images/GElogo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // Email signature form.
      name: 'Jane Smith',
      pronoun: '(she/her)',
      mobileNumber: '+1 234 567 8901',
      teleNumber: '+1 234 567 8900',
      jobTitle: 'Engineer',
      industry: 'GE Aviation',
      family: 'Commercial Engines',
      copied: false,
    };

    this.iframe = React.createRef();
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleMobile= this.handleMobile.bind(this);
    this.handleTele= this.handleTele.bind(this);
    this.handlePronoun= this.handlePronoun.bind(this);
    this.handleIndustry= this.handleIndustry.bind(this);
    this.handleFamily= this.handleFamily.bind(this);
    this.handleClickCopy= this.handleClickCopy.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleFamily(event) {
    this.setState({ family: event.target.value });
  }

  handleChangeTitle(event){
    this.setState({ jobTitle: event.target.value});
  }

  handleMobile(event){
    this.setState({ mobileNumber: event.target.value});
  }

  handleTele(event){
    this.setState({ teleNumber: event.target.value});
  }

  handlePronoun(event){
    this.setState({ pronoun: event.target.value});
  }
  handleIndustry(event){
    this.setState({ industry: event.target.value});
  }
  getIframe() {
    return this.iframe.current.iframe.current.contentDocument;
  }

  handleClickCopy(event) {
    event.preventDefault();

     const doc = this.getIframe();

     console.log(doc);
    
     doc.execCommand("selectAll");
     doc.execCommand("copy");

     this.setState({'copied': true });
  }

  render() {

    const { copied } = this.state;

    return (
      <div className="App">
        <header className="App-header">

          <div className="filter"></div>
          <div className="header-wrapper">
            <div>
            <img src={logo} alt="GE Logo"/>
            <h1 className="App-title">Email Signature Builder</h1>
            </div>
          </div>
          <ul>
            <li>1. Fill in your details</li>
            <li>2. Click Copy</li>
            <li>4. Open Outlook Signatures paste and apply</li>
            <li>5. Done! </li>
          </ul>
        </header>
        <div className="line-one"></div>
        <div className="App-intro">
          <div className="field-wrapper">
            <label>Enter your Name</label>
            <input value={this.state.name} onChange={this.handleChangeName}/>
          </div>
          <div className="field-wrapper">
            <label>Enter your preferred pronouns</label>
            <input value={this.state.pronoun} onChange={this.handlePronoun}/>
          </div>
          <div className="field-wrapper">
            <label>Enter your Job Title</label>
            <input value={this.state.jobTitle} onChange={this.handleChangeTitle}/>
          </div>
          <div className="field-wrapper">
            <label>Enter your Customer Solution or Product Family</label>
            <input value={this.state.family} onChange={this.handleFamily}/>
          </div>
          <div className="field-wrapper">
            <label>Enter your Telephone Number</label>
            <input value={this.state.teleNumber} onChange={this.handleTele}/>
          </div>
          <div className="field-wrapper">
            <label>Enter your Mobile Number</label>
            <input value={this.state.mobileNumber} onChange={this.handleMobile}/>
          </div>
          <div className="field-wrapper">
            <label>Enter your Industry Brand</label>
            <input value={this.state.industry} onChange={this.handleIndustry}/>
          </div>
        </div>
        <div className="signature-container">

          <EmailSignature
            name={this.state.name}
            mobileNumber={this.state.mobileNumber}
            teleNumber={this.state.teleNumber}
            jobTitle={this.state.jobTitle}
            pronoun={this.state.pronoun}
            industry={this.state.industry}
            family={this.state.family}
            ref={this.iframe}
            />

            <button
            className="button copyButton"
            onClick={this.handleClickCopy}
            onBlur={this.handleBlurCopy}
            >
          { copied ? 'Copied!' : 'Copy' }
          </button>

        </div>
      </div>
    );
  }
}

export default App;
