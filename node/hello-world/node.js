console.log('what is up my brotha');

function sayMyName(name) {
    console.log(`Your name is ${name}`)
}

function waitThenSayMyName(name) {
    setTimeout(function() {
        sayMyName(name);
    }, 1000);
}

waitThenSayMyName('BJ');
sayMyName('Beyonce');
sayMyName('Steven');
