export const RunGoogleScript = (funcName: string) => {
  return new Promise<JSON>((resolve, reject) => {
    google.script.run
      .withSuccessHandler((result) => {
        console.log(`yes~~`)
        console.log(result)
        resolve(result)
      })
      .withFailureHandler((err) => {
        reject(err)
      })[funcName]()
  })
}
