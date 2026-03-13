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

# Advanced Git Commands
## 1. git checkout main -- <file>
### What it does
Restores a **single file** from the `main` branch without touching any other changes in the working directory.

### When to use it
- When you accidentally mess up one file but want to keep all other edits.
- When you only want to copy a “good version” of a file from another branch.

### What surprised me
It fixes only ONE file and leaves everything else untouched — very useful and safer than a full reset.


## 2. git cherry-pick <commit>
### What it does
Takes a **specific commit** from another branch and applies it onto your current branch.

### When to use it
- When one branch has a useful fix but you don't want to merge the whole branch.
- When you want to reuse a single commit across multiple branches.

### What surprised me
It allows extremely precise control, I can grab a single commit like a “copy/paste” of code history.
(it's quite helpful when you do many tasks in that branch or many people involving in that branch, and you cannot merge the whole branch, so just pick only the commit that you want)

## 3. git log
### What it does
Shows a full history of commits. With `--oneline --graph`, it visualises branches and merges.

### When to use it
- Understand how the project has evolved.
- Track down when features or bugs were introduced.
- Find commit hashes for cherry-picking or reverting.

### What surprised me
The graph view makes it very clear how branches diverge and merge over time.


## 4. git blame <file>
### What it does
Shows **who changed each line**, when, and in which commit.

### When to use it
- Debugging: find out who wrote a buggy line.
- Understanding why a line exists.
- Reviewing team contributions.

### What surprised me
It’s extremely detailed, every single line has a history. Also great for learning how code evolved.

#  Reflections on Branching & Team Collaboration 

## Why is pushing directly to main problematic?

Pushing straight to main is risky because:

Bugs go live instantly — if the code is broken, it affects everyone.

No code review — teammates cannot catch mistakes or suggest improvements.

No testing stage — code is not tested before landing in the stable branch.

Harder to track mistakes — if multiple people push directly, it’s unclear who introduced a bug.

Can break the whole team’s workflow — other developers pull main and get broken code.

## How do branches help with reviewing code? 

Work on new features without affecting the main codebase.

Submit a Pull Request (PR) so teammates can review the changes.

Catch bugs, typos, missing tests, and logic errors before merging.

Discuss improvements through comments.

Merge only when the code is stable and approved.

## What happens if two people edit the same file on different branches?
this is very common in team projects and it has two main scenarios:

### Scenario 1: They edit different lines

Git can automatically merge both changes
→ No conflict
→ Merge is easy.

### Scenario 2: They edit the same line

A merge conflict happens.

Example:

Branch A edits line 12 of config.js

Branch B also edits line 12