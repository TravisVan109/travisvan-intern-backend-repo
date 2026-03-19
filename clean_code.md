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