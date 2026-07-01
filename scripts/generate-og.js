import sharp from 'sharp'

const W = 1200
const H = 630

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#080608"/>
  <rect x="220" y="160" width="760" height="340" rx="24" fill="none" stroke="rgba(240,90,26,0.12)" stroke-width="2"/>
  <text x="600" y="300" text-anchor="middle" fill="#ffffff" font-family="Georgia, serif" font-weight="700" font-size="72">César Medina</text>
  <text x="600" y="370" text-anchor="middle" fill="#f05a1a" font-family="Helvetica Neue, sans-serif" font-weight="600" font-size="30" letter-spacing="2">Full Stack Web Developer</text>
  <text x="600" y="430" text-anchor="middle" fill="#998880" font-family="Helvetica Neue, sans-serif" font-weight="500" font-size="20">React · Node.js · IA · Sevilla</text>
</svg>`

sharp(Buffer.from(svg))
  .png()
  .toFile('public/og-image.png')
  .then(() => console.log('og-image.png generated'))
  .catch(err => { console.error(err); process.exit(1) })
