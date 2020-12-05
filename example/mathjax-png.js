const mjAPI = require("mathjax-node-svg2png");
const fs = require('fs');
function base64Data(theData) {
    let hasil = theData.replace(/^data:image\/png;base64,/, "");
    return hasil;
}
module.exports = {
    makeEquation: async function (theMathEqu, pngScale, filePath) {
        let definedScale = pngScale > 3 ? 3 : pngScale;
        mjAPI.typeset({
                math: theMathEqu,
                png: true,
                scale: definedScale,
                format: "TeX",
                mml: true,
            },
            await
            function (mjdata) {
                if (!mjdata.errors) {
                    let thatPngData = base64Data(mjdata.png);
                    fs.writeFile(filePath, thatPngData, 'base64', function () {});
                } else {
                    console.log(`There is an error : ${mjdata.errors}`);
                }
            });
    }
}