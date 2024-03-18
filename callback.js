// callback
const token = ~~[Math.random() * 123456789];
const userData  = ['1', '2', '3']; 

function login(username, callback) {
    console.log('login processing...');
    setTimeout(() => {
        callback({token: token, username: username})
    }, 200);
}

function getUser(token, callback) {
    console.log('user processing...');
    if (token) 
    setTimeout(() => {
        callback({apiKey: 'inikunci'})
    }, 500);
}

function getData(apiKey, callback) {
    console.log('data processing...');
    if (apiKey) 
    setTimeout(() => {
        callback({data: userData})
    }, 1500)
}

const user = login('muhtaromzain', function (res) {
    const {token} = res; 
    // const resToken = res.token;

    getUser(token, function(res) {
        const {apiKey} = res;
        // const resApiKey = res.apiKey;

        getData(apiKey, function(res) {
            const {data} = res;

            console.log(data);
        })
    });
});

// cannot get the result outside the callback
// console.log(user); // undefined