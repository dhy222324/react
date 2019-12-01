
const path=require("path");

const {override,addWebpackAlias,fixBabelImports } =require("customize-cra");
module.exports = override(    
    addWebpackAlias({
        "@":path.resolve(__dirname,"src")
    }),
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
           style: 'css'
     })
)