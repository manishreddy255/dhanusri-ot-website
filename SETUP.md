# Setup Guide

## EmailJS Configuration (Required for Contact Form)

1. Go to [EmailJS](https://www.emailjs.com) and create a free account
2. Create an **Email Service** (e.g., Gmail)
3. Create an **Email Template** with these variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{phone}}` - Sender's phone
   - `{{userType}}` - Parent / Professional / etc.
   - `{{serviceType}}` - Service they need
   - `{{childAge}}` - Child's age
   - `{{message}}` - Their message
4. Get your **Public Key** from Account settings
5. Update these values in `src/components/Contact.tsx`:
   ```typescript
   const EMAILJS_SERVICE_ID = 'your_service_id';
   const EMAILJS_TEMPLATE_ID = 'your_template_id';
   const EMAILJS_PUBLIC_KEY = 'your_public_key';
   ```

## GitHub Pages Setup

1. Go to your repository Settings > Pages
2. Source: Select "GitHub Actions"
3. The workflow will automatically deploy on every push to main

## Custom Domain (Optional)

1. Add a `CNAME` file in the `public/` folder with your domain
2. Configure DNS with your provider
3. Update the `base` in `vite.config.ts` if not using a custom domain
