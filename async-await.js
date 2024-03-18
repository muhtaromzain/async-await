
const token = ~~[Math.random() * 123456789];
const userData  = ['1', '2', '3']; 

function login(username) {
    console.log('login processing...');
    // success,failed also known as resolve,reject
    return new Promise((success, failed) => {
        setTimeout(() => {
            // set validation
            if (username != 'muhtaromzain') failed('Wrong username')
            success({token})
        }, 200);
    })
}

function getUser(token) {
    console.log('user processing...');
    return new Promise((success, failed) => {
        if (!token) failed('No token provided')
        if (token) 
            setTimeout(() => {
                success({apiKey: 'inikunci'})
            }, 500);
    })
}

function getData(apiKey) {
    console.log('data processing...');
    return new Promise((success, failed) => {
        if (!apiKey) failed('Api key not provided')
        if (apiKey) 
        setTimeout(() => {
            success({data: userData})
        }, 1500)
    })
}

async function get() {
    try {
        const {token} = await login('muhtaromzain')
        const {apiKey} = await getUser(token);
        const {data} = await getData(apiKey);
    
        console.log({
            token: token,
            apiKey: apiKey,
            data: data
        })
    } catch (err) {
        console.log(err)
    }
}

get();