import { Subject } from 'rxjs';

const mySubject = new Subject<string>();

mySubject.subscribe({
  next: (value) => console.log('Observer A:', value)
});

mySubject.next('First value'); // Observer A receives 'First value'

mySubject.subscribe({
  next: (value) => console.log('Observer B:', value)
});

mySubject.next('Second value'); // Observer A and B receive 'Second value'
mySubject.next('Third value');  // Observer A and B receive 'Third value'

// Observer B did not receive 'First value' because it subscribed after it was emitted.