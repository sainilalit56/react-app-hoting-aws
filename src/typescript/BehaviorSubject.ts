import { BehaviorSubject } from 'rxjs';

const myBehaviorSubject = new BehaviorSubject<string>('Initial value'); // Requires an initial value

myBehaviorSubject.subscribe({
  next: (value) => console.log('Observer C:', value)
});

myBehaviorSubject.next('Updated value 1'); // Observer C receives 'Initial value' and then 'Updated value 1'

myBehaviorSubject.subscribe({
  next: (value) => console.log('Observer D:', value)
});

myBehaviorSubject.next('Updated value 2'); // Observer C and D receive 'Updated value 2'. Observer D also received 'Updated value 1' upon subscription.

// Observer D received 'Updated value 1' immediately upon subscription, unlike Observer B in the Subject example.