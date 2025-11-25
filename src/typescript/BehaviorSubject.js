"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var myBehaviorSubject = new rxjs_1.BehaviorSubject('Initial value'); // Requires an initial value
myBehaviorSubject.subscribe({
    next: function (value) { return console.log('Observer C:', value); }
});
myBehaviorSubject.next('Updated value 1'); // Observer C receives 'Initial value' and then 'Updated value 1'
myBehaviorSubject.subscribe({
    next: function (value) { return console.log('Observer D:', value); }
});
myBehaviorSubject.next('Updated value 2'); // Observer C and D receive 'Updated value 2'. Observer D also received 'Updated value 1' upon subscription.
// Observer D received 'Updated value 1' immediately upon subscription, unlike Observer B in the Subject example.
