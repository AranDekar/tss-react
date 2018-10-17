function ApiCall() {
}
ApiCall.prototype = {
    constructor: ApiCall,
    post: (url, data = {}) => {
        return fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "include", // include, same-origin, *omit
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
            .then(response => response.json().then(json => ({ json, response })))
            .then(({ json, response }) => {
                if (!response.ok) {
                    return Promise.reject(json)
                }
            })
            .then(
                response => Promise.resolve({ response }),
                error => Promise.reject({ error: error.message || 'Something bad happened' })
            );
    },
    get: (url) => {
        return fetch(url, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "include", // include, same-origin, *omit
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
        })
            .then(response => response.json().then(json => ({ json, response })))
            .then(({ json, response }) => {
                if (!response.ok) {
                    return Promise.reject(json)
                }
                return json;
            })
            .then(
                response => Promise.resolve({ response }),
                error => Promise.reject({ error: error.message || 'Something bad happened' })
            );
    }
}

export default ApiCall;