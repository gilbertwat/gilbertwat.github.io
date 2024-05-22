# How do I estimate my tasks?

A short story of an ordinary discussion in GOGOVAN Engineering team

* * *

### How do I estimate my tasks?

#### A short story of an ordinary discussion in GOGOVAN Engineering team

![](https://cdn-images-1.medium.com/max/800/1*5ri8W3LSfnLHSFVd-
ghUbw.jpeg)Photo by [Ilya
Pavlov](https://unsplash.com/@ilyapavlov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
on
[Unsplash](/s/photos/coding?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

#### Meet Ravic, our junior platform engineer

Freshly graduated from college, Ravic joined GOGOVAN as one of our platform
engineers. Platform engineers are responsible to iterate product features with
fellow [theme team members](https://medium.com/gogovan-technology/team-
structure-and-development-process-in-gogovan-bb01544f3931) and [innovate with
fellow team members](https://medium.com/gogovan-technology/how-we-build-
products-at-gogovan-f6759fd19513) to make GOGOVAN platform stable and
scalable. As the start of his journey in GOGOVAN, Ravic will be in charge of a
new feature. The new feature is to send an Email to the shipper when
GOGODelivery orders are completed. Whenever an order is completed, an Email
with the respective receipt will be sent to the shipper. The first question
his product manager WaiKit ask is, “How long do you think this task will
take?”

Ravic, being confused, went to ask his senior colleague in the same theme team
Lung, “Why do we need an estimate? I can just keep doing it until it is
finished. And then I can pick up another task.”

Lung took a deep breath, answered, “Ravic, who are you working with?”

**Ravic** : “Our theme team.”

**Lung** : “Who is in our theme team?”

**Ravic** : “You, fellow software engineers on mobile client Tim and Jackson,
product manager WaiKit, quality analyst William and data scientist Chris.”

**Lung** : “You are right, and do other people have works to be done?”

**Ravic** : “Yep.”

**Lung** : “If we got an estimate, can we help ourselves to collaborate with
each other on delivering the right product features to our customer timely?”

**Ravic** : “…hmmmm… how?”

**Lung** : “WaiKit can prioritize this feature based on the efforts we have to
give and the expected business impact. Waikit also can see if we can release
this feature in this month, William can test other features while waiting, and
Chris can start working on measuring success metrics once the feature is
released, everyone can work with the estimate and deliver values to customers
in a sustainable cadence.”

**Ravic** : “I see. _So people can work together based on my estimate._ I
don’t know how to do it… Can you help me on that?”

**Lung** : “I would like to but I can’t. It is because I am not you. I will
tend to overestimate and underestimate you. Only you can determine for your
part.”

**Ravic** : “Oh no. This sounds real...”

**Lung** : “No worries. It is good to learn new skills right? First, let’s
take a look at the acceptance criteria of the user story. And see if you
understand all of it and propose a solution.”

The user acceptance criteria are as follows:

    
    
    - As the order is completed, an email has to be sent to the shipper.  
    — In the email, there is a receipt in the format PDF attached

After a few hours, Ravic came back with delight.

**Ravic** : “Lung, I know how to do it! I just need to code the email sender
here in the controller method and we are done. We can get the email with a
join in shipper table and customer table.”

**Lung** : “So… how long do you think you can do it?”

**Ravic** : “It should be easy. It may take 1 week for me.”

**Lung** : “Sounds right. Let me ask our architect Victor.”

10 minutes later, Victor messaged them, “hey looks good! Did you guys know our
email logic is living in other services? The email sender also should not
block the request for completing orders.”

**Lung:** “Oh, I missed that. Let me update the acceptance criteria to include
technical acceptance criteria.”

So Lung updated the acceptance criteria to this:

    
    
    - As the order is completed, a email has to be sent to the shipper.  
    — In the email, there is an receipt in the format PDF attached  
    — Email service should be asynchronous and not blocking the completed orders API.  
    — Email service should be using existing service.

And Ravic panic.

He didn’t know how GOGOVAN platform does inter-service communication.

He didn’t know how to create a PDF.

He didn’t know how to send an asynchronous call between services GOGOVAN
platform.

He didn’t know the interface of Email sender.

Hence, he didn’t know how to estimate.

Lung then comforted poor Ravic,

“No worries, let’s talk to Victor on this.”

Victor opened up our public knowledge base, and went to a page written as
followed:

    
    
    # A little guide to estimate well
    
    
    - Make sure you understand the objectives and acceptance criteria of your task.  
    - Make sure you understand which part of the component(s) you are affecting  
    - List out all parts of the solution that you are confident.  
    - List out all parts of the solution that you know you are not sure.  
    - For each parts that you don’t know, list out possible solutions, such as:  
        — StackOverflow  
        — google  
        — existing code  
        — senior’s word  
        — etc.  
    - Review with senior or peers each parts that you don’t know and validate your ideas.  
        — give an estimate if both your senior and you agree you already consider all possibilities.  
        — Expand the problems discovered by both of you.  
        — Repeat until you sort out all uncertainty  
    - Get the total estimate and multiply it by 1.3–2 to cater for our unknown unknown. Depends on our intuition and experience.  
    - If there is any architectural changes, please consult architect for more input on your decision.

“OMG why don’t I spot that earlier!? Thanks Victor Sifu!” Lung exclaimed.

“Happy to help.” Victor said calmly.

* * *

Sounds like the inclusive and collaborative environment you want to work in?
Contact us! We are open for all levels and all stacks.
<https://www.gogovan.com.hk/careers/>

By [Gilbert Wat](https://medium.com/@gilbertwat) on [December 21,
2018](https://medium.com/p/65cda630e1f9).

[Canonical link](https://medium.com/@gilbertwat/how-do-i-estimate-my-
tasks-65cda630e1f9)

Exported from [Medium](https://medium.com) on April 18, 2024.

