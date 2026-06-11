**Session 25**

**JavaScript Loops**

| 📌 Note:  Each task combines loops with concepts from previous sessions — functions, arrow functions, closures, and template literals. Read the full task before writing any code. |
| :---- |

## **Task 1 — The Broken Clock**

You already know setTimeout from Session 22\. Now you will use it inside a loop — and discover one of the most common bugs in JavaScript.

**Part A — Spot the bug**

Run this code and observe the output:

| for (var i \= 1; i \<= 5; i++) {   setTimeout(function () {     console.log(\`Tick ${i}\`);   }, i \* 1000); } |
| :---- |

You expect: Tick 1  Tick 2  Tick 3  Tick 4  Tick 5 — one per second.

What you actually get:

| // Expected output // (after 1s)  Tick 6 // (after 2s)  Tick 6 // (after 3s)  Tick 6 // (after 4s)  Tick 6 // (after 5s)  Tick 6 |
| :---- |

In a comment in your code, explain **why** this happens. Use what you know about var scope and when the callbacks actually execute.

**Part B — Fix it with let**

Change only var to let. Run it again. Explain in a comment why this fixes the problem.

**Part C — Fix it with a closure**

Now go back to using var, but fix the bug a different way: wrap the setTimeout call inside an immediately invoked arrow function that captures i as a parameter.

| 💡 Hint:  An immediately invoked arrow function looks like: (i \=\> { /\* use i here \*/ })(i)  — it runs instantly and captures the current value of i in its own scope. |
| :---- |

| // Expected output // (after 1s)  Tick 1 // (after 2s)  Tick 2 // (after 3s)  Tick 3 // (after 4s)  Tick 4 // (after 5s)  Tick 5 |
| :---- |

| 🔴 Bonus:  Write a reusable arrow function const tick \= (label, delay) \=\> ... that schedules a single timed message. Then call it 5 times inside a for loop using let to produce the same correct output. |
| :---- |

## **Task 2 — Staircase Mystery**

Build a number staircase using nested loops and functions, then use a labeled break to find the first row that becomes "too heavy".

**Part A — The buildRow function**

Write an arrow function const buildRow \= (num, cols) \=\> ... that returns a formatted string where num appears cols times, separated by spaces. Use a for loop inside the function.

| // Expected output buildRow(3, 4\)  →  "3 3 3 3" buildRow(7, 2\)  →  "7 7" |
| :---- |

**Part B — Print the staircase**

Using an outer for loop (rows 1–10), call buildRow(i, i) for each row and print the result with a template literal:

| // Expected output \`Row 1:  1\` \`Row 2:  2 2\` \`Row 3:  3 3 3\` ... \`Row 10: 10 10 10 10 10 10 10 10 10 10\` |
| :---- |

**Part C — Find the heavy row**

Write a function findHeavyRow(limit) that uses a labeled pair of nested for loops. For each row i, sum its values (i \* i) with the inner loop. The moment the sum meets or exceeds limit, use a labeled break to exit both loops and return a template literal result string.

Call it with findHeavyRow(50) and print the result.

| // Expected output findHeavyRow(50)  →  "Row 8 hit the limit: sum \= 64" |
| :---- |

| 💡 Hint:  The sum for row i is i × i (because the value i repeats i times). You do not need to actually add inside the inner loop — you can compute it directly. But using the inner loop to accumulate the sum is good practice. |
| :---- |

| 🔴 Bonus:  Change findHeavyRow so it accepts both a limit and a maxRows parameter. Test with findHeavyRow(200, 20). What row hits 200? |
| :---- |

## **Task 3 — PIN Cracker**

Wrap a three-level nested loop inside an arrow function. The function receives the three secret digits as separate parameters, searches every combination, and returns the number of attempts it took.

**Setup**

| // Secret PIN digits — do not change these const s1 \= 3;   // hundreds digit const s2 \= 1;   // tens digit const s3 \= 4;   // units digit |
| :---- |

**Requirements**

1. Write an arrow function const crackPin \= (s1, s2, s3) \=\> { ... }.

2. Inside, use **three nested for loops** — hundreds, tens, units — each from 1 to 5\.

3. Count every attempt with a let attempts \= 0 counter.

4. When all three loop variables match s1, s2, s3 exactly, use a **labeled break** to exit all three loops immediately.

5. After the loops, **return** just the attempts number — nothing else.

**Calling the function**

| const attempts \= crackPin(s1, s2, s3); console.log(\`PIN found: ${s1}-${s2}-${s3}\`); console.log(\`Cracked in ${attempts} attempt(s)\`); |
| :---- |

| // Expected output PIN found: 3-1-4 Cracked in 79 attempt(s) |
| :---- |

| 💡 Hint:  The label must go on the outermost loop. A plain break inside the innermost loop only exits the innermost loop — the two outer loops keep running. |
| :---- |

| 🔴 Bonus A:  Change s1, s2, s3 to 5, 5, 5\. Before running the code, predict how many attempts it will take. Then run and verify. |
| :---- |

| 🔴 Bonus B:  Add default parameter values so crackPin() with no arguments defaults to s1=1, s2=1, s3=1. Call it both ways and compare the attempt counts. |
| :---- |

## **Quick Reference**

| Concept | Pattern | Used in task |
| :---- | :---- | :---- |
| var in loop | shared across all iterations | Task 1 (bug) |
| let in loop | new binding each iteration | Task 1 (fix) |
| Closure fix | (i \=\> setTimeout(...))(i) | Task 1 Part C |
| Arrow function | const fn \= (x) \=\> x \* 2 | Tasks 2, 3 |
| Template literal | \`Row ${i}: ${buildRow(i, i)}\` | Tasks 2, 3 |
| Labeled break | outer: for...  break outer; | Tasks 2, 3 |
| Return value | return attempts | Task 3 |
| Default param | const fn \= (x \= 5\) \=\> ... | Task 3 Bonus |

