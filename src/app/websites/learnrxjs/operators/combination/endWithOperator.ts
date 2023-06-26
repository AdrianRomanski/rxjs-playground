/**
 *         Emit given value(s) on completion.
 * 💡 If you want to start with a value instead, check out startWith!
 * 💡 If you want to perform an action on completion, but do not want to emit a value, check out finalize!
 *
 * Why use endWith?
 * The endWith operator is especially handy when you want to ensure that a specific
 * value is emitted after the source observable completes.
 * Think of it as the closing credits of a movie, signaling that the story has reached its conclusion.
 * Real-world examples of endWith can be found in scenarios where you want to append a specific message
 * or status update after a series of events, such as a file download that ends with a "Download Complete"
 * notification or a countdown timer that finishes with a "Time's Up!" alert.
 * Keep in mind that endWith only emits the specified value when the source observable completes.
 * This means that if your source observable does not complete, the value provided to endWith will not be emitted.
 * To avoid surprises, make sure to check that your source observable is designed to complete at some point.
 * In cases where you want to prepend a value at the beginning of an observable sequence
 * instead of appending it at the end, consider using the startWith operator.
 *
 */
import {endWith, Observable, of} from "rxjs";
import {finalize} from "rxjs/operators";



export function endWithOperator(): void {
  example3();
}

//Example 1: Basic endWith example
function example1(): void {
  const source$: Observable<string> = of('Hello', 'Friend', 'Goodbye');

  source$
    // emit on completion
    .pipe(endWith('Friend'))
    // 'Hello', 'Friend', 'Goodbye', 'Friend'
    .subscribe(console.log);
}

//Example 2: endWith multiple values
function example2(): void {
  const source$: Observable<string> = of('Hello', 'Friend');

  source$
    // emit on completion
    .pipe(endWith('Goodbye', 'Friend'))
    // 'Hello', 'Friend', 'Goodbye', 'Friend'
    .subscribe(console.log);
}

//Example 3: Comparison to finalize
function example3(): void {
  const source$: Observable<string> = of('Hello', 'Friend');

  source$
    // emit on completion
    .pipe(
      endWith('Goodbye', 'Friend'),
      // this function is invoked when unsubscribe methods are called
      finalize(() => console.log('Finally'))
    )
    // 'Hello', 'Friend', 'Goodbye', 'Friend'
    .subscribe(val => console.log(val));
    // 'Finally'
}

