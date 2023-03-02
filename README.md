# 1000 Paper Cranes challenge

## What do I do?

1. [Press the button](https://1000-paper-cranes.netlify.app/) and get a random selection of front end tools.

2. Rebuild [this website](https://1000-paper-cranes.netlify.app/) using the tools you have selected.

## What is 1000 Paper Cranes?

1000 Paper Cranes is a front end challenge. It is designed to be a fun and engaging way to learn HTML, CSS and JavaScript. Through making and remaking with different tools, we will explore how other developers have encountered and solved problems in web development.

It is obviously inspired by the great [CSS Zen Garden](https://www.csszengarden.com/).

There are many ways to solve the same problem. What are the pros and cons of each approach? How do you decide which approach to take? Why do some developers prefer one approach over another?

If you build it, you will learn.

<details>
<summary>Do I have to only use the tools I am given?</summary>

You must use the tools given in the selection. You can use other tools _as well_ if you want, but you must use the tools in the selection to complete the challenge.

</details>
<details>
<summary>Do I have to recreate the website exactly?</summary>

Not exactly. There are some rules you must follow, and some things you can change:

### What must be the same:

#### You must use the same rules

The about page must have the same text, and the same rules. You can't change the rules, or add or remove text from the about page.

#### You must include an "explain" page

You must include a page which explains which tools you used to build the site. Any interesting technical details can be included on this page too!

#### You must use the tools defined in [site/data](https://github.com/CodeYourFuture/1000-Paper-Cranes/tree/main/site/data)

If you look in this folder, you will find there is extra information about each tool, which you might want to use in your design. You can query these json files directly from your website, or you can copy them into your project and use them as you wish, but you can't add or remove tools.

#### You must use the html structure

You must use the html structure given. You may add things (classes, more elements), but not remove anything.

#### Your page must score 100% on Lighthouse Accessibility

You can check this by running Lighthouse in Chrome DevTools.

### What can be different:

You can make it look however you want! You can bring in more data from the provided data files. You can add extra features if you want. You can use different colours, fonts, images, etc. It would be fun to recreate this website exactly using your combo, and then "refold" using the same combo, to make it look or feel different.

You should aim to build this website _at least_ ten times, so how will you make each one different and a development of your skills?

</details>
<details>
<summary>Can I copy your code?</summary>
Yes. This is an open source project and all the code can be re-used. You will have to apply the code to your own combination of tools, but you can reuse as much, or as little, as you want.

Reading code is a great way to learn. You can see how someone else has solved a problem, and then you can apply that solution to your own problem. You can also see how someone else has written code, and then you can use that style in your own code.

Blindly copy-pasting code is rarely wise if you are actually trying to learn something. Consider your goal: you are here to develop your skills and get a good job in tech. Copypaste is not a marketable skill. So read the code and understand it. Then apply it to your own project.

</details> 
<details>
<summary>Do I have to do this on my own?</summary>

You can use the cranes challenge in groups _as well_ as on your own. As you should aim to build this website _at least_ ten times, building in a group sometimes is a good way to mix it up and get more development from the challenge.

</details>
<details>
<summary>Who is this challenge for?</summary>

This challenge is for anyone who wants to play! We made it for [Code Your Future]("https://codeyourfuture.io") trainees, but it is open to anyone who wants to learn.

The most interesting submissions will be merged and shown in a gallery. If you want to be in the gallery, you must submit your work as a pull request to this repository.

</details>
<details>
<summary>What do I need to do this challenge?</summary>

You will need a computer with a web browser and an [IDE](https://code.visualstudio.com/download). You will also need a [GitHub account]("https://github.com").

For some combinations you will need to install more tools, like [Node.js]("https://nodejs.org/en/download/"), [Homebrew]("https://brew.sh/"), Go, Ruby, Python, etc. You will need to install these tools yourself. Click through and follow the instructions. Everything is free.

</details>
<details>
<summary>How do I submit?</summary>

Clone this repository and change into the repo directory:

```bash
git clone git@github.com:CodeYourFuture/1000-Paper-Cranes.git && cd 1000-Paper-Cranes
```

Create a new branch for your work:

```bash
git checkout -b crane/your-combination-your-name
```

Make a new directory for your work and change into it:

```bash
mkdir cranes/your-combination-your-name && cd cranes/your-combination-your-name
```

Build your website! Look at the [gallery](https://codeyourfuture.github.io/1000-Paper-Cranes/gallery) to see what you are aiming for. (TBA)

Commit your work regularly, making many small commits with descriptive messages. When you are happy with your crane, open a pull request to merge your branch into the main branch. You can do this from the GitHub website.

</details>

## Acceptance criteria

- [ ] The page must be built using the tools given
- [ ] The page must be built using the html structure given
- [ ] The page must be built using the rules given
- [ ] The page must be built using the data given
- [ ] The page must score 100 on Lighthouse Accessibility
