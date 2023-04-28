
export async function makeRequest(url, data, method) {
    let opts = {
        method: "GET",
        headers: {"Content-Type": "application/json"},
    }

    if (process.env.NODE_ENV !== "production") {
        opts.credentials = "include"
    }

    if (data){
        opts.body = JSON.stringify(data)
        opts.method = method || "POST"
    }

    try {
        let response = await fetch(process.env.REACT_APP_SERVER_ADDRESS + url, opts)
        const json = await response.json()

        if (json.json_status >= 400 && json.json_status !== 401) {
            console.log("Error", json.message)
        }

        return json
    } catch (e) {
        console.log("ERROR: ", e)
        throw new Error(e)
    }
}
