// synchronous
const token = ~~[Math.random() * 123456789];
const userData  = ['1', '2', '3']; 

function login(username) {
    return {token: token, username: username}
}

function getUser(token) {
    if (token) return {apiKey: 'inikunci'}
}

function getData(apiKey) {
    if (apiKey) return userData
}

const user = login('muhtaromzain');
const apiKey = getUser(user.token);
const data = getData(apiKey); 

console.log(user);
console.log(apiKey);
console.log(data);