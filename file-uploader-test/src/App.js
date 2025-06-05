import React, { Component } from 'react';
import FileUploader from 'file-uploader-js';
import './App.css';

class App extends Component {

  uploadedCsv(file) {
    // Check the data type received from the uploader
    if (file.data) {
      const blob = new File([file.data], file.filename, { type: 'application/pdf' });
      console.log('📦 File size:', blob.size);

      // Test
      const fileURL = URL.createObjectURL(blob);
      window.open(fileURL);
    } else {
      console.error('No data received from file uploader.');
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">File-uploader-js Component</h1>
        </header>

        <div>
          <FileUploader
            isBinary={true}  // Set to true to handle binary files
            title="Please upload a CSV file"
            uploadedFileCallback={(file) => {
              this.uploadedCsv(file);  // Pass the file data to the callback
            }}
            accept=".csv, .pdf"  // Accept .csv and .pdf files
            maxFileSizeMB="1"  // Limit size to 1MB
            customLimitTextCSS={{
              fontFamily: 'arial',
              color: '#b00e05',
              fontSize: '14px'
            }}
          />
        </div>


        <div>
          <FileUploader
            title="Upload Your File"
            maxFileSizeMB={2}
            uploadedFileCallback={(file) => console.log(file)}
            renderInput={({ onChange, accept }) => (
              <button onClick={() => document.getElementById("hiddenUpload").click()} style={{borderRadius: '5px', }}>
                Custom Upload Button
                <input
                  type="file" 
                  name="fileUpload" 
                     

                  id="hiddenUpload"
                  type="file"
                  accept={accept}
                  onChange={onChange}
                  style={{ display: "none" }}
                />
              </button>
            )}
            renderLoader={() => <span>Loading...</span>}
            renderLimitText={(max) => <p style={{ color: "red" }}>Too big! Max {max}MB.</p>}
            renderContainer={(children) => <section className="custom-wrapper">{children}</section>}
          />
        </div>


      </div>
    );
  }
}

export default App;
