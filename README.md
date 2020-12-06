# MathJax-PNG

### Tool Used
1. Mathjax : https://github.com/mathjax/MathJax
1. mathjax-node-svg-to-png : https://github.com/pkra/mathjax-node-svg2png

### How to Use
1. Download and install latest Node JS to your system
1. Download `mathjax-png.js` from this github repo
1. Run this command in terminal
  ```console
  npm install mathjax-node
  npm install mathjax-node-svg2png
  ```
1. create `.js` file
1. Copy this code to your code
 * Replace `/path/to/mathjax-png.js` with your own
 * Replace the function parameter with your own
   * equation (str) : your math equation. Example `\\frac{20}{345}+88^{21}`<br/>
   Remember that in string, you need to replace `\` with `\\` so it's defined as a backslash
   * pngScale (int) : scale of the png, affecting quality and file size (bigger = bigger file size)
   * pathToFile (str) : The path to where the file you want to create. MUST end in .png
 ```javascript
 const mjPng = require("/path/to/mathjax-png");
 mjPng.makeEquation('equation' , pngScale , "./path/to/file.png");
 ```
### Link to My Socials
[![alt text][1.1]][1]
[![alt text][2.1]][2]
[![alt text][3.1]][3]
[![alt text][4.1]][4]

[1.1]: http://i.imgur.com/tXSoThF.png (twitter icon with padding)
[2.1]: http://i.imgur.com/P3YfQoD.png (facebook icon with padding)
[3.1]: http://i.imgur.com/1AGmwO3.png (dribbble icon with padding)
[4.1]: http://i.imgur.com/0o48UoR.png (github icon with padding)


[1]: http://www.twitter.com/RafaelAtantya
[2]: http://www.facebook.com/RafaelAtantya
[3]: http://dribbble.com/RafaelAtantya
[4]: http://www.github.com/RafaelAtantya
