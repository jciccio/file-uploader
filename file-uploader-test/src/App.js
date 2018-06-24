import React, { Component } from 'react';
import FileUploader from 'file-uploader-js';
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
          <h1 className="App-title">File-uploader-js Component</h1>
        </header>

        <div>
          <FileUploader
            title="Please upload a CSV file"
            uploadedFileCallback={e => {
              this.uploadedCsv(e);
            }}
            accept=".csv"
          />
        </div>
      </div>
    );
  }
}

export default App;
