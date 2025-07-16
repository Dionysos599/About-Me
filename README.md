# Hinyeung Lam - Portfolio Website

[A modern, responsive portfolio website](https://dionysos599.github.io/About-Me/) built with React and Tailwind CSS. Features smooth animations, clean design, and professional presentation of projects and experience.  

## 📋 Sections

1. **Hero Section**: Introduction with social links and call-to-action
2. **About Me**: Personal bio and interests
3. **Projects**: Showcase of projects with technology tags
4. **Experience**: Work and internship timeline
5. **Education**: Academic background and skills
6. **Contact**: Contact form and social links

## 👤 Author

**Hinyeung Lam**
- Email: hinyeung599@outlook.com
- GitHub: [@Dionysos599](https://github.com/Dionysos599)
- LinkedIn: [Hin Yeung Lam](https://www.linkedin.com/in/hin-yeung-lam-93287a256)
- Game Studio: [ooink.fun](https://ooink.fun)

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation bar
│   ├── Hero.js         # Hero section
│   ├── About.js        # About section
│   ├── Projects.js     # Projects showcase
│   ├── Experience.js   # Work experience
│   ├── Education.js    # Education section
│   └── Contact.js      # Contact form
├── data/               # JSON data files
│   ├── aboutMe.json    # About information
│   ├── projects.json   # Project data
│   └── resume.json     # Resume information
├── App.js              # Main app component
├── index.js            # React entry point
└── index.css           # Global styles and Tailwind imports
```

## 📦 Development Instruction

1. **Install dependencies, start the server, and open in browser**
   ```bash
   npm install
   npm start
   ```
   and navigate to `http://localhost:3000`

2. **Styling**  
   The color scheme can be customized in `tailwind.config.js`  
   Update the JSON files in `src/data/` to modify content:
   - `aboutMe.json`: Bio and interests  
   - `projects.json`: Project information and links  
   - `resume.json`: Personal info, experience, education, and skills
   
   All other stylings can be found in `src/index.css` and other CSS files.

## 🏗️ Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
