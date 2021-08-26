
const saveUser = (user) => {
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({user}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }) /*Promise <Response>*/
        .then((response: Response) => response.json()) /*Promise <any>*/
        .then((json) => console.log(json));
}

export {saveUser};