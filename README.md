# Founder Stop Photography

![Founder Stop Logo](public/images/logo.svg)

A professional photography service for startup founders, built by a founder who understands exactly what startups need. This site was created with Astro and Tailwind CSS, featuring a clean, developer-friendly design.

## About This Site

Founder Stop Photography offers the "Git Push" package - a specialized photography service for startup founders that need professional images but don't know where to start.

### Key Features

- **Tech-focused branding** using developer terminology (Git Push)
- **JetBrains Mono** typography for a developer-friendly aesthetic
- **Simple, straightforward approach** with one clear package
- **Modern, responsive design** built with Astro and Tailwind CSS
- **Netlify-ready forms** for easy deployment

## Tech Stack

- **Framework**: Astro
- **Styling**: Tailwind CSS
- **Typography**: JetBrains Mono
- **Deployment**: Optimized for Netlify

## Project Structure

```text
/
├── public/
│   ├── images/        # Site images, logo, portfolio samples
│   └── favicon.svg    # Custom site favicon
├── src/
│   ├── components/    # Page components
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Navbar.astro
│   │   ├── Portfolio.astro
│   │   └── Services.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── tailwind.css
└── package.json
```

## Development Commands

| Command             | Action                                      |
| :------------------ | :------------------------------------------ |
| `npm install`       | Install dependencies                        |
| `npm run dev`       | Start dev server at `localhost:4321`        |
| `npm run build`     | Build for production to `./dist/`           |
| `npm run preview`   | Preview production build locally            |

## Deployment

The site is optimized for deployment on Netlify with form handling:

1. Connect your Netlify account to your repository
2. Deploy with the default settings
3. Forms will work automatically with the Netlify attribute

## Customization

### Adding Real Photography Samples

1. Add your images to the `public/images/` directory
2. Update the image references in the portfolio component

### Updating Content

Each section is contained in its own component for easy updates:

- Change package details in `src/components/Services.astro`
- Update bio information in `src/components/About.astro`
- Modify contact details in `src/components/Contact.astro`

## Made by Robert Ross

Created by Robert Ross, founder of FireHydrant. Photography is my creative outlet away from the startup hustle.

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

# Founder Stop Photography Website

This is the official website for Founder Stop Photography, a specialized photography service targeting startup founders who need professional images for their companies.

## 🚀 Project Structure

The website is built with Astro and Tailwind CSS, with a clean, modern design that showcases the photography services offered by Robert Ross.

```text
/
├── public/
│   ├── images/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Navbar.astro
│   │   ├── Portfolio.astro
│   │   └── Services.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 🎨 Customization

### Photography
1. Replace the placeholder images in the `public/images/` directory with actual photography samples
2. Update the portfolio items in `src/components/Portfolio.astro` to reflect the actual portfolio
3. Update Robert's profile image and information in `src/components/About.astro`

### Contact Information
Update the contact information in `src/components/Contact.astro` with actual contact details.

### Content Updates
The website is structured in components, making it easy to update specific sections:
- Hero banner: `src/components/Hero.astro`
- About section: `src/components/About.astro`
- Services/Packages: `src/components/Services.astro`
- Portfolio: `src/components/Portfolio.astro`
- Contact: `src/components/Contact.astro`
- Footer: `src/components/Footer.astro`

## 🌐 Deployment

The website can be deployed to any static hosting service such as Netlify, Vercel, GitHub Pages, or any other service that supports static site hosting.

To deploy:
1. Run `npm run build` to generate the static files
2. Upload the `dist` directory to your hosting service
3. Configure your domain and DNS settings accordingly
