# Vulpem Ventures Website

<p align="center">
  <img src="https://pbs.twimg.com/profile_images/1016986627808333824/nuk1E1au_400x400.jpg" alt="Vulpem Ventures"/>
</p>


# Deployment 


`npm run deploy`

The script will bundle and commit the subtree located in `/dist` onto Github Pages via gh-pages branch


# Development 

## Requirements

* Node > 8 / NPM > 5
* Editor Style: `Spaces 2`

### Clone

`git clone https://github.com/vulpemventures/vulpemcom`


### Install 

Install dependencies being in the cloned folder `vulpemcom`
```
npm i
```

### Watch & Reload

```
npm start
```

### Run a local server 

```
npm run server
```

### Bundle for production

```
npm run bundle
```

### Generate styleguide

```
npm run styleguid
```

### Build SCSS into CSS

**The folder structure and the file names are mandatory. Do not rename or move any folder**


Import each new file created in the **src/scss/style.scss** file
```
@import "./lib/variables/spacing.scss";
```

Run the build script in the root folder
```
node_modules/.bin/gulp scss-to-css
```

The compiled css are in the `./src/css` folder


