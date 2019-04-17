// How a promise works
function myPromise(data) {
    return new Promise( function(resolve, reject) {
        // Call HTTP, or something async
        http.get('https://url')
        .then( (response) => {
            if ( statusCode === 200 ) {
                resolve(response.data)
            } else {
                reject(response.error)
            }
        })
        .catch( (err) => {
            reject(err);
        })
    });
}

function callAPI(data, callback) {
    http.get('https://url', (response) => {
        if ( statusCode === 200 ) {
            callback(null, response.data);
        } else {
            callback(response.error, null)
        }
    })
}  

myPromise(data)
.then( (data) => {
    console.log(data);
})
.catch( (err) => {
    console.err(err);
})

// Using callbacks 
// Have to pass a function to handle the data separately
callAPI(data, (error, data) => {
    if (error) {
        console.error(error);
    } else{
        console.log(data);
    }
});

/*
 * Think about what would happen if we had to do 10 different things in order.
 * 
 * For callbacks, we would have to pass the function over and over again
 * 
 * For promises, we can chain .then()'s together
 * 
 * runFunction()
 * .then( () => {
 * 
 * })
 * .then( () => {
 * 
 * })
 * .then( () => {
 * 
 * })
 * 
 * With promises, we can also utilize reject() and .catch() to easily handle errors. 
 * With callbacks, we have to pass in an error object and manually check for it.
 */