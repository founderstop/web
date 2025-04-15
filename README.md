# Astro Starter Kit: Basics

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
