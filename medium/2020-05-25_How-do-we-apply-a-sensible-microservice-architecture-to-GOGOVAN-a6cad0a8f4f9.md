# How do we apply a sensible microservice architecture to GOGOVAN

Recently, we have a lot of discussions around microservice . At GOGOVAN, with
a relatively small engineering team, how exactly do we apply…

* * *

### How do we apply a sensible microservice architecture to GOGOVAN

Recently, we have a [lot of](https://segment.com/blog/goodbye-microservices/)
[discussions](http://highscalability.com/blog/2020/4/8/one-team-at-uber-is-
moving-from-microservices-to-macroservic.html) around microservice . At
GOGOVAN, with a relatively small engineering team, how exactly do we apply the
microservice pattern? In this article, we will share some of our experience
and explore the logic behind our current approach. We will also share bits and
pieces on how we solve our customers’ and teammates’ problems using the
microservice pattern.

First we need to agree on a definition of microservice. It is a very heated
term and there can be different definitions for different teams. Let’s
reference what we have in
[Wikipedia](https://en.wikipedia.org/wiki/Microservices):

  * Oftentimes there are processes that communicate over a network to fulfill a goal using technology-agnostic protocols such as HTTP.
  * Services are independently deployable.
  * Services are organized around business capabilities.
  * Services can be implemented using different programming languages, databases, hardware and software environment, depending on what fits best.
  * Services are small in size, messaging-enabled, bounded by contexts, autonomously developed, independently deployable, decentralized and built and released with automated processes.

Hmm, sounds easy. Let’s implement it! Deploy to production!

Not so fast. Everything comes with a price. Distributed computing is an
inherently hard topic in software engineering. And those challenges are not
always aligned with our customers’ or teammates’ needs. In GOGOVAN we have
already encountered quite a few. We may be going deep into those rabbit holes
later but let me list out some. You have to apply new tools and techniques to
overcome them in a microservice architecture.

#### How can we debug & trace?

It is very hard for us to debug and trace if our requests are not tagged with
IDs. Even if we do that, we need to trace each service independently from the
APM or logs. Have you tried to figure out which service have defects in real
time? You need to open multiple tabs without a proper tracing solution. We
don’t think this can scale without significant investment.

#### Is our data consistent?

Normally, engineers will create services for different business domains, such
as user service, payment service…etc. What if the payment service requires a
certain attribute in the user service? How do we persist it? Do we cache it in
the payment service? How should we invalidate it? 🤯

![There are only 2 hard things in CS: cache invalidation, naming things, and
off-by-1 errors. #meme](https://cdn-
images-1.medium.com/max/800/1*xHXwuDEbD3jeto0-sb4Oyw.jpeg)

#### Failure handling

Those we can kinda foresee and mitigate in the development phase. Now comes
something more subtle. What will happen when one of your services fails? How
will your system behave? Will any of your APIs fail? How can you do QA?

#### Do I mention transaction?

Things get more tricky. What if you want to implement transactions across
services? For example, you have a feature that only assigns orders to drivers
who are validated. You may want to update the **allowed_driver_list** in
**Order** Service once the driver is validated in **Driver** Service. Good
luck with that.

#### Do I miss deadlock and livelock?

The last one is doomed. Currently we have no tools to prevent deadlock and
livelock from happening on a microservice architecture. Other than restarting
the affected services, we are not able to prevent this before we deploy on
production. This is not good for our reliability.

![](https://cdn-images-1.medium.com/max/800/1*S4feAPzopPWpx8-tokkOsA.jpeg)From
reddit
(<https://www.reddit.com/r/ProgrammerHumor/comments/60pe0k/classic_deadlock/>)

#### And there are more…

Even if you adopt an event streaming platform and event based architecture
**from the start,** you are in another technical rabbit hole that is not very
related to customers’ problems and our teammates’ problems. As any impact
driven technology team, we cannot afford this.

* * *

### You don’t want to be high like me…

* * *

So microservice architecture is like every other technology patterns, they all
come with a cost. How can we evaluate what we need and is the team ready for
it?

### Do you need microservice architecture?

[No, you don’t.](https://www.google.com/search?client=firefox-
b-d&q=No+we+don%27t+need+microservice)

Seriously.

There are only a few reasons that you need microservice.

#### Polar opposite needs of iteration speed

On one hand, in some parts of our platform, we need to rapidly release
experimental solutions to our customers’ problems. We deploy new version of
those services every other day. On the other hand, some parts of our system
never change, for example integration to legacy third party systems. If we
choose to mix them together in a single codebase, not all developers are aware
of the different natures of the modules. This could leads us to accidentally
couple them. We will get the worst of both worlds. We make the stable part
easy to break but the experimental part too slow to adapt.

If you are in a similar situation, you should consider using microservice.

#### Completely different technical requirements

Some functionalities of our platform require a < 10ms response time, but some
subsystems on our platform need to process multiple GBs of data. Mixing them
together is a recipe of disaster. We have once deployed a batch optimized
algorithm on a real time use case. 😱 As a result, one of our critical
components have been low on resource since and that has lowered our platform
reliability.

Another possible case of adopting microservice is we have different
requirement of security and legal compliance. Some of our subsystems have
strict requirements on privacy or audit, others don’t. Mixing them together
will put you at a higher legal or security risk. If you do otherwise, you are
able to set different clearances to compartmentalize damages, should a breach
occur.

### Is your team ready for microservice architecture?

Let us assume after all your consideration, you are convinced that you need to
adopt microservice architecture. How should you determine if your team are
ready for it? Can they iterate and operate on it? Here I choose 3 most
important elements you must have in your team to adopt a microservice
architecture.

#### TDD Culture

In software engineering, failure handling is taking us 80% of our time, if not
more. TDD culture encourages us to think about how to validate our work. TDD
also keeps pushing us to find ways to better defend against regression testing
in our system.

#### Continuous refactoring culture

As our system grows, some parts will eventually become a hack of a hack of a
hack of the original use cases. Our system must be kept to be clear enough to
describe the current business processes and able to grow with business. Most
of the subsystems that has a need of separation mentioned before were not
planned. Hence, your team need to be refactoring continuously to meet those
needs timely.

#### Kubernetes

Your team needs more than the right culture. Your team needs to be proficient
in distributed computing from principle to operational. If you are starting
now, let’s admit it, Kubernetes has already won. Just learn it and understand
the principles behind it. It will fulfill 99.9% of your use cases.

![](https://cdn-images-1.medium.com/max/800/1*YCxW71lj9eTQlOZhuZbgRQ.jpeg)Yep.

### Is there a middle ground from monolith to microservice?

There are 50 shades of microservices. In GOGOVAN we are doing a lot of in-
between tactics to suit our needs. First and foremost we are migrating to
Kubernetes as our microservice infrastructure. Splitting existing
functionalities out as a service, or create new services has become easier and
more standardized.

We also invest a huge effort to adopt continuous refactoring to decouple our
codebase using domain driven design and functional programming. Our system is
evolving into several loosely coupled components. This allows our teammates to
have a deeper understanding of each domain. Having a deeper understanding of
their area of expertise also results in higher craftsmanship , ownership and
insights.

### Moving forward…

We are fans of functional programming because it can speed up iteration speed
and make us happier with our code. With a successful adoption of domain driven
design and functional programming, we are exploring to further down the road
to the area of [strongly typed Ruby](https://sorbet.org/). Also we will
continue to excel our knowledge in and around Kubernetes, expanding our
knowledge and experience on related topic such as service mesh. Also we
increase our usage on our event based architecture and platform to further
decouple our codebase into different areas that can evolve separately.

![](https://cdn-images-1.medium.com/max/800/1*q9t8nTnvQLoYm0YQxfbH0g.jpeg)

Fancy experiencing this journey with a team of open and impact driven
engineers? Come chat with [us](mailto:hr@gogotech.hk)!

By [Gilbert Wat](https://medium.com/@gilbertwat) on [May 25,
2020](https://medium.com/p/a6cad0a8f4f9).

[Canonical link](https://medium.com/@gilbertwat/how-do-we-apply-a-sensible-
microservice-architecture-to-gogovan-a6cad0a8f4f9)

Exported from [Medium](https://medium.com) on April 18, 2024.

