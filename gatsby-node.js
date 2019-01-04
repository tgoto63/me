exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /uikit/,
            use: loaders.null()
          },
          {
            test: /scrollreveal/,
            use: loaders.null()
          }
        ]
      }
    })
  }
}
