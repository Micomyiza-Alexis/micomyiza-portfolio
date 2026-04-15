# Micomyiza Alexis - Portfolio Website

A modern, responsive personal portfolio website built with React.js, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- ✨ Smooth animations with Framer Motion
- 🎯 Single-page scrolling navigation
- 📧 Contact form (EmailJS integration ready)
- 🎭 Interactive UI components

## Technologies Used

- **React.js** - Frontend framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **EmailJS** - Contact form (optional)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```powershell
npm install
```

2. Start the development server:
```powershell
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```powershell
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```powershell
npm run preview
```

## Customization

### Personal Information

Edit `src/data.js` to update your personal information, skills, and projects.

### Colors

Update colors in `tailwind.config.js`:
- Primary: #0077B6
- Secondary: #F4A261
- Accent: #27AE60
- Danger: #E63946
- Dark: #2B2D42
- Light: #F5F7FA

### EmailJS Setup (Optional)

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Get your Service ID, Template ID, and User ID
3. Update `src/components/Contact.jsx` with your credentials

## Project Structure

```
Portifolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── data.js
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- Email: micomyizaa742@gmail.com
- GitHub: [micomyizaalex](https://github.com/Micomyiza-Alexis)
- LinkedIn: [micomyizaalex](https://linkedin.com/in/micomyizaalex)
