## cdb-training-web-part
Options for education SharePoint, Teams and User Adoption Podcasts. Business videos are yet to be populated - coming soon.

## Quick Download
1. <a href="https://github.com/CloudDesignBox/cdbTrainingWebPart/raw/master/Release/cdb-training-web-part.sppkg">Download Package Here</a>
2. Drag and drop this into your SharePoint App Catalog
3. If you want to use this in Teams, Select the app and in the ribbon, select Sync to Teams
The web part will then be available to add to any SharePoint page or as a Tab in Teams

<img src="https://github.com/CloudDesignBox/cdbTrainingWebPart/blob/master/Release/tab.png" /><br />
<img src="https://github.com/CloudDesignBox/cdbTrainingWebPart/blob/master/Release/teamstabs.png" />



These instructions are for development purposes only, feel free to build your own version!
### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO
