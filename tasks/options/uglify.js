module.exports = {
  src: {
    files: {
      //JS version including jQuery package
      './dist/tabloyd.min.js': [
        './bower_components/jquery/dist/jquery.js',
        './src/js/tabloyd.js'
      ],
      //JS version without jQuery package
      './dist/standalone/tabloyd.min.js': [
        './src/js/tabloyd.js'
      ],
    }
  },

  options: {
    preserveComments: 'some'
  }
};
