# Secure Password Generator 🔐

A fully responsive and secure password generator built using HTML, CSS, and Vanilla JavaScript.

This project started as a basic JavaScript practice project using `Math.random()`, but later evolved into a more secure implementation using the Web Crypto API with a CSPRNG (Cryptographically Secure Pseudo-Random Number Generator) for generating truly secure passwords.

The goal of this project was not only to build a useful application, but also to strengthen my understanding of core JavaScript concepts through hands-on development.

---

# 🌐 Live Demo

👉 https://kashish-tech2077.github.io/Password-generator/

---

# 📸 Project Preview

<img width="1366" height="614" alt="image" src="https://github.com/user-attachments/assets/11f6a712-ad36-4805-844c-7ca5deb1366e" />

---

# 🚀 Features

- Generate highly secure random passwords
- Uses Web Crypto API instead of `Math.random()`
- Password strength detection system
- Copy password instantly using Clipboard API

## Character Type Selection

- Uppercase letters
- Lowercase letters
- Numbers
- Symbols

## Password Controls

- Dynamic password length slider
- Increase/decrease password length buttons

## Visual Password Strength Representation

- 🏕️ Tent → Very Weak
- 🚐 Caravan → Weak
- 🏠 House → Good
- 🏰 Castle → Strong
- 🛡️ Fortress Castle → Very Strong

## Responsive Design

Works across:

- 4K monitors
- Laptops
- Tablets
- Mobile devices
- iPhone SE sized screens

---

# 🧠 What I Learned

While building this project, I learned:

- Difference between `Math.random()` and cryptographically secure randomness
- How the Web Crypto API works
- CSPRNG-based password generation
- Working with sliders and dynamic UI updates
- DOM manipulation
- Conditional rendering logic
- Password strength calculation logic
- Handling checkbox states
- Using the Clipboard API
- Understanding asynchronous functions and Promises
- Building responsive layouts using CSS

---

# 🛠️ Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Web Crypto API
- Clipboard API

---

# 🔒 Why Web Crypto API?

Initially, this project used:

```javascript
Math.random()
```

But `Math.random()` is not cryptographically secure and should not be used for generating sensitive passwords.

So the project was upgraded to use:

```javascript
crypto.getRandomValues()
```

which is backed by a CSPRNG (Cryptographically Secure Pseudo-Random Number Generator) and is significantly more secure.

---

# 📱 Responsive Design

This project is fully responsive and optimized for:

- Desktop screens
- Tablets
- Mobile phones
- Small devices like iPhone SE

---

# 🎯 Future Improvements

Possible future updates:

- Password history
- Dark mode
- Password entropy calculator
- Custom exclusions
- Save favorite passwords locally
- Animated strength meter
- Generate memorable passphrases

---

# 🙌 Inspiration

The password strength visual system was inspired by an existing password generator website, where stronger passwords visually represent stronger protection structures.

---

# 📬 Feedback

Feedback, suggestions, and improvements are always welcome.

If you liked this project, consider giving it a ⭐ on GitHub.

---

# 👨‍💻 Author

## Kashish

GitHub:  
https://github.com/Kashish-tech2077
