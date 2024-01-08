# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshots

<div>
  <p>Mobile view</p>
  <img width="377" alt="Mobile view" src="https://github.com/Ant-Shell/faq-accordion/assets/100455148/b4457bc4-a7f5-4029-a270-537596343989">
  <br>
  <br>
  <p>Desktop view</p>
  <img width="769" alt="Desktop view" src="https://github.com/Ant-Shell/faq-accordion/assets/100455148/f0b0e177-1c5e-4eeb-a171-819e6c3af7d5">
</div>

### Links

- Solution URL: [Solution URL](https://www.frontendmentor.io/solutions/faq-accordion-using-react-and-scss-Uv2ljOa151)
- Live Site URL: [Live Site URL](https://faq-accordion-lovat-three.vercel.app/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [SASS](https://sass-lang.com/) - For styles
- [Vite JS](https://vitejs.dev/) - Frontend Tooling

### What I learned

In order to render the accordion sections, I first created a [Card](https://github.com/Ant-Shell/faq-accordion/blob/main/src/components/Card/Card.jsx) component. I then created an [Accordion](https://github.com/Ant-Shell/faq-accordion/blob/main/src/components/Accordion/Accordion.jsx) component and wanted a way create multiples of them. I relaized that there were questions and answers associated with the accordions, so I created a [data](https://github.com/Ant-Shell/faq-accordion/blob/main/src/data/data.jsx) file with an array of objects. Each object had `id`, `question` and `answer` properties. I was able to then import the `data` file in the `Card` component and map over the array of objects to create multiple accordions, each with their own separate questions and answers. I used the `id` property as a `key` for each accordion as well.

One interesting bit was the separators for each accordion dropdown. I added the separator bar as an image in the `Accordion` component, but I didn't want to appear for the first one, per the Figma composition. In order to solve this, I gave the img a className which utilized an interpolated id passed down as a prop from the `Card` component. This allowed me to hide the first separator bar image via SCSS>

```html/jsx
<img className={`bar-${id}`} src={bar} alt="Separator bar"/>
```
```css
.bar-1 {
  visibility: hidden;
}
```

### Continued development

This was the first time I've used SASS in a project, so I look forward to learning more about it. My goal is to use more of its available features and utilizing best practices.

### Useful resources

- [SASS Documentation](https://sass-lang.com/documentation/) - This documentation helped me learn some features of SCSS
- [MDN CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS) - MDN is a must-have for reference. The CSS documentation is amazing!

## Author

- Website - [ant-shell.me](https://www.ant-shell.me/)
- Frontend Mentor - [@Ant-Shell](https://www.frontendmentor.io/profile/yourusername)
- LinkedIn - [in/anthonyshellman](https://www.linkedin.com/in/anthonyshellman/)

## Acknowledgments

Shoutouts to [@AnaBennett11](https://github.com/AnaBennett11) for working with me, and introducing me to [Frontend Mentor](https://www.frontendmentor.io/)!
