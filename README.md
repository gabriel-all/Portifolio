# Portfolio

A modern, responsive portfolio website showcasing my projects and skills as a developer.

[View Portfolio](https://gabriel-portifolio.netlify.app/)

---

## Overview

This portfolio was built with a focus on performance, accessibility, and user experience. It features a clean dark theme, smooth animations, and a fully functional contact system with email integration.

---

## Tech Stack

### Frontend
| Technology | Version | Description |
|------------|---------|-------------|
| Next.js | 14 | React framework with App Router for SSR and routing |
| React | 19 | UI library for building component-based interfaces |
| TypeScript | 5 | Static typing for JavaScript |
| Tailwind CSS | 3 | Utility-first CSS framework |
| Shadcn/UI | Latest | Pre-built accessible UI components |
| Lucide React | Latest | Modern icon library |

### Backend & Services
| Technology | Description |
|------------|-------------|
| Next.js API Routes | Serverless functions for backend logic |
| Resend API | Transactional email service for contact form |

### Infrastructure
| Service | Description |
|---------|-------------|
| Netlify | Hosting and CI/CD deployment |
| Git/GitHub | Version control and repository hosting |

---

## Key Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Dark Theme** - Modern aesthetic with carefully selected color palette
- **Project Gallery** - Interactive image carousel with modal view
- **Contact Form** - Integrated email system powered by Resend API
- **Performance** - Optimized loading times with Next.js features
- **SEO Ready** - Meta tags and semantic HTML for search engines
- **Accessibility** - ARIA labels and keyboard navigation support

---

## API Integration

### Resend API
Used for handling contact form submissions. When a visitor submits the contact form, the API processes the request and delivers the message directly to my email inbox.

**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

---

## Project Structure

```
portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts       # Email API endpoint
│   ├── layout.tsx             # Root layout with fonts
│   ├── page.tsx               # Main page
│   └── globals.css            # Global styles and theme
│
├── components/
│   ├── ui/                    # Reusable UI components
│   ├── navbar.tsx             # Navigation with mobile menu
│   ├── hero.tsx               # Landing section
│   ├── about.tsx              # About me section
│   ├── projects.tsx           # Project showcase
│   ├── tech-stack.tsx         # Skills and technologies
│   ├── contact.tsx            # Contact form
│   └── footer.tsx             # Footer with social links
│
├── lib/
│   ├── utils.ts               # Utility functions
│   └── get-resend-client.ts   # Resend API configuration
│
└── public/
    ├── Fotoappreserva/        # Project screenshots
    └── curriculo.pdf          # Downloadable resume
```

---

## Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/seu-usuario/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install --legacy-peer-deps
```

3. **Configure environment variables**

Create a `.env.local` file in the root directory:
```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=your_email@example.com
```

4. **Start development server**
```bash
npm run dev
```

5. **Open in browser**
```
http://localhost:3000
```

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes | API key from [resend.com](https://resend.com) |
| `CONTACT_EMAIL` | Yes | Email to receive contact submissions |

---

## Deployment

### Netlify

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
3. Add environment variables in Site Settings > Environment Variables
4. Deploy

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Author

**Gabriel de Andrade**

- Email: gabrielandrade221b@gmail.com
- LinkedIn: [seu-linkedin](https://linkedin.com/in/seu-perfil)
- GitHub: [@seu-usuario](https://github.com/seu-usuario)

