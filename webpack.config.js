module.exports  =   {
    entry: {
      'main': [
        './index.js'
      ]
    }
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
            },
            { test: /\.scss$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
        ]
    }
}
