#  Identifying & Fixing Code Smells
## Code Smells Identified
### Magic Numbers
Hardcoded values made the code unclear and difficult to update.

### Long Functions
Some functions handled too many steps at once, reducing readability.

### Duplicate Code
Similar logic was repeated in multiple functions.

### Large Class (God Object)
A class contained unrelated responsibilities such as logging, users, and settings.

### Deeply Nested Conditionals
Nested if-statements made the logic difficult to follow.

### Commented-Out Code
Unused logic cluttered the file and confused the purpose of functions.

### Inconsistent Naming
Variables and functions had naming patterns that were unclear or mismatched.

## How Refactoring Improved the Code
### Improved readability
Breaking code into smaller functions made intentions clear and easy to scan.

### Improved maintainability
Changing a constant or function in one place updates all dependent logic.

### Improved reusability
Shared logic now lives in modular functions instead of duplicated code.

### Improved structure
Splitting large classes by responsibility made the codebase easier to navigate.

### Reduced cognitive load
Cleaner naming and simplified conditionals made the code easier to understand.

# How Avoiding Code Smells Helps Debugging
Smaller functions make it easier to isolate problems.
Consistent naming reduces confusion when reading stack traces.
Removing nested conditionals prevents hidden branches and logic errors.
Avoiding duplicated code ensures bugs only need to be fixed once.
Cleaner structure makes troubleshooting faster and more consistent.