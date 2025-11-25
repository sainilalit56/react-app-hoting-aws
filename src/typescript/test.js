"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var mySubject = new rxjs_1.Subject();
mySubject.subscribe({
    next: function (value) { return console.log('Observer A:', value); }
});
mySubject.next('First value'); // Observer A receives 'First value'
mySubject.subscribe({
    next: function (value) { return console.log('Observer B:', value); }
});
mySubject.next('Second value'); // Observer A and B receive 'Second value'
mySubject.next('Third value'); // Observer A and B receive 'Third value'
// Observer B did not receive 'First value' because it subscribed after it was emitted.
