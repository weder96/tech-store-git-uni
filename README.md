# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## React Router

npm install react-router-dom 

npm install --save @types/react-router-dom

https://www.robinwieruch.de/react-router-private-routes/

##  React folder structure
 
### Evolution of a React folder structure and why to group by features right away

https://profy.dev/article/react-folder-structure

### A General Project Structure That Works in Any Ecosystem

https://nullvoxpopuli.com/2019-04-15-a-general-project-structure-that-works-in-any-ecosystem/


### https://dev.to/itswillt/folder-structures-in-react-projects-3dp8

https://dev.to/itswillt/folder-structures-in-react-projects-3dp8





## Run Json Server

https://www.npmjs.com/package/json-server

https://github.com/typicode/json-server/tree/v0

json-server --watch db.json

json-server --watch db.json --port 4000

## Run Project 

yarn dev  

## or

npx vite --port=3000




## Control Management State

### Mobx

https://mobx.js.org/README.html

### mobx-react

https://www.npmjs.com/package/mobx-react


## Call Apis

### Axios

https://github.com/axios/axios


## Datas 

### Moment 

https://www.npmjs.com/package/moment

https://github.com/moment/moment


## Loading

## React Loading Indicators

https://react-loading-indicators.netlify.app/


npm install react-loading-indicators



## Messages 
### Primereact e Vite
https://github.com/primefaces/primereact-examples/tree/main/vite-basic-ts


### primereact

https://primereact.org/installation/

### primeIcons

https://primereact.org/icons/


### primeflex

https://primeflex.org/installation


## styled-components

https://styled-components.com/

npm install styled-components


## react-icons 

https://www.npmjs.com/package/react-icons

npm i react-icons 


## fontawesome icons

https://docs.fontawesome.com/web/setup/get-started

https://dev.to/davidemaye/how-to-set-up-font-awesome-in-react-5a8d

https://fontawesome.com/search


## Optional
## chakra-ui

https://chakra-ui.com/docs/get-started/installation

## Optional
## chakra-ui with vite

https://chakra-ui.com/docs/get-started/frameworks/vite

## Optional
### react-19-shadcn-ui-integration-tutorial
### tailwindcss

https://mobisoftinfotech.com/resources/blog/react-19-shadcn-ui-integration-tutorial


## Projeto Figma e Vercel

https://fsw-store-02.vercel.app/


##  Lodash e Types Lodash

https://www.npmjs.com/package/lodash

https://www.npmjs.com/package/@types/lodash

https://www.dhiwise.com/post/an-essential-guide-to-using-lodash-in-react-applications



## update Readme to Advanced Git Log


### 1. Visual/Graphical View (The "Famous" Graph)

- Summarized history with a graph:
```shell
git log --oneline --graph --all
```

--oneline: Condenses each commit into a single line.
--graph: Draws an ASCII "tree" showing the development lines.
--all: Shows all branches, not just the current one.


### 2. Filtering by Quantity or Time

- See the last N commits (e.g., last 3):

```shell
git log -3
```

Filter by date:
```shell
git log --since="2 weeks ago"
```

- (It also accepts --until or specific dates like --since="2025-12-01").

### 3. Seeing Code Changes

- Show the "diff" (actual code changes):

```shell
git log -p
```
- Show file statistics:

```shell
git log --stat 
```

- (Displays which files were modified and how many lines were changed in each).

### 4. Searching for Specific Commits

- By author:

```shell
git log --author="Developer Name"
```

- By keyword in the message:

```shell
git log --grep="fix login bug"

```
- Quick Reference Table

|  Command                 |        Description                    |
|--------------------------|---------------------------------------|
|git log --oneline         |Super compact list (ID and Title only).|
|git log --reverse         |Shows commits from oldest to newest.   |
|git log --no-merges       |Hides "Merge branch..." commits.       |
|git log [filename]        |Shows the history of a specific file.  |

### Pro Tip: Create an AliasSince you're using Linux Mint, you can save time by creating a custom shortcut. Run this in your terminal:

Bash

```shell

git config --global alias.lg "log --oneline --graph --all"

```

0 Now, whenever you type git lg, you'll get that beautiful, organized graph!Would you like me to explain how to navigate and exit the git log screen (the "Less" pager)?


## 📝 Commit Message Guidelines
To maintain a clean and readable project history, we follow the Conventional Commits specification. Every commit must be descriptive and follow the structure below:

### 1. Structure
Plaintext

<type>(<scope>): <short summary>

- [Optional body: explains the "why" and "how" of the change]
- [Optional footer: references issues or co-authors]


### 2. Best Practices
Subject Line: Use the imperative mood (e.g., "add feature" instead of "added feature").

- Body: Use the body to explain technical debt, design decisions, or complex logic.
- References: Always link to the relevant ticket or issue (e.g., Resolves: #155).
- Collaboration: Use Co-authored-by: Name <email> to give credit to teammates.

### 3. Common Types

- feat: A new feature.
- fix: A bug fix.
- docs: Documentation only changes.
- style: Changes that do not affect the meaning of the code (white-space, formatting, etc).
- refactor: A code change that neither fixes a bug nor adds a feature.

## 🚀 Git Workflow Essentials

### Synchronization

- git fetch: Safely downloads updates from the remote repository without affecting your local work.
- git pull: Downloads updates and automatically merges them into your current branch.
- git push: Publishes your local commits to the remote repository, making them visible to the team.

### Advanced Tools

- Interactive Rebase (git rebase -i): Used to clean up history, squash multiple "work-in-progress" commits, or reword messages before pushing.

- Git Stash: Temporarily "shelves" uncommitted changes so you can switch branches or perform a clean pull without losing progress.




### Text Commit 

git commit --author="Weder Sousa <weder96@gmail.com>" \
-m "feat(git-docs): add comprehensive guide on advanced git workflows" \
-m "Introduces detailed documentation on synchronization strategies, including the critical distinction between 'git fetch' and 'git pull'." \
-m "Includes instructional material on using 'git rebase -i' for history cleanup and 'git stash' for efficient context switching without polluting the commit log." \
-m "This documentation was developed to standardize version control practices across the team, addressing previous technical debt regarding messy commit histories." \
-m "Co-authored-by: Januario Genuino <januario.genuino@empresa.com.br>
Resolves: GIT-101
See also: GIT-201, GIT-202 , GIT-203"