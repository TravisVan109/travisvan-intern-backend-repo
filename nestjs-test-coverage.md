# Understanding the Focus Bear Coverage Bar & Writing Meaningful Tests


### 1. What does the coverage bar track, and why is it important?
The coverage bar measures how much of your code is executed by tests. It helps ensure that critical parts of the application are being tested and reduces the chance of hidden bugs.

### 2. Why does Focus Bear enforce a minimum test coverage threshold?
A minimum threshold ensures developers write enough tests to maintain reliability. It prevents large parts of the codebase from going untested.

### 3. How can high test coverage still lead to untested functionality?
Coverage only shows that lines of code ran—it does not guarantee the logic was validated. Tests may execute lines without checking if the behavior is correct.

### 4. What are examples of weak vs. strong test assertions?
- **Weak:** Only checking that a function runs without errors.  
- **Strong:** Checking returned values, state changes, side effects, and error handling behavior.

### 5. How can you balance increasing coverage with writing effective tests?
Focus on meaningful scenarios, edge cases, and core logic rather than trying to hit 100%. Aim for tests that both increase coverage and verify real behavior.
