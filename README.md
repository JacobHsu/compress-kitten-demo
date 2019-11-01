# Usage

`$ npm start`
http://localhost:3000/ 

# Notes 

[PaperCSS](https://www.getpapercss.com/)  

components 
[articles](https://www.getpapercss.com/docs/components/articles/) 
[buttons](https://www.getpapercss.com/docs/components/buttons/) 
[collapsible](https://www.getpapercss.com/docs/components/collapsible/) 
[progress](https://www.getpapercss.com/docs/components/progress/)  
content 
[tables](https://www.getpapercss.com/docs/content/tables/) 
[typography](https://www.getpapercss.com/docs/content/typography/)  
layout
[flexbox](https://www.getpapercss.com/docs/layout/flexbox/)  
utilities
[spacing](https://www.getpapercss.com/docs/utilities/spacing/)  

# npm

[![NPM](https://nodei.co/npm/gh-pages.png?downloads=true&stars=true)](https://www.npmjs.com/package/gh-pages)   
[![NPM](https://nodei.co/npm/connect.png?downloads=true&stars=true)](https://www.npmjs.com/package/connect)  
[serve-static](https://www.npmjs.com/package/serve-static)  Create a new middleware function to serve files from within a given root directory. 

# MDN

[Promise](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise)  
[Array.prototype.fill()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
# References

[Platform.js](https://github.com/bestiejs/platform.js#readme) A platform detection library. 
[Benchmark.js](https://benchmarkjs.com/) A benchmarking library that supports high-resolution timers & returns statistically significant results. 基準化分析  
getOriginImages `loadImage(`https://loremflickr.com/1280/960/kitten?random=${index}`))`

### gh-pages

`$ npm init -y`  
`$ npm install gh-pages --save-dev`  

package.json
```js
  "scripts": {
	...
    "deploy": "gh-pages -d public"
  },
```
`$ npm run deploy`  
https://jacobhsu.github.io/compress-kitten-demo/  


Simply delete the `gh-pages` remote branch:  
`$ git push origin :gh-pages`  
To github.com:JacobHsu/compress-kitten-demo.git  
 - [deleted]         gh-pages  


22 error compress-kitten-demo@1.0.0 deploy: `gh-pages -d public`  
22 error Exit status 1  

> delete `node_modules\gh-pages\.cache`

[pages user site not published](https://github.community/t5/GitHub-Pages/pages-user-site-not-published/td-p/2425)
fatal: A branch named 'gh-pages' already exists.
Solved this by deleting the node_modules/.cache folder.

# Sources

[loremflickr](https://loremflickr.com) Free placeholder images  

# Tools

[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - Visual Studio Marketplace  