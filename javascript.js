function Mobile(a, b, c, d, isOn) {
    this.battery = a;
    this.compose = b;
    this.inbox = c;
    this.sent = d;
    this.status = isOn;
    this.checkStatus = function () {

    };
    this.changeOnOff = function () {

    };
    this.chargingBattery = function () {
        this.battery++;
        return this.battery
    };
    this.lostBattery = function () {
        this.battery--;
        return this.battery
    }
    this.writeText = function (text) {
        this.compose.push(text);
        this.lostBattery();
    };
    this.receiveText = function (text) {
        this.inbox.push(text);
        this.lostBattery();
    };
    this.sendText = function (text) {
        this.sent.push(text);
        this.lostBattery();
        return text
    };
    this.watchInbox = function () {

    };
    this.watchSent = function () {

    };
}

let b = [];
let c = [];
let d = [];
let e = [];
let f = [];
let g = [];
let nokia = new Mobile(67, b, c, d, true);
let iphone = new Mobile(34, e, f, g, false);

function sentMessage() {
    nokia.writeText('hello guy')
    iphone.receiveText(nokia.sendText(nokia.compose[0]));
    console.log(iphone.inbox);
    console.log(nokia.battery);
    console.log(iphone.battery);
}

function charge() {
    while (nokia.battery < 100) {
        nokia.chargingBattery()
        console.log(nokia.battery);
    }
}

sentMessage()
charge()