var message;
try {
    message = require('./greet')();
} catch (e) {
    message = e;
}

document.body.appendChild(document.createTextNode(message));
