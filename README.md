
![npm](https://img.shields.io/npm/dt/file-uploader-js.svg)
![npm](https://img.shields.io/npm/v/file-uploader-js.svg)
![npm](https://img.shields.io/npm/l/file-uploader-js.svg)


# file-uploader
React JS File Uploader Component

# Description

Simple react file upload component with loading throbber. 
Abstracts the FE loading functionality and invokes a callback function once the file has been already loaded with the appropriate data.
This was originally thought for text files.
Can accept specific file types if needed

**How to thank me?**
Just click on ⭐️ button or buy me a tea using the donation button below :)



# Installation

Install it from npm and include it in your React build process (using Webpack, Browserify, etc).

```
npm i file-uploader-js
```

```
yarn add file-uploader-js
```

# Usage

Import `FileUploader` in your react component.

```
import FileUploader from 'file-uploader-js';
```

and specify the callback function you want to call when the file is loaded.

While the file is loading, you'll see a loading throbber.

For example:

```javascript
<FileUploader
  accept=".csv"
  title="Please upload a CSV file"
  titleCss={{ color: "#000", fontFamily: "arial" }}
  uploadedFileCallback={e => {
    this.uploadedCsv(e);
  }}
/>
```

And then define the callback function

```javascript
uploadedCsv(fileData) {
    console.log(fileData);
    //Do stuff with the loaded file data
}
```

# Props

Props available:
* `title` (title that will have the upload component section as a label)
* `uploadedFileCallback` (callback function that will be invoked)
* `accept` (Types you want to filter and accept for uploads e.g ".csv")

Optionally you can handle errors with the following props:

* `onErrorCallback` (Error uploading and reading the file)
* `onAbortCallback` (Operation aborted)

| Name        | Type            | Mandatory | Description  
| ------------- |:-------------:| -----:|:-----|
| title      | String | N | Title you want to have in the uploader |
| uploadedFileCallback | Function callback     | Y|  Function to call on loaded data |
| accept | String    | N|  Filter to determine what file types you want to upload |
| onErrorCallback | Function callback    | N|  Function to call on loading error |
| onAbortCallback | Function callback    | N|  Function to call on loading abort |
| titleCss | Object    | N|  Styling for title |
| isBinary | present? | N| Is the file binary? Text file as default
| customLimitTextCSS | Object | N| Object to customize error title
| byteLimit | Number | N| Number in bytes to determine file size limit


# Donations

If you think that any information you obtained here is useful and worth of some money and are willing to pay for it, feel free to send any amount through Paypal :)

[![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2MSMEVFF9P33N)

You can also follow me on Patreon:
https://patreon.com/Jacware


# Changelog

### v0.3.3
* Dependencies updated
* React version updated
* Overall package size optimized

### v0.3.0
* Dependencies updated
* Overall package size optimized

### v0.2.7
* Added props to have a hard file size limit `byteLimit`
* Added new error message if the file exceeds the limit, can be configured with `customLimitTextCSS` prop

### v0.2.2
* Bug fixes typecheck added

### v0.2.1
* Read binary files

### v0.2.0
* Added accept prop
* Added styling prop for title

### v0.1.8
* Added callback support for abort and error handling


# License 

Licensed under the MIT License © [jciccio](https://www.npmjs.com/~jciccio)
