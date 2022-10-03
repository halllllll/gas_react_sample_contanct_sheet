export const RunGoogleScript = (funcName:string) =>{
    return new Promise((resolve, reject)=>{
        google.script.run
        .withSuccessHandler(result=>{
            resolve(result)
        })
        .withFailureHandler(err=>{
            reject(err)
        })[funcName]()
    });
}