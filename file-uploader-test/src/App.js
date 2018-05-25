import React, { Component } from 'react';
import FileUploader from 'file-uploader';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  uploadedCsv(fileData) {
    console.log(fileData);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          <FileUploader
              title="Please upload the Re Enrollment csv file"
              uploadedFileCallback={e => {
                this.uploadedCsv(e);
              }}
            />

      </div>
    );
  }
}

export default App;
