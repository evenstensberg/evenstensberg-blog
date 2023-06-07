---
title: From PoC to stable repositories
date: 2023-06-07 17:40:20
tags:
---

Been in the industry working at multiple companies with different stages of their development cycle, I've been in various of situation for projects. Either if that is a Proof of Concept, a beta version or a stable build, it has taught me some tricks and tips that might come in handy if you are in a similar position. Lets go through these!

---

## Prolouge

Developing a product is not very different than learning to program for the first time. It takes iterations, sometimes when you encounter a problem you need to go back and re-deo your implementation as well as thinking of scenarios where your code will be volatile.

The similarity in the development of a product (in terms of Software Engineering) is close. In the start of a project you might only need some requirements to fit your Proof of Concept, while over time you will need to follow design prinicples, technical specifications or versioning of your software.

**In this post I will chronologically go through how projects evolves into a state of art products.**

---

# Proof of Concept

You might know what a Proof of Concept is, but it's worth revisiting. The term denotes a product that is created to show steakholders or your boss that an implementation works.

# Early Stage

In the early stages of a product, you might have created some source code structure, but it's far from perfect. Ideally the structure of the code will make the product itself easy to develop without any major oversight of process to create a deploy.

In this stage, most of the main features of your product is made, speed of development is good, but keep in mind that fast development means more verbose code and messy process of distributing your software.

## Good

- Fast development
- No oversight
- Easy to pivot
- Iteration to next phase is easier if features are written first

## Bad

- Code is messy
- No process of development

# Intermidate Software

Ideally this is where you want to be as a startup. You have good source structure, code style is followed, formatting and some documentation of how to run the repository is given.

In a startup environment this is where you want to be. In the union of stable software with strict, well written and documented code and a fast phased development.

## Good

- Structure while maintaining speed
- Easy to create functionality
- Simple to onboard
- Creates good value w.r.t time used on bringing value

## Bad

- Hard to onboard sometimes
- Lacking technical specifications
- PM/Dev might write bad issues, hard to reproduce issues

# Stable Product

In stable products your CI/CD for development, staging and production is good. Like mentioned in the last section this is where you have good abstractions of code, well documented code, documentation is top-notch and your source code is very specific. Ideal in a situation where your product and features doesnt change much (but at the cost of slow churn!).

## Good

- Structure in every part of project
- Good reproduction cases
- Split responsibility of code
- Tehcnical speicfication always guuaranteed

## Bad

- Hard to onboard sometimes
- Not easy to pivot
- Features takes more time

---

# Conclusion

All of the stages a project is in depends of the requirements and vision of your product. Personally, being in the middle of a stable product and an intermediate solution creates more value while having good enough boundaries for a developer to make good code.

Thanks for reading!
