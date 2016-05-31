module.exports  =   {
    entry: './index.js'
    , output: {
        path: './dist'
        , filename: 'bundle.js' 
    }
    ,devServer: {
        inline: true
        , port: 9999
    }
    ,module: {
        loaders : [
            {
                test: /\.js/
                , exclude: 'node_modules/'
                , loader: 'babel'
            }
        ]
    }
}
