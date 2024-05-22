- Author:: [[ycombinator.com]]
- Full Title:: Ask HN: Is anyone using cloud dev environments (e.g. Codespaces/Replit) at work?
- Category:: #articles
- URL:: https://news.ycombinator.com/item?id=37934488
- ### Highlights first synced by #Readwise [[October 19th, 2023]]
    - We are an agency where you might flip between working on several completely different projects in a week, and for us it's extremely useful.

We'd had all our sites set up to run fairly easily via docker compose prior, but I'd still find myself debugging people's setups fairly frequently. And giving developers data and secrets was often either insecure or complicated, depending on the codebase.

With codespaces, people can just jump straight into a working project, without pulling any client code or secrets or data onto their machine. It still requires maintenance sometimes but at least when I fix the codespace config I know everyone will definitely benefit from the changes.

The main downside is it's pretty expensive (if you have, say, 10 devs using it all day every day) compared to "free".

If you work on just a few projects, and/or you have very sophisticated systems across the board (like every site has an on-rails setup script with useful sanitized dev data, and secure SSO'd secrets management), I doubt it's worth it.

But in our case, a relatively junior dev being able to spin up a working dev version of a site they've never worked on in 5 minutes with no issues, so they can knock out a 3 hour change and maybe never work on it again, is a big money saver.

It's also meant that we can more easily standardize everyone's laptops without having to consider how well they work as bare metal dev machines (which has meant we can move everyone to fairly cheap macbook airs without people moaning about their tooling or storage size etc.)

I also like that access to a lot of stuff becomes directly mediated moment to moment by someone's github access (which for us also runs through our sso, cloudflare zt etc).

We're doing it in a slightly clunky way though - we use docker compose still, inside the codespace. I like this approach personally bc it feels like we're less locked in to the platform. For us it also made the initial migration easier. I think it also makes debugging the environment a bit easier because you don't need to keep rebuilding constantly on changes, you can just dcb dcup... ([View Highlight](https://read.readwise.io/read/01hd2y9ykwem0q0vbsc65k38mv))
- ### New highlights added [[October 19th, 2023]] at 11:39 AM
    - For Jetbrains users:

Step 1. Create an Oracle Cloud account Step 2. Create an Ampere 6 core, 32gb memory instance for like $5/mo Step 3. Use Jetbrains Gateway to run your IDE as a thin client, executing on that host.

You get a pretty darn beefy ARM64 VM instance from OCI for extremely cheap. You can get these in a region near you, with low latency. And Jetbrains Gateway works pretty great.

On the plus side, this is an entire VM, so if you've got containers, or whatever else you need to run, that all executes there too.

[reply](https://news.ycombinator.com/item?id=37934488/reply&id=37934982&goto=item%3Fid%3D37934488%2337934982) ([View Highlight](https://read.readwise.io/read/01hd2zvrjbeajm3dys064x624q))
