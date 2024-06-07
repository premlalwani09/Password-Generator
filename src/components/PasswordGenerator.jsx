import React, { useState } from 'react';
import './PasswordGenerator.css';

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const generatePassword = () => {
    if (length < 8 || length > 50) {
      setError('Password length must be between 8 and 50 characters.');
      return;
    }

    setError('');

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
    navigator.clipboard.writeText(password).then(() => {
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
          onChange={(e) => {
            setLength(Number(e.target.value));
            setPassword('');
          }}
          min="8"
          max="50"
        />
      </label>
      {error && <p className="error">{error}</p>}
      <label>
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={(e) => {
            setIncludeUppercase(e.target.checked);
            setPassword('');
          }}
        />
        Include Uppercase
      </label>
      <label>
        <input
          type="checkbox"
          checked={includeLowercase}
          onChange={(e) => {
            setIncludeLowercase(e.target.checked);
            setPassword('');
          }}
        />
        Include Lowercase
      </label>
      <label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={(e) => {
            setIncludeNumbers(e.target.checked);
            setPassword('');
          }}
        />
        Include Numbers
      </label>
      <label>
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={(e) => {
            setIncludeSymbols(e.target.checked);
            setPassword('');
          }}
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
          {copied ? 'Copied!' : 'Copy'}--+
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
