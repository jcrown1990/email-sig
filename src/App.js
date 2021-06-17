import React, { useState, createRef } from 'react';
import EmailSignature from './EmailSignature.jsx';
import logo from './images/GElogo.svg';
import './App.css';

function App() {
  const [name, setName] = useState('Jane Smith');
  const [pronoun, setPronoun] = useState('(she/her)');
  const [mobileNumber, setMobileNumber] = useState('+1 234 567 8901');
  const [teleNumber, setTeleNumber] = useState('+1 234 567 8900');
  const [industry, setIndustry] = useState('GE Aviation');
  const [family, setFamily] = useState('Commercial Engines');
  const [jobTitle, setJobTitle] = useState('Engineer');
  const [copied, setCopied] = useState(false);

  const iframe = createRef();

  const handleChangeName = (event) => {
    setName(event.target.value);
  }
  const handleFamily = (event) => {
    setFamily(event.target.value);
  }

  const handleChangeTitle = (event) => {
    setJobTitle(event.target.value);
  }

  const handleMobile = (event) => {
    setMobileNumber(event.target.value);
  }

  const handleTele = (event) => {
    setTeleNumber(event.target.value);
  }

  const handlePronoun = (event) => {
    setPronoun(event.target.value);
  }

  const handleIndustry = (event) => {
    setIndustry(event.target.value);
  }

  const getIframe = () => {
    return iframe.current.iframe.current.contentDocument;
  }

  const handleClickCopy = (event) => {
    event.preventDefault();

    const doc = getIframe();

    console.log(doc);

    doc.execCommand("selectAll");
    doc.execCommand("copy");

    setCopied(true);
  }

  return (
    <div className="App">
      <header className="App-header">

        <div className="filter"></div>
        <div className="header-wrapper">
          <div>
            <img src={logo} alt="GE Logo" />
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
          <label>First and Last Name</label>
          <input value={name} onChange={handleChangeName} />
        </div>
        <div className="field-wrapper">
          <label>Preferred pronouns</label>
          <input value={pronoun} onChange={handlePronoun} />
        </div>
        <div className="field-wrapper">
          <label>Job Title</label>
          <input value={jobTitle} onChange={handleChangeTitle} />
        </div>
        <div className="field-wrapper">
          <label>Customer Solution or Product Family</label>
          <input value={family} onChange={handleFamily} />
        </div>
        <div className="field-wrapper">
          <label>Telephone Number</label>
          <input value={teleNumber} onChange={handleTele} />
        </div>
        <div className="field-wrapper">
          <label>Mobile Number</label>
          <input value={mobileNumber} onChange={handleMobile} />
        </div>
        <div className="field-wrapper">
          <label>Industry Brand</label>
          <input value={industry} onChange={handleIndustry} />
        </div>
      </div>
      <div className="signature-container">
        <EmailSignature
          name={name}
          mobileNumber={mobileNumber}
          teleNumber={teleNumber}
          jobTitle={jobTitle}
          pronoun={pronoun}
          industry={industry}
          family={family}
          ref={iframe}
        />

        <button
          className="button copyButton"
          onClick={handleClickCopy}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}




export default App;
