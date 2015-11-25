fetch('https://hollrit.azurewebsites.net/api/Hollr', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            currentUser: {
                userId: "your id here",
                mobileServiceAuthenticationToken: "your token here"
            },
            tag: 'dNewTech',
            text: input.theText
        })
    })
    .then(function(res) {
        return res.text();
    }).then(function(body) {
        var output = {};
        callback(null, output);
    }).catch(function(error) {
        callback(error);
    });