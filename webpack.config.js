const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry : "./src/app/main.tsx",
    resolve : { extensions : [ ".ts", ".tsx", ".js" ]},
    module : {
        rules : [
            //Find and export all files with extension html 
            { test : /\.html$/, use : { loader : "html-loader"}},

             //Find and export all files with extension css
            { test : /\.css$/, 
              use : ["style-loader", "css-loader"]
            },

             //Find and export all files with extension tsx
            { test : /\.tsx?$/, loader: 'awesome-typescript-loader'}
        ]
    },
    plugins : [
        new HtmlWebPackPlugin({ template : "./src/index.html", filename : "./index.html"})
    ],
    performance : { hints : false},
    watch : true, devtool : 'source-map'
};