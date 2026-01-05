---
title: "Fun Friday: automating my publishing chore with n8n and Gemini"
tags: 
- automation
- generative-ai
- workflow-optimization
permalink: "fun-friday-automating-my-publishing-chore-with-n8n-and-gemini"
---

![cover: Editorial tech vector art, minimalist, cyber punk, dark mode aesthetic. A centralized glowing AI core resembling Gemini connecting to various digital nodes and pipes representing n8n automation workflows. Neon violet and deep blue accents on a pitch-black background. Sharp geometric lines, clean composition, and high-tech abstract interface elements.](https://chachaanteng.co/assets/images/ 2026-01-03-fun-friday-automating-my-publishing-chore-with-n8n-and-gemini-cover.png)

Again it is fun Friday, how lucky to start my 2026 with a fun Friday. I followed some software 前輩 advice to roll up my sleeves and build. I have built on a suite of new tools and workflows to eliminate a source of boredom in my routine.

Ever feel like you have a hard time maintaining a consistent online presence? Maintaining a vibrant online presence on multiple platforms can feel like an endless publishing chore. **That was my Friday problem.** I decided to start building an *agent* to do the heavy lifting of copy and pasting.

I spent 0 minutes deciding I will go with the default: **Google Doc**, **n8n** and **Gemini**. Most of the time I will spend time evaluating but I decided to combine my experience and collective wisdom with my intuition.

Then I outlined my multi-platform publishing nightmare to Gemini. It helped me think through the entire workflow and its potential roadblocks. My prompting techniques remained basic(Secret: “Be my most critical and nitpicking boss and comment on my plan.”), I still needed to clarify and craft the workflow in concept as concisely as possible.

After I was satisfied with the workflow “pseudocode”, I asked Gemini to generate the initial workflow in **n8n JSON**. *Voilà!* The whole JSON was instantly laid out. And I thought it was done. Turns out I am again too optimistic. The real learning happened in the “last miles”. I spent 67% of my time here and learn two things:

1. Integrating services is still manual: For instance the GitHub API (which demands Base64-encoded files) while my initial process outputted binary data meant I spent **half my time** meticulously "gluing" those nodes together. 
2. The tools are evolving faster than the foundation model. The output from Gemini does not adhere to the latest n8n version, even when I instruct it to process the latest document. Luckily I am equipped with the patience and prior knowledge to try & read and understand. 

I can see some of my time can be used to prompt a better model (Claude Code Opus 4.5 maybe?) with better questions. But this is the key: LLM as a new abstraction of software is still flaky by nature. I borrow one of the best tech founders coined: working with LLM is like working with a drunk intern, but this intern's best performance IS getting better very fast.

Do you have any more interesting little projects that help you work a bit faster and learn new tools at the same time? Let us know!

#Automation #GenerativeAI #WorkflowOptimization
