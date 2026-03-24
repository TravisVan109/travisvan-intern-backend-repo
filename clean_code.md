# Clean Code Principles

## Core Principles

1. **Simplicity**  
   Keep the code as simple as possible. Avoid unnecessary complexity or over-engineering. Simple code is easier to debug, maintain, and extend.

2. **Readability**  
   Code should be easy to understand by others (and by yourself in the future). Use meaningful names for variables, functions, and classes. Include comments where necessary.

3. **Maintainability**  
   Future developers should be able to work with the code easily. Organize code logically, break it into reusable functions or modules, and avoid duplication.

4. **Consistency**  
   Follow style guides and project conventions consistently. Consistent formatting, naming, and patterns make the code predictable and easier to read.

5. **Efficiency**  
   Write performant code, but avoid premature optimization. Focus on readability and maintainability first, then optimize only when necessary.

# Naming Variables & Functions

## Best Practices

- **Be descriptive:** Names should explain what the variable or function represents or does.
- **Use consistent style:** For example, `camelCase` for variables/functions in JavaScript.
- **Avoid abbreviations:** Unless they are widely understood (`id`, `url`, `max`).
- **Reflect intent:** Function names should describe the action they perform.

# Writing Small, Focused Functions

## Why is breaking down functions beneficial?

Improves readability, reduces bugs, simplifies testing, and makes code easier to maintain.

## How did refactoring improve the structure?

The code is modular, easier to follow, and each part can be reused or modified independently.

# Avoiding Code Duplication (DRY)

## What were the issues with duplicated code?

Duplication made the code harder to read, understand, and maintain. Multiple copies of the same logic increased the chance of mistakes when updating functionality.

## How did refactoring improve maintainability?

Refactoring allowed us to use clear, reusable functions. Logic is now centralized, making the code easier to read, test, and modify in the future.

# Commenting & Documentation

## When should you add comments?

When the code performs non-obvious logic that requires context.

When explaining decisions, constraints, or “why” something is implemented a certain way.

When documenting functions, parameters, return values, and expected behavior.

When describing edge cases, warnings, or limitations.

## When should you avoid comments and improve the code instead?

When the code is confusing only because of bad naming—rename things instead.

When comments repeat what the code already clearly shows (“add 1 to i”).

When comments are used to justify overly complex functions—refactor instead.

When improving code structure makes the comment unnecessary.

# Handling Errors & Edge Cases

## What was the issue with the original code?

The original function did not validate any of the inputs.
It assumed that order, items, price, quantity, and coupon.discount were always valid.
This could easily cause runtime errors if any field was missing, incorrect, or the wrong type.

## How does handling errors improve reliability?

Adding guard clauses and error handling makes the function safer and more predictable.
The code now fails early with clear messages instead of crashing later.
This reduces debugging time, prevents unexpected behavior, and improves the overall robustness of the system.

# Refactoring Code for Simplicity

## What made the original code complex?

It mixed multiple responsibilities inside a single function.

Calculating totals, applying discounts, logging, and sending emails were all tightly coupled.

Harder to test or extend the business logic.

No helper functions, so the intent of each step was not explicit.

## How refactoring improved it

Introduced helper functions (calculateFinalTotal, createOrderMessage) to separate concerns.

Improved readability by naming steps clearly.

Reduced duplication and made control flow easier to understand.

The processOrder() function now only coordinates the process.

Future modifications (tax, new discounts, logging changes) can be done in small places instead of changing the whole function.

# Writing Unit Tests for Clean Code

## How do unit tests help keep code clean?

Unit tests help keep code clean by forcing me to write smaller, more focused functions. When a function is too long or does too many things, it becomes harder to test. Because of this, unit testing naturally encourages better structure and separation of concerns. It also helps me catch mistakes early, so I can fix problems before they spread into other parts of the codebase. Overall, unit tests act like a quality check that keeps my code more reliable, simpler, and easier to maintain.

## What issues did I find while testing?

While testing, I found a few issues that showed me where my code needed improvement. Some functions didn’t handle edge cases properly, like unexpected input or missing data. I also noticed that some variable names were unclear, which made the tests harder to understand. In a few cases, I realised that my functions were doing too many things at once, which caused failures when I tried to write tests. Fixing these issues helped make my code cleaner, more readable, and easier to test.

# Code Formatting & Style Guides

## Why is code formatting important?
Code formatting is important because it makes the code consistent, readable, and easier to maintain. Well-formatted code helps developers understand logic quickly, reduces mistakes, and ensures the project follows a standard style, which is especially helpful when working in teams.

## What issues did the linter detect?
The linter detected several issues, including:

Duplicate variable declarations (e.g., a declared twice).
Inconsistent quote styles (" vs ').
Extra spaces, tabs, and incorrect indentation.
Line ending issues (␍ due to Windows vs UNIX formatting).
String concatenation that could be replaced with template literals.

## Did formatting the code make it easier to read?
Yes, formatting the code with ESLint and Prettier made it much easier to read. Indentation, spacing, and consistent quotes improved the visual structure, allowing me to spot errors and understand the code logic faster.