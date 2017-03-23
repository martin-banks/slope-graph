const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer({
      browsers: [
        'last 5 versions',
        'IE >= 8',
        'safari >= 8',
        '> 0.5%'
      ]
    })
  ]
}