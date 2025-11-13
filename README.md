# Personal Research Website

A clean and professional research website for showcasing publications and bio.

## Quick Start

### 1. Add Your Profile Photo

**Important:** You need to add your profile photo to the website:

1. Download your profile photo from LinkedIn (or use any professional photo)
2. Rename it to `profile.jpg`
3. Upload it to the root directory of your repository (same location as `index.html`)
4. The photo should be square and at least 300x300 pixels for best quality
5. Supported formats: JPG, JPEG, PNG (if using PNG, update the `src` in `index.html` to `profile.png`)

**Alternative:** If you want to use your photo directly from a URL, edit `index.html` and change:
```html
<img src="profile.jpg" alt="Anand K Prakash" class="profile-photo">
```
to:
```html
<img src="YOUR_PHOTO_URL" alt="Anand K Prakash" class="profile-photo">
```

### 2. Content Already Configured

Your website already includes:
- Professional bio describing your role at LBNL and academic background
- Contact information (LBNL and CMU email addresses)
- 70 publications from your Google Scholar profile
- Links to Google Scholar and LinkedIn

All content is ready to go once you add your profile photo!

### 3. Deploy to GitHub Pages

1. Go to your GitHub repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select the branch you want to deploy (e.g., `claude/personal-research-website-011CV59trXL2TVawb6LLLdFf` or `main`)
4. Click "Save"
5. Your site will be published at `https://[your-username].github.io/personal-website/`

### 4. Connect Your GoDaddy Domain (anandkprakash.com)

#### Step 1: Configure GitHub Pages

The CNAME file has already been created with your domain `anandkprakash.com`.

Once you enable GitHub Pages (step 2 above), also:
1. Check the "Enforce HTTPS" option (wait a few minutes after setting up the custom domain)

#### Step 2: Update DNS Settings in GoDaddy

1. Log in to your GoDaddy account
2. Go to your domain management page for `anandkprakash.com`
3. Find the DNS settings
4. Add/Update the following DNS records:

**For root domain (anandkprakash.com):**
- Type: `A`
- Name: `@`
- Value: `185.199.108.153`
- TTL: `600` (or default)

Add three more A records with the same settings but different values:
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

**For www subdomain (www.anandkprakash.com):**
- Type: `CNAME`
- Name: `www`
- Value: `[your-github-username].github.io`
- TTL: `600` (or default)

#### Step 3: Wait for DNS Propagation

- DNS changes can take 24-48 hours to fully propagate
- You can check the status using tools like `https://dnschecker.org`
- Test your site by visiting `http://anandkprakash.com` (HTTPS will work once DNS propagates and GitHub provisions the certificate)

### Alternative: Simpler Setup (GitHub Pages URL)

If you want to skip the custom domain setup for now, you can simply:
1. Enable GitHub Pages as described in Step 2
2. Access your site at `https://[your-username].github.io/personal-website/`
3. Connect the custom domain later when ready

## File Structure

```
personal-website/
├── index.html          # Main HTML file
├── styles.css          # Styling
├── script.js           # JavaScript for loading publications
├── data.js            # Your publications data (EDIT THIS)
├── CNAME              # Custom domain configuration
└── README.md          # This file
```

## Customization

### Changing Colors
Edit `styles.css` and modify the CSS variables in the `:root` section:
```css
:root {
    --primary-color: #2563eb;  /* Main accent color */
    --text-primary: #1f2937;    /* Main text color */
    --text-secondary: #6b7280;  /* Secondary text color */
    /* ... other colors ... */
}
```

### Adding More Sections
You can add more sections to `index.html` following the existing pattern:
```html
<section id="your-section" class="section">
    <h2>Section Title</h2>
    <!-- Your content -->
</section>
```

Don't forget to add a link in the navigation:
```html
<nav>
    <a href="#about">About</a>
    <a href="#publications">Publications</a>
    <a href="#your-section">Your Section</a>
    <a href="#contact">Contact</a>
</nav>
```

## Support

For issues with:
- **GitHub Pages**: Check [GitHub Pages documentation](https://docs.github.com/en/pages)
- **GoDaddy DNS**: Contact GoDaddy support or check their DNS documentation
- **Website code**: Feel free to modify the HTML/CSS/JS files as needed

## License

Feel free to use and modify this template for your personal website.
