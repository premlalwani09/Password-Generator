import React, { useState, useEffect } from 'react';

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {

    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let characters = '';

    if (includeLowercase) characters += lowercase;
    if (includeUppercase) characters += uppercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;


    let generatedPassword = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);

  };


  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
    .then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };


  return (
    <div className="password-generator">
      <h1>Password Generator</h1>
      <label>
        Length:
        <input
          type="number"
          placeholder={length}
          onChange={(e) => setLength(Number(e.target.value))}
          min="8"
          max="50"
        />
      </label>
      <label>
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={(e) => setIncludeUppercase(e.target.checked)}
        />
        Include Uppercase
      </label>
      <label>
        <input
          type="checkbox"
          checked={includeLowercase}
          onChange={(e) => setIncludeLowercase(e.target.checked)}
        />
        Include Lowercase
      </label>
      <label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
        Include Numbers
      </label>
      <label>
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={(e) => setIncludeSymbols(e.target.checked)}
        />
        Include Symbols
      </label>
      <button onClick={generatePassword}>Generate Password</button>
      <div className="password-container">
        <input
          type="text"
          readOnly
          value={password}
        />
        <button onClick={copyToClipboard}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;