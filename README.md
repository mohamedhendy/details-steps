# PortfolioPro

## 📃 Table of Content

- [🏃‍♂️ Getting Started](#-getting-started)
- [🏗 Project Structure](#-project-structure)
- [✋ Please ASK](#-please-ask)
- [⌚ Time Zone Matters](#-time-zone-matters)
- [🎨 Guidelines](#-guidelines)
- [📚 Learn the Tools](#-learn-the-tools)
- [💉 3rd Party Libraries](#-3rd-party-libraries)
- [✅ Checklist Before You Commit](#-checklist-before-you-commit)
- [♒ Merge Requests Flow](#-merge-requests-flow)
- [⚡ API usage](#-api-usage)
- [🙏 Again, Please Ask!](#-again,-please-ask!)

## 🏃‍♂️ Getting Started

### `npm install`

Installs all packages you need to run the project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## 🏗 Project Structure

- pages under `src/pages` directory
- shared components under `src/components`
- each page/component folder will contain
  - index.js for Material UI components
  - styles.js for Material UI makeStyles
  - exclusive components for page: each component in separate folder
  - any other assets

## ✋ Please ASK

- If you don't understand the logic behind the UI, just ask.

- If you don't know how the API works, just ask.

- If you feel your code might not be performing as expected, just ask.

- If you need help to understand some basics, just ask.

- Whenever in doubt, just ask... as simple as that!

We have a dedicated channel on Discord just to make sure you get things right. Even, if you need something, we are also available for a quick call.

![discord](./docs/discord-photo.png)

## ⌚ Time Zone Matters

You should also be aware that other developers are also in different time zones; thus, they might not respond to your queries instantly.

But... **we, developers, are ASYNC (asynchronous)** by nature. Meaning, just send your query at any time, and developers will answer your query whenever they are available.

## 🎨 Guidelines

### 1. Code and Style Separation (style + js)

> **Avoid inline styles no matter what.**

It is very important to separate styles from JavaScript code. So, in any page/component, we have two files:

- `styles.js` that has CSS classes
- `index.js` that has JavaScript code

#### Example:

- **[./pages/OrganizationPortfolios/styles.js](./pages/OrganizationPortfolios/styles.js) file:**

<img src="./docs/code-style-seperation-example-style.png" alt="code-style-separation-example-style" width="749" height="775">

- **[./pages/OrganizationPortfolios/index.js](./pages/OrganizationPortfolios/index.js) file:**

<img src="./docs/code-style-seperation-example-js.png" alt="code-style-separation-example-js" width="698" height="978">

### 2. Code Formatting

> To make sure everything goes well, open the project in VSCode from the **root folder** not from `frontend` folder.

We use prettier to format the code, thus in `.vscode/extension.json` you will see the recommended extensions:

```
  "recommendations": [
    "ms-python.python",
    "esbenp.prettier-vscode",
    "ban.spellright"
  ],
```

- **Prettier - Code formatter (esbenp.prettier-vscode)**

Code formatter for our frontend codebase.

- **Spell Right (ban.spellright)**

Check your spelling when writing any strings.

### 3. Git Rebase

`git pull --rebase` is a good practice to keep git timeline linear.

Make sure it's the default in your system by running this command:

```
git config --global pull.rebase true
```

Now you're good to go 🤟

### _You are not sure how you are supposed to write/style your code?_

**It's best to ask your team to get things done right!**

## 📚 Learn the Tools

**1. Material UI**

Most of the times, it will save you time to read through the properties of a component.

To see examples of components usage:

![open-code-sample-material-ui](./docs/open-code-sample-material-ui.mp4)

We really advise you to take some time to read through the docs of material-ui:

- https://material-ui.com/customization/theming/
- Typography (please check our theme provider in the codebase): https://material-ui.com/system/typography/
- https://material-ui.com/customization/palette/
- To avoid hard-coded colors: https://material-ui.com/customization/color/

**2. Redux**

This is a quick crash course to get up and running with Redux: https://twitter.com/chrisachard/status/1179015849459507200

And, this is a very recommended reference from the documentation of Redux:
https://react-redux.js.org/api/hooks

## 💉 3rd Party Libraries

You should not add any 3rd-party library to the packages.json file.

**Strive for solving problems without adding any libraries.**

However, if you think it's a very good idea to add a library, then start a discussion in our Discord channel.

## ✅ Checklist Before You Commit

### • **Pixel perfect**

Split your screen into 2 halves and take a final look:

1. On the left Figma design.

2. On the right the frontend react app.

Ask yourself: is the frontend exactly the same as the Figma design?

Make some refinement based on that.

### • **Say NO for inline styles**

### • **Say NO for hard-coded color values**

👎 Bad

```
color="#2196f3"
```

👍 Good

```
color="primary"
```

### • **Clean up the console**

Search for console.log in the codebase and remove all instances before committing your code.

### • **Spelling mistakes**

Make sure to use VSCode spelling add-on to avoid spelling mistakes.

## ♒ Merge Requests Flow

Once you finish your tasks, you will need to add a merge request to the main codebase.

_“…in 7 easy steps!”_ 😍

### 1. **Adding a branch and pushing changes**

You cannot push your code to the "develop" or "master" branches, thus you will need to create a branch to group your commits.

You will **start by creating a branch with a MEANINGFUL name.**

```
git checkout -b feature_x
```

> Please keep your code clean: **one feature or bug-fix per branch**. If you find another bug, you want to fix while being in a new branch, please fix it in a separated branch instead.

### 2. **Code**

- Follow the common conventions you see in the existing code
- Discuss with the team if you need to understand the logic

### 3. **Commit**

- For every commit please write a short (max 72 characters) summary
- Follow the pattern of writing commit summary:

> **Sentence should be in imperative (order) form**

👎 Bad

```
**Added** project view to app drawer
```

👍 Good

```
Add project view to app drawer
```

> **Always start with a verb in commit summary**

👎 Bad

```
Project view **is added** to app drawer
```

👍 Good

```
Add project view to app drawer
```

Examples:

![commits-examples](./docs/commits-examples.png)

> **Aim for small concise commits!** If your commit summary has the word "and", mostly you will need to separate it into 2 or more commits.

### 4. **Update your branch**

```
git fetch origin
git rebase origin/master
```

### 5. **Push to your remote**

```
git push origin feature_x
```

### 6. **Adding a merge request**

This is like asking: "Hey, I wanna merge my code to the main codebase".

![add-merge-request](./docs/add-merge-request.mp4)

### 7. **Making changes through conversation**

Before your merge request gets merged, you will discuss and review the code with the team lead in GitLab.

Once everything gets reviewed and accepted, it will be merged to the main branch.

---

Please read this reference talking about how to do a good merge request:

https://gist.github.com/mikepea/863f63d6e37281e329f8

### Take-Aways:

- **Create meaningful names**: a solid title helps everyone understands what the submitted work is supposed to do. Make sure to follow this whether in your commit names or your merge request names.

- **Be concise**: instead of working on multiple features/pages, aim to work on a specific feature/page.

- **Submit complete work**: a merge request should COMPLETELY finish a specific feature/page.

- **Be responsible**: check your code before you send a merge request.

## ⚡ API Usage

- **Swagger Docs**

You can find all RESTful APIs here: https://pp-api.yaseralnajjar.com/docs/swagger-ui/#/

- **API usage with Django**

To try the API and instead of using Postman or such, you can directly use them through Django-Rest-Framework URLs.

For example, this is home endpoint URL from Swagger `/api/v1/home/`. Add it to the main URL so it becomes:

```
https://pp-api.yaseralnajjar.com/api/v1/home/
```

![home-endpoint](./docs/home-endpoint.png)

_You will need to signin in Django admin panel before using the api_

- **Authentication**

To authenticate, use Django admin panel: https://pp-api.yaseralnajjar.com/admin/

If you need to change the role of your user account, you can use the Django admin panel for that too: https://pp-api.yaseralnajjar.com/admin/users/user/

_If you need credentials, ask the team in our Discord channel_

- **Adding Data**

You can add data through the API mentioned above.

You can view data in the API too.

> **NEVER add data through the admin panel!**

## 🙏 Again, Please Ask!

We are all here to **get things done, perfectly!**

To achieve that, you will surely need help from your team. So whenever you feel the need for any help, just write on our Discord channel.

The fact that we communicate in an asynchronous text-based manner, it is very easy to misunderstand a person's intent. Assume that everyone involved in this project has the best intentions.

We are all humans trying to work together. **Always be kind** and be aware that trade-offs are necessary. ❤️

Best of luck!
