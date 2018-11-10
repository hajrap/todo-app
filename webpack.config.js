var webpack=require('webpack');
const path=require('path');
const config={
   // context:path.resolve(_dirname,'src'),
    entry:{
        app:'./src/test.jsx'
    },
    output: {
        path:path.resolve(_dirname,'src'),
        filename:'index.js'
    },
    module:{
        rules:[
            {
                test:'/\.jsx/',
                loader:'babel-loader',
                include:path.resolve(_dirname,'src'),
                query:{
                    presets: ['@babel/react']
                }
            }
        ]
    }
}
module.exports  =config;