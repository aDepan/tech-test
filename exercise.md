# Oakwood Front-end Coding Exercise

*Hi!*

We’re glad you are interested in a position at Oakwood. We’ve put together a small coding exercise for you to show off your front-end skills.

If you have any questions please reach out to vincent@oakwood.se

Thanks and good luck!

## Guidelines
- For this exercise we want you to use React. Feel free to use modern browser features and APIs
- We will be judging the functionality as well as your coding style, the readability of your code and your creativity in solving the exercise
- We prefer JSS for styling
- Send us your source code/link to your CodePen/Codesandbox etc...

## Exercise

### Step 1
Style these two buttons and their hover states:

![buttons](https://user-images.githubusercontent.com/4313088/35987696-babbff00-0cfc-11e8-8986-8a47eb675f9f.png)

For the plus and minus icons, feel free to style `+` and `-` characters, use inline svgs or any other solution you can come up with.

The colors used are: `black`, `white`, `hotpink` and `rebeccapurple`.

---

### Step 2
Time to put the buttons into action! First create the following layout using the two buttons from Step 1:

![counter](https://user-images.githubusercontent.com/4313088/35988085-d26f12a8-0cfd-11e8-8ea8-ffeb13ec25f7.png)

Then bring the counter to live with JavaScript: When pressing the `- DECREMENT` button, decrement the counter, when pressing `+ INCREMENT`, increment the counter.

---

### Step 3
At Oakwood we ❤️ GitHub and we ❤️ open source. We've therefore put together a list of some of our favourite GitHub repositories. *(If you don't know all of them, go and check them out!)*

```js
[
  'eslint/eslint',
  'oakwood/front-end-questions',
  'babel/babel',
  'webpack/webpack',
  'storybooks/storybook',
  'facebook/react',
  'reactjs/redux',
  'expressjs/express'
]
```

We would like to display some data about the repositories. Use the counter as an index for the above array (`eslint/eslint` if the counter is 0, `oakwood/front-end-questions` if it's 1, ...) and fetch information about the GitHub repository from GitHub's API: `https://api.github.com/repos/{repositoryName}`.

Display the following data underneath the counter and style it however you see fit:

- full name (`full_name`)
- description (`description`)
- amount of stars (`stargazers_count`)

Handle and display any errors the API might throw, also think about any other potential problems and how you could prevent them.

---

### Extra
Add a loading indication to the application: While new data is being fetched from the API, a loader should be displayed on the page.

It's enough to display a text such as "loading repository", but feel free to get creative!