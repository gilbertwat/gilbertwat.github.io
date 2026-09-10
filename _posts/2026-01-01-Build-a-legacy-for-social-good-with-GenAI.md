---
title: Build a legacy of wisdom for social good with GenAI
category: Case Study
tags: [building]
excerpt: "A 3-part case study on stewarding a spiritual master's legacy through a GenAI-powered digital sanctuary — built with 20% technology and 80% empathy."
---

## Project goal and core principles

Since September, We have been honored to be part of a GenAI project that helped a revered spiritual master and the owner of an non-governmental organization (NGO) to bring relevance to his wisdom in this era of GenAI. Our sponsor wishes to ensure his lifetime of teachings can live on. His guidance doesn’t stop when he passes on. His goal is to build an enduring source of his wisdom with a GenAI engagement and digitalized knowledge archive.

His mission has a great synergy with our mission – to help people regain their freedom by improving their self-awareness. Our expertise in product development has also been a perfect match with our sponsor.

As we collaborate and we come to a satisfactory milestone, it is important for us to share what we experienced. Through this experience, we attempt to explore **“what does it mean to build a GenAI product in 2025? How does it differ from the SaaS era?”** We discovered that our empathy, strong domain knowledge and battle-hardened technical expertise have to work as one to bring us to a successful milestone. We cliché-ly coined a motto for ourselves:

*“Our attention is always to adopt 20% of technology with 80% of our empathy.”*

Since the domain of spirituality and counseling is deeply humane, the builders of such products have to thoroughly understand the nuances to build an effective product, and this understanding requires the builders to empathize with the users and sponsors deeply. In this 3 part series we will explore and articulate our discovery and learnings in solid cases.

We will focus on the sponsor or project owner perspective in part 1\. And in part 2 we will show how our 3 key elements \- empathy, strong domain knowledge and battle-tested technical expertise, penetrate in all aspects of how we build for our sponsor, including how we write code. And in part 3, we will show how we experiment with our sponsor to make sure the project is a win, how we co-create the winning condition together and keep each other in a tight loop to win together.

### For our sponsor

In this project, we transformed his personal wisdom into a powerful engine for social good. Our sponsor, a revered spiritual master, can turn his work to become an accessible, enduring resource for healing and guidance, available to anyone, anywhere. It is more than preservation; it's about sharing his wisdom to uplift communities and foster collective well-being for generations to come. His work can now touch more lives than before.

Our sponsor is also the owner of a NGO. The mission of his NGO is to promote mental wellness through meditation in all forms. He wishes to leverage the GenAI to help the core participants in his NGO and the general public. He sees this as a golden opportunity now to gain in-depth GenAI product development experience when GenAI technology is filling up our daily life. Through this experience he gained more insights on how this tool will shape our daily life in the coming years.

This is a model for transforming his unique knowledge into a scalable tool to amplify our mission's reach. By creating a trusted digital resource, we can serve a more and more globalized community of Hong Kong diaspora. This strategy allows us to sustainably scale our impact, ensuring our core message is accessible to everyone we aim to support.

We build this digital sanctuary, transforming a vast collection of teachings into an interactive, empathetic, and authentic guide with generative AI. This initiative is designed to serve two distinct, yet connected, communities:

### For our users

* For the dedicated followers of our sponsor: For the master’s students and practitioners, this tool will be more than a reference library; it will be a virtual companion. Imagine having a direct line to the vast knowledge of your teacher's wisdom, available anytime, anywhere. When you're facing a spiritual crossroad or need to recall a specific teaching, this AI will be there, responding with their master’s voice and knowledge, providing continuity and support on their path.
* For the public: For the wider public navigating the challenges of modern life, this project is an open door to profound insight. Many people seek relief from stress, anxiety, and the relentless pace of the urban world. This tool will offer them access to the master’s teachings and events, framed to help ease these specific burdens. It serves as a gentle introduction to a source of peace, offering practical wisdom that can be applied to everyday challenges, making spiritual guidance more accessible than ever before.

### For ourselves

From a technology and product standpoint, we are super excited. This is a high-stakes RAG (Retrieval-Augmented Generation) project where accuracy requirements are high but vague and guardrails are paramount. The core challenge is building a low-hallucination, contextually-aware, safety-first AI that can navigate sensitive topics with the users. The experience has to be highly empathetic. It’s a novel challenge in structuring a lifetime of nuanced, unstructured knowledge into a reliable, interactive system that truly honors the source.

To forge this digital sanctuary, we must move beyond typical product development. We are not just shipping features; we are stewarding a legacy. This requires a deeper level of commitment to our core principles—the guardrails that ensure every interaction is safe and genuinely helpful. These non-negotiables are the very soul of the project.

### Our three pillars of trust

1. Be the source of truth. Our primary directive is to maintain absolute fidelity to the master's teachings. This means the AI must be accurate, never providing wrong information, and never inventing or "hallucinating" content. It cannot be a creative writer; it must be a faithful conduit. Every piece of guidance, every answer, must be directly traceable to the source material. This ensures users are interacting with the master's pure wisdom, not a distorted echo.
2. Be a compassionate guardian. Moving beyond pure information, the AI must embody the spirit of the teachings. This requires it to be deeply empathetic, sensing the user's state and responding with warmth, not cold logic. This empathetic behavior extends to our most critical function: being responsible. We are building a system that can gracefully identify users in distress—particularly those at risk of self-harm—and immediately guide them toward real, human help. It is our duty to act as a compassionate guardian, prioritizing user well-being above all else.
3. Be a respectful guide. Finally, the system must honor the user's unique journey and personal boundaries. It will be discerning, recognizing the different needs of a dedicated practitioner versus a curious newcomer and tailoring its guidance accordingly. This respect for the individual is anchored by our commitment to being private. A spiritual path is deeply personal, and we will ensure the user's data and interactions are completely confidential, creating a sacred and secure space for them to explore and grow without reservation.

The journey so far has been transformative for all participants, and our team has benefited from the experience tremendously. Being entrusted with the legacy of a revered spiritual master is a profound honor. It has allowed us, as technologists, to engage with a domain of deep human experience that is seldom accessible in our field. While the project provided invaluable hands-on experience with the frontier of Generative AI, its greatest reward has been affirming our unique strength: the ability to build with empathy at our core.

We eagerly anticipate the deployment of this digital sanctuary and are committed to working with our sponsor to quantify the positive impact it creates for its communities.

In Part 2, we will dive deeper into how our *“Our attention is always to adopt 20% of technology with 80% of our empathy.”*  approach translates into action and shapes every aspect of how we build—from code to user experience.

## Technology with Empathy

In Part 1, we introduced the heart of our project: building a digital sanctuary to steward the legacy of a spiritual master. We shared our guiding principle, a simple yet powerful motto that shapes every decision we make:

“Our attention is always to adopt 20% of technology with 80% of our empathy.”

For many meaning seeking technologists, this might sound like an abstract ideal. But for us, it’s a concrete engineering directive. It dictates not just what we build, but how we build it. In this part, we’ll pull back the curtain on our technology stack and design philosophy. This is for the detail-minded builders who understand that the right tools, wielded with intention, can transform a mission into a reality. This wasn't about picking the trendiest tech; it was about selecting a stack that would become an extension of our core principles: truth, compassion, and respect.

### The Unseen Foundation: The Primacy of Source Data

Before a single line of code was written or an API key was generated, our most critical work began with the knowledge itself. In any Retrieval-Augmented Generation (RAG) system, there's an immutable law: the quality of the knowledge base represents the absolute ceiling for the quality of the product. The most sophisticated LLM and the most elegant architecture cannot compensate for inconsistent, inaccurate, or incomplete source material.

Our sponsor and his team were instrumental in this stage, and their contribution cannot be overstated. Without their deep domain expertise and tireless effort, the quality of our product would be a pale shadow of what it is today. They helped us curate and structure two distinct, powerful streams of data:

1. **Archived Question & Answer Sessions:** This is our most precious dataset. It consists of thousands of real-life questions posed to the master over the years. Crucially, this data wasn't just a list of questions and answers. The sponsor's team provided vital **background context on the person asking the question**—their emotional state, their life situation, and their level of familiarity with the teachings. This provided the AI with an invaluable blueprint for empathy, teaching it not just *what* to say, but *how* to respond to the human being behind the query.
2. **Core Teachings (Lectures & Writings):** This second stream included decades of lectures, books, and articles. This content was less interactive and more didactic. A significant part of our collaborative work involved **processing this unstructured wisdom and converting it into a more usable Q\&A format**. This wasn't a simple automated task; it was a meticulous process of knowledge distillation, led by the client's team. They helped us identify the core questions addressed by each teaching, ensuring the essence and nuance of the original lesson were perfectly preserved. With the help of LLM and traditional similarity search we

This painstaking curation, driven by the master's own team, is the bedrock of our “source of truth” pillar. It is the clean, pure well from which our AI drinks, ensuring that every answer is rooted in genuine wisdom, not algorithmic noise. With this pristine foundation in place, we could then turn our attention to selecting the tools to bring it to life.

### The Core Toolkit: Choosing with Purpose

Our stack is a reflection of our philosophy. Each component was chosen after careful consideration of its alignment with our mission, its ability to deliver a safe and authentic experience, and its power to help us move efficiently without sacrificing quality.

#### Context Engineering and Quality Assurance: Langfuse

For a project where “Be the source of truth” is our first pillar, observability isn't just a feature—it's a foundational requirement. We needed to meticulously trace every query, every retrieval, and every generated response to ensure fidelity to the master's teachings.

We evaluated both Langfuse and Langsmith. While Langsmith offers a polished experience, we chose **Langfuse** for two key reasons:

1. **Open Source:** Being open-source gives us complete control over our data and infrastructure, which is critical for the privacy and security promises we make to our users. It allows us to self-host and ensure the sanctity of user interactions.
2. **Feature Completeness:** For our needs, Langfuse provided all the core tracing, evaluation, and prompt management capabilities we required without vendor lock-in. While its UI can be less intuitive at times, the underlying power and transparency were a trade-off we were willing to make. It gave us the granular insight needed to debug and refine our RAG system with precision.

#### Foundation Model: Google Gemini

The choice of a Large Language Model (LLM) is perhaps the most consequential decision in a GenAI project. We tested several leading models, including Llama 3 and options from AWS Bedrock. We ultimately selected **Google's Gemini family**.

The decision came down to three factors that directly map to our pillars:

* **Highest Empathy:** In our qualitative tests, Gemini consistently produced responses that felt more aligned with the compassionate, gentle tone of the source material. It was better at navigating nuanced emotional queries, which is vital for our “compassionate guardian” role.
* **Privacy First:** Google's enterprise-grade privacy commitments and data handling policies gave us and our sponsor the confidence needed to build a secure space for users.
* **Ease of Use & Low Setup Cost:** The API is straightforward, well-documented, and allows our team to get up and running quickly, letting us focus our energy on the more complex parts of the system, like prompt and agent design.

#### Agent and Prompt Flow Design: LangGraph & Deliberate Simplicity

A simple RAG chain wouldn't suffice for a system that must act as a guardian. We needed a stateful, deliberate flow of logic to handle safety checks, user intent analysis, and context-aware responses. We implemented our agentic flow using **LangGraph**.

By defining our flow as a Directed Acyclic Graph (DAG) in code, we ensure that maintenance is straightforward and the logic is transparent. Our flow includes specific routers that, for instance, check for user distress signals *before* attempting to retrieve knowledge. If a safety flag is raised, the graph routes the query to a dedicated "guardian" node that provides resources for help, completely bypassing the standard Q\&A path. This makes safety a non-negotiable step in the process, not an afterthought.

For versioning our prompts—the very DNA of the AI's personality—we again leverage **Langfuse**. This allows us to experiment, track changes, and roll back if a new version degrades performance. We've even exposed a "cheat code" in our external builds, allowing our sponsor and key stakeholders to test specific prompt versions in real-time, keeping our feedback loop incredibly tight.

Our prompt design follows a simple rule: **One Job, One Prompt**. We don't use a single, monolithic prompt. Instead, we have a library of smaller, specialized prompts for different tasks. This modularity makes the system far easier to debug, evaluate, and refine. On a technical level, it allows us to strictly **limit the context window for each task, preventing the "context rot"** that can degrade model performance in long conversations. This ensures every step is sharp and focused.

Functionally, this design is what allows the system to be so adaptable. We can dynamically **change between a warm, empathetic mode** for general guidance and a **direct, instructional mode** for critical situations like the self-harm fail-safe. This versatility means the AI can be a helpful companion both in **challenging, vulnerable moments and during times of casual, leisurely exploration**. Furthermore, we’ve embedded the sponsor’s core philosophy directly into the system's personality. Since his school of spirituality emphasizes actual practice over pure theory, we have infused the system prompts and source documents with **action-motivating context**. The AI doesn’t just dispense information; it actively and gently **motivates users to take action on their practices**, helping to turn wisdom into a lived experience.

![][image1]

This approach also had a powerful side effect we hadn't fully anticipated: significant cost-savings. By breaking down the workflow into smaller, discrete tasks, we are not forced to use the most powerful (and expensive) model for every step. Simpler jobs like intent classification can be routed to faster, more economical models, like Gemini's Flash variants, reserving the more advanced models for the final, nuanced response generation. This creates a highly efficient, multi-tiered system that optimizes for both performance and operational cost, ensuring the project's long-term sustainability.

### The Art and Science of Evaluation

How do you unit-test empathy? The short answer is: you can't, not in the traditional sense. A response can be factually correct according to the source material but tonally wrong for a user in a vulnerable state.

Our evaluation framework is therefore a two-tiered system:

1. **Foundational First (The Science):** We have a suite of automated evaluations that check for factual accuracy, grounding in retrieved documents, and absence of hallucinations. These are our baseline, our "unit tests" for truthfulness.
2. **Co-created Secondary Evaluator (The Art):** This is where our 80% empathy principle shines. We worked hand-in-hand with our sponsor to develop a set of subjective evaluation criteria. These are not simple pass/fail tests. They assess qualities like compassion, clarity, and adherence to the master's specific way of teaching. The boundaries are intentionally vague, requiring human judgment. This intentional overlap between our automated and human-centric evaluations creates a robust, nuanced safety net that a purely technical approach would miss.

### The Supporting Stack: Pragmatism and Expertise

While the GenAI components are the core, the surrounding infrastructure is what makes the product reliable and scalable.

* **Language: NodeJS:** While Python dominates the AI landscape, our team possesses deep, battle-hardened expertise in the NodeJS ecosystem. We chose to leverage our strengths. This allowed us to build faster and more confidently, proving that the best tool is often the one your team knows best.
* **Frontend: NextJS x Vercel:** A modern, fast, and reliable choice for building the user interface. Vercel's deployment platform makes iteration seamless.
* **Backend & Vector DB: Supabase:** Supabase provided us with an integrated solution for authentication, database, and vector storage (pgvector). This consolidation simplified our architecture and allowed a small team to manage the full stack effectively.
* **Honorable Mention: Huly:** As a team that values open-source principles, we used the open-source project management tool Huly to keep our development process organized and transparent.

Every line of code, every API call, and every tool in our stack was chosen through the lens of our mission. The result is a system where the technology doesn't just *perform* a function; it *embodies* an intention.

So far, we’ve explored the soul of our project—the mission to build a digital sanctuary guided by our *Our attention is always to adopt 20% of technology with 80% of our empathy.”* principle and our three pillars of trust. In this second part, we’ve detailed the skeleton: how those values were intentionally engineered into our stack. From the meticulously curated source data to our choice of Gemini for its empathetic tone, and a safety-first agentic flow built with LangGraph, every technical decision was a direct reflection of our commitment to being a truthful, compassionate, and respectful guide.

But a mission and a well-designed machine are not enough to guarantee success, especially in a domain as nuanced and sensitive as this. The final, vital element is the human collaboration that breathes life into the entire endeavor.

In Part 3, we will shift our focus from the 'what' and 'how' to the 'who.' We will explore the dynamic process of co-creation with our sponsor, detailing how we built a tight feedback loop to navigate ambiguity, define winning conditions together, and truly collaborate in building this experimental and deeply meaningful product.

# Build a legacy of wisdom for social good with GenAI 3/3 – Co-Winning

In Part 1, we laid out the core of our project—a mission to steward a spiritual legacy guided by our core principle of “*Our attention is always to adopt 20% of technology with 80% of our empathy.”* In Part 2, we revealed the project's overview, detailing how that principle was engineered into our technology stack, from our choice of data and models to our safety-first agentic architecture.

But a mission and a machine, no matter how well-designed, are incomplete. The final, vital element is our collaboration with the client. Building a GenAI product in 2025, especially in a domain as deeply personal as spirituality, is not a transactional client-vendor relationship. It is a partnership rooted in shared discovery. In this final part, we explore the dynamic process of co-creation with our sponsor, detailing how we built a tight feedback loop to navigate ambiguity, define success together, and truly win as one.

### The Foundation: A Shared Experimental Mindset

From day one, this project departed from the traditional SaaS development playbook. There was no rigid list of feature requirements or a fixed-scope contract. Instead, both our team and our sponsor’s team entered the collaboration with a shared **experimental mindset**. We knew we were venturing into uncharted territory where the path would be revealed by walking it.

This required 3 key ingredients:

1. **A Patient and Curious Sponsor:** Our sponsor didn’t just provide the knowledge; he provided the space for exploration. He understood that GenAI is probabilistic, not deterministic. His curiosity allowed us to be transparent about the technology's limitations. Instead of hiding the complexities, we made it a habit to **share technical details in layman's terms**—explaining concepts like retrieval chunks, prompt chains, and hallucination risks. This transformed him from a stakeholder into a co-builder, empowering him to provide more insightful and technically relevant feedback.
2. **A Humble and Attentive Team:** On our side, we had to set aside the "we're the experts" ego. Our sponsor and his team held the most critical expertise: the nuance, tone, and spirit of the teachings. We adopted a posture of deep listening, recognizing that their intuitive feedback was often more valuable than our quantitative metrics.
3. **A common question with 2 angles:** On both sides, we reckon that Gen AI is going to disrupt human society as a whole. From a spiritual point of view, our sponsor is curious about how Gen AI is argumenting the mind of the later generations and how his teachings can help. He is also aware of the shift of human behavior in internet usage and he entrusted us to make sure the later generation can learn from his teachings more effectively than books and videos. From our team point of view, we are interested in building such novel interaction with knowledge – LLM. From experimenting with “malleable UI” to context engineering, we can experiment here safely.

This mutual respect created a powerful dynamic where we could innovate safely, knowing we had a partner who was as invested in the learning process as he was in the final outcome.

### Co-assuring quality, from human to machine

As we discussed in Part 2, you cannot unit-test for empathy. Our quality control process began right after the first usable version. It was entirely human-centric. In the initial development phase, **our sponsor was the primary quality assurance engine**. Right in the beginning of the development phase, he would interact with it like a master evaluating a student. His feedback was invaluable, often pointing out subtle tonal inconsistencies, answers with rigid structure. Given the valuable insight, we have reprioritized feedback related features to capture those feedback more structurally.

![][image2]

As the system matured, we began to operationalize his wisdom. We worked together to build a subjective evaluation rubric, and then took it a step further: we began **delegating his judgment to an LLM-as-a-Judge**. By fine-tuning a separate evaluation model on the very feedback he provided, we were able to scale his unique perspective, allowing us to test new versions of the AI against a proxy of his own discerning eye. The process evolved from him being the judge to him teaching the judge.

![][image3]

### Co-shipping

Even the legal framework became an act of co-creation. For a project like this, the Terms & Conditions are not just legal boilerplate; they are a promise of safety and a user's bill of rights. We brought our understanding of the AI's technical capabilities and potential failure points, while the sponsor's team brought their deep understanding of user vulnerability and ethical responsibility. Together, we drafted T\&Cs that were clear, compassionate, and transparent about the tool's nature as an AI assistant, not a human replacement.

Our collaborative spirit extended to our deployment strategy. A "big bang" public launch was never an option. Instead, we planned a **gradual rollout** designed to maximize learning and minimize risk:

1. **Phase 1: The Inner Circle:** The first users were the sponsor and his immediate team.
2. **Phase 2: Trusted Practitioners:** We then expanded access to a small group of the master’s long-term students, who could provide high-quality, nuanced feedback.
3. **Phase 3: Public Beta:** Only after iterating based on feedback from these trusted groups will we move to a broader public release.

![][image4]

This phased approach is the ultimate expression of our "compassionate guardian" pillar—ensuring the sanctuary is safe, stable, and truly helpful before opening its doors to the world.

#### The Horizon: Lessons Learned and Future Improvements

This journey has been as much about learning as it has been about building. The experimental process has illuminated several key challenges and future opportunities we are excited to tackle next:

* **Garbage In, Garbage Out:** Our most profound lesson was the reaffirmation of this old adage. The success of this project is owed, first and foremost, to the pristine quality of the source material.
* **Information Freshness:** A static knowledge base is a dying one. Our next technical challenge is to build a seamless pipeline for incorporating the master’s new teachings to keep the AI current.
* **Thinking Instruction Diagnosis:** We need better tools to understand the AI's "chain of thought." When it gives a suboptimal answer, we want to diagnose not just the output, but the flawed retrieval or reasoning step that led to it.
* **Navigating Adjacent Information:** How should the AI respond when asked a question at the boundary of the master's teachings? Defining this graceful refusal is a key area of ongoing work.
* **Strategic Use of Canned Responses:** For critical scenarios like the self-harm fail-safe, or for frequently asked basic questions, we see an opportunity to blend generative responses with pre-approved "canned" responses to ensure 100% accuracy and safety.
* **The Future is Dynamic: MDX UI from LLMs:** Looking further ahead, we are exploring how LLMs can generate not just text, but interactive UI components (using MDX). Imagine the AI creating a guided meditation checklist or a reflective journaling prompt on the fly—a truly dynamic and responsive user experience.

#### Conclusion: The Future is Co-Created

Our journey to build this digital sanctuary has been a lesson in what it means to build truly human-centric technology. We began with a mission (Part 1), engineered it into a robust technical stack (Part 2), and brought it to life through a deep, collaborative partnership (Part 3).

Our motto, “Our attention is always to adopt 20% of technology with 80% of our empathy.” found its ultimate expression not in our code, but in our collaboration. In the age of GenAI, we need more than logic to inspire new use cases. We became stewards of a legacy. And our sponsor was our most vital co-designer. This, we believe, is the model for building a future where technology serves not just to innovate, but to heal, connect, and elevate the human spirit.

[image1]: /assets/images/posts/Build-a-legacy-for-social-good-with-GenAI-1.png

[image2]: /assets/images/posts/Build-a-legacy-for-social-good-with-GenAI-2.png

[image3]: /assets/images/posts/Build-a-legacy-for-social-good-with-GenAI-3.png

[image4]: /assets/images/posts/Build-a-legacy-for-social-good-with-GenAI-4.png
