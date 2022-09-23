function Mobile(battery, composeMemory, inboxMemory, sentMemory, status) {
    this.battery = battery;
    this.compose = composeMemory;
    this.inbox = inboxMemory;
    this.sent = sentMemory;
    this.status = status;

    this.checkStatus = function () {
        return this.status ? true : false; // !!this.status //status true -> true ; status false -> false => ! roi`! thi` true van la true, false van la false
    };

    this.turnOn = function () {
        if (!this.checkStatus()) {
            if (this.battery > 0 && this.battery <= 100) {
                this.lostBattery();
                this.status = true;
            }
        }
    };

    this.turnOff = function () {
        if (this.checkStatus()) {
            if (this.battery > 0 && this.battery <= 100) {
                this.lostBattery();
                this.status = false;
            }
        }
    };

    this.chargingBattery = function () {
        if (this.battery < 100) {
            this.battery++;
        }
    };

    this.lostBattery = function () {
        if (this.battery > 0)
            this.battery--;
    }

    this.composeMessage = function (message) {
        if (this.status) {
            this.compose = message;
            this.lostBattery();
        }
    }

    this.receiveText = function () {
        if (this.status) {
            this.lostBattery();
            return 'Have new email'
        }
    };

    this.sendMessage = function (toMobile) {
        if (this.status) {
            this.sent = this.compose;
            toMobile.inbox = this.compose;
            this.lostBattery();
        }
    };

    this.watchInbox = function () {
        if (this.status) {
            this.lostBattery();
            return this.inbox;
        }
    };

    this.watchSent = function () {

    };
}

let nokia = new Mobile(67, '', '', '', true);
let iphone = new Mobile(34, '', '', '', true);

function main() {
    let composeMess = prompt("Enter message")
    nokia.composeMessage(composeMess);
    nokia.sendMessage(iphone);

    let notice = iphone.receiveText();
    if (notice !== ""){
        alert("Message is " + iphone.watchInbox());
    }
    // console.log(iphone.inbox);
    // console.log(nokia.battery);
    // console.log(iphone.battery);
}

function charge() {
    while (nokia.battery < 100) {
        nokia.chargingBattery()
        console.log(nokia.battery);
    }
}

main()