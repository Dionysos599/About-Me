# Hinyeung Lam - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, clean design, and professional presentation of projects and experience.

## 🚀 Features

- **Modern Design**: Clean, professional layout with soft rounded corners and drop shadows
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Sticky Navigation**: Fixed navbar with smooth scrolling between sections
- **Interactive Elements**: Hover effects and micro-interactions throughout
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 📋 Sections

1. **Hero Section**: Introduction with social links and call-to-action
2. **About Me**: Personal bio and interests
3. **Projects**: Showcase of projects with technology tags
4. **Experience**: Work and internship timeline
5. **Education**: Academic background and skills
6. **Contact**: Contact form and social links

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **React Intersection Observer**: Scroll-based animations

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

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

## 🎨 Customization

### Colors and Theme
The color scheme can be customized in `tailwind.config.js`:
- Primary colors: Blue gradient theme
- Gray scale: Neutral grays for text and backgrounds
- Custom animations and transitions

### Content Updates
Update the JSON files in `src/data/` to modify content:
- `aboutMe.json`: Bio and interests
- `projects.json`: Project information and links
- `resume.json`: Personal info, experience, education, and skills

### Styling
- Global styles in `src/index.css`
- Component-specific styles using Tailwind classes
- Custom CSS classes defined in the CSS file

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel
1. Import your GitHub repository
2. Framework preset: Create React App
3. Deploy automatically

### GitHub Pages
1. Add `"homepage": "https://username.github.io/repo-name"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add scripts to package.json:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Deploy: `npm run deploy`

## 🔧 Development

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add to `App.js`
3. Add navigation link in `Navbar.js`

### Adding Animations
Use Framer Motion for animations:
```jsx
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

<motion.div
  variants={variants}
  initial="hidden"
  animate="visible"
>
  Content
</motion.div>
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Hinyeung Lam**
- Email: hinyeung599@outlook.com
- GitHub: [@Dionysos599](https://github.com/Dionysos599)
- LinkedIn: [Hin Yeung Lam](https://www.linkedin.com/in/hin-yeung-lam-93287a256)
- Portfolio: [ooink.fun](https://ooink.fun)

---

Built with ❤️ using React and Tailwind CSS 