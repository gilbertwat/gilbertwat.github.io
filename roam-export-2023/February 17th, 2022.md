- https://bou.ke/blog/formulas/ {{[[moved]]}}[*](((KOBDKUohA)))
- {{[[DONE]]}}  NFT FAQ {{[[moved]]}}[*](((SuHoBqpLV)))
- 09:25 
    - Read https://eugeneyan.com/writing/red-flags/
        - Make sure [[Preface]] data team is up to the standard
        - **Data: No data, or data that’s poorly organized and/or inaccessible.**
        - **Roadmap: No/poor plan on how the team will deliver value to customers and the business.**
        - **Role: Misaligned expectations on the role and career progression guidelines.**
        - **Manager: Incompetent, lacks vision, abusive, etc.**
        - **Tooling: They use outdated or proprietary tools that are barely transferable to other roles.**
        - **Org structure: The data science team rolls up to an unusual C-level.**
        - **Iteration speed: The team moves too fast/slow for your liking.**
- 11:00
    - [[Deliver [[Theodore]]]] will be on [[February 22nd, 2022]] 🎉🎉🎉🎉🎉
- 15:00
    - [[1:1]] [[Moses Ngan]]
    - [[[[Preface]] [[product]]: website]] We need 4 people to coordinate to update 1 page of content.
    - GA4 for all course page
        - 8 events, 5 are from backend, 3 frontend
        - [[->]] https://docs.google.com/document/d/1VEbRR5J8FyPhgUP2hrB9upYidDfyyCCW_r1Mop_NPcs/edit#
- 16:30
    - [[[[Preface]] [[NFT]]]] work on the nextjs with some page in non-nextjs
        - The hack is copy and paste from no code tools 😉
        - Put the whole non-nextjs folder to `/public`
        - rename the root to `index.html`
        - Add new `rewrites` function to `next.config.js`
            - ```javascript
async rewrites() {
  return [{
    source: "/folder-name",
    destination: "/folder-name/index.html"
  }]
}```
        - test development build(`npm run dev`) and production build (`npm run build && cd out && npx serve`)
        - commit and push
        - test on vercel site
        - test on staging site
- 
