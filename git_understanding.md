# Git Merge Conflict Understanding

## What caused the conflict?
The merge conflict happened because the same line in the same file was edited in both the main branch and the conflict-branch.

## How did you resolve it?
I used Visual Studio Code to review the conflicting changes and selected the final version (actually the version that I want to keep) of the text.

## What did you learn?
I learned that merge conflicts happen when Git cannot automatically review and combine changes from different branches. Also, I learned how to resolve conflicts using VS Code's merge tools.

## Why are PRs important in a team workflow?

- **Collaboration:** PRs let team members review each other’s code and suggest improvements.  
- **Quality control:** Bugs and mistakes can be caught before changes reach the main branch.  
- **Transparency:** All changes and discussions are documented for future reference.  
- **Learning:** PR discussions provide opportunities to learn from others’ feedback.

## What makes a well-structured PR?

A good PR usually includes:
- A **meaningful title** that explains the purpose of the change.  
- A **clear description** of what was changed and why.  
- Links to **related issues** or tasks.  
- Small, focused changes that are easy to review.  
- Screenshots or examples if relevant (for UI changes).  

## My Experience Creating a PR

1. Created a new branch in my Git client .  
2. Made some changes in the file.  
3. Committed the change and pushed the branch to GitHub.  
4. Opened a Pull Request with the title.  
5. Wrote a clear description (e.g. “Added reflections about PR workflow and learning Git processes.”).  
6. Submitted the PR for review.  

## What I Learned from Reviewing an Open-Source PR

- PR discussions are **collaborative**, not just about finding mistakes.  
- Reviewers often ask for **clarifications** or suggest **small improvements** rather than rejecting the change.  
- Code quality, readability, and testing are **prioritized** in open-source projects.  
- I learned how to **follow comments, reply respectfully, and track requested changes**.  

## What Makes a Good Commit Message?

- **Concise and descriptive:** Summarizes the change in 50 characters or less if possible.  
- **Focused:** Each commit should handle one logical change.  
- **Contextual:** Explains what changed and why if necessary.  
- **Formatted:** Optionally, use a subject line, empty line, and longer description for details.

## How Clear Commit Messages Help Collaboration

- Makes code review faster and easier.  
- Helps teammates understand the history of changes.  
- Reduces confusion when debugging or reverting code.  
- Improves traceability of features or bug fixes.

## How Poor Commit Messages Cause Issues

- Hard to understand what changes were made.  
- Difficult to track down bugs or why a change was made.  
- Increases time spent during code reviews or when onboarding new team members.  
- Reduces overall maintainability of the project.

#  Reflections on Using Git Bisect
- **What it does:**  
Quickly identifies the exact commit that introduced a bug using binary search, saving time compared to manually checking every commit.

- **When to use it:**  
Useful in large projects with many commits where the source of a bug isn’t obvious. Helps isolate issues efficiently during debugging.

- **Comparison to manual review:**  
Manual review can be slow and error-prone. Git bisect automates the search and reduces the number of commits you need to inspect significantly.