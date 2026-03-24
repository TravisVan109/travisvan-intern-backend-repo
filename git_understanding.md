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

# Writing Meaningful Commit Messages

## My Commit Message Experiments

### 1. Vague Commit Message

Actual commit created in repo:"fix stuff"

**Why it is vague:**

- No context
- Doesn’t describe what changed
- Not useful for teammates

### 2. Overly Detailed Commit Message

Actual commit created in repo: "Updated the math.js file to include three functions: Add, multiply and bug function. The add function and the multiply function is for good commits, meanwhile, the bug function is the bad commit which introduced the bug. the purpose of these commits is to practice debugging by git bisect. with this practice, it shown which commit is good and which one is bad, then user can reset git bisect to back to the closest good commit.
"
**Why overly detailed:**

- Too long
- Hard to read
- Should be broken into multiple commits

### 3. Well-Structured Commit Message

Actual commit created in repo: "feat: Add Multiple, add and subtraction function (introduced bug) for practicing Git Bisect"

**Why it’s well structured:**

- Clear title
- Bullet points
- Follows conventional commits

## Examples From an Open-Source Repository

### Good Commit Message

doc: add throwIfNoEntry version history to fs.stat

**Why good:**
Clear purpose
Short and descriptive
Uses a conventional prefix

### Bad Commit Message

more todo items

**Why bad:**
No context
No details
Not helpful for maintainers

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

# Reflections on Using Git Bisect

## Hands-on Experiment: Using `git bisect`

### 1. Test Repo Setup and Commits

I created a simple test repository with a `math.js` file and made several commits:

- Commit 1: Add add() function
- Commit 2: Add multiply() function
- Commit 3: Introduce bug in add() function (intentional)

Here is part of the `git log` showing the commits:
commit 9293823de367f126ede27b2d5ace09d62e260a24
Author: Văn Công Thành <vancongthanh109@gmail.com>
Date: Fri Mar 13 11:40:35 2026 +1100

    Introduce bug in add() function

commit 308b91d9e16d7cff706a009de5afe92581262fb1
Author: Văn Công Thành <vancongthanh109@gmail.com>
Date: Fri Mar 13 11:24:58 2026 +1100

    Add multiply() function

commit 40d27282e12271cb97052493655b8991701dc924
Author: Văn Công Thành <vancongthanh109@gmail.com>
Date: Fri Mar 13 11:18:50 2026 +1100

    Initial commit: add add() function

### 2. Detailed cmd and output when I used git bisect

git bisect start
status: waiting for both good and bad commits
git bisect bad
status: waiting for good commit(s), bad commit known
git bisect good HEAD~3 Bisecting: 0 revisions left to test after this (roughly 1 step) [308b91d9e16d7cff706a009de5afe92581262fb1] Add multiply() function
node math.js
5
6

git bisect good
9293823de367f126ede27b2d5ace09d62e260a24 is the first bad commit commit 9293823de367f126ede27b2d5ace09d62e260a24 (origin/...)
Author: Văn Công Thành <vancongthanh109@gmail.com>
Date: Fri Mar 13 11:40:35 2026 +1100 Introduce bug in add() function math.js | 7 +++---- 1 file changed, 3 insertions(+), 4 deletions(-)

git bisect reset
Previous HEAD position was 308b91d Add multiply() function Switched to branch '...' Your branch is up to date with 'origin/travisvan-intern-milestone-3-3'.

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

# Reflections on Branching & Team Collaboration

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

# Reflections about Git concept: staging vs committing

## What is the difference between staging and committing?

### Staging (git add)

- Staging means **selecting which changes you want to include in the next commit**.
- When you run `git add <file>`, Git takes a snapshot of that file **as it is right now** and puts it into the staging area.
- You can stage **some files** and leave others unstaged.

> Think of staging like putting items into a shopping basket before checking out.

### Committing (git commit)

- Committing takes everything in the staging area and **saves it permanently** into the repository history.
- A commit is like a “checkpoint” with:
  - the staged changes,
  - an author,
  - a timestamp,
  - and a commit message.

> Think of committing like pressing “Save” on a version of your project.

## Why does Git separate these two steps?

Git separates staging and committing because it gives developers **fine control** over what goes into each commit.

**Benefits:**

- Choose **exactly which files** belong in the commit.
- Split large work into **smaller, cleaner commits**.
- Avoid committing temporary or experimental changes.
- Prepare work in steps and commit when ready.

> Without staging, every change would be committed all at once, making history messy.

## When would you want to stage changes without committing?

**Common scenarios:**

- **Clean, well-structured commits:** Stage only files ready for commit and leave others for later.
- **Preparing a PR:** Separate commits for code cleanup, new features, or documentation.
- **Save progress but not finalize:** Stage files, continue editing others, and commit later.
- **Partial staging:** Stage only parts of a file (`git add -p`) to keep git history clean.
