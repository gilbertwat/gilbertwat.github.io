- # Note to self
    - [[🆕 Input]]
    - [[Collections of motivation snippets]]
    - #NoteToSelf
    - [[Life lessons]]
- {{embed: TODOs}}
- [[How do you feel when you wake up?]]
    - {{slider}}
        - Not a good [[sleep]]
- Start the day **strong**!
- To [[take the team to the next level]]. Only when you push the team to the limit you will know the limit of the team or the individual. #Thought
- [[[[GOGOX]] Partner Wallet]]
    - Reinstalling the whole environment in my x86 computer on digitalocean.
        - 1. https://kafka.apache.org/quickstart
        - 2. https://github.com/gogovan/gogovan-server
        - 3. https://github.com/gogovan/delivery-platform
        - 4. https://github.com/gogovan/partner-wallet
- [[1:1]] with [[Ben Cheng]] discussion about [[event sourcing]] and [[System Design]]. #Microservices
    - Currently we have 3 microservices
        - [[[[GOGOX]] Partner Wallet]]
        - [[[[GOGOX]] delivery-platform]]
        - [[[[GOGOX]] gogovan-server]]
    - When we complete our orders in [[[[GOGOX]] delivery-platform]] or [[[[GOGOX]] gogovan-server]], we emit an event `OrderCompleted` from those services
    - Currently we also emit another even `PartnerSubsidyAdded` from almost the same routine
    - [[[[GOGOX]] Partner Wallet]] will consume both through different topic but different consumer groups for processing.
    - As they are in different consumer groups, the order of event is not guarantee and it can be consumed at the same time.
    - If one of them is processing when another need to process, it will result in [[Optimistic Locking]] of the wallet, which can be fixed in both ways:
        - A. Rescue if there is optimistic locking on the parter wallet side.
        - B. Redesign the `PartnerSubsidyAdded` to `OrderSubsidyAdded` and new event with use the same topic and consumer group of `OrderCompleted` to guarantee ordering within the same partition.
        - C. Remove `PartnerSubsidyAdded` and calculate the subsidy on the producer side.
    - We have chosen the B. way as it will make the events make more sense and avoid the problem for now, with a possibility of moving to C. later.
    - There are 2 [[🤔 Questions]] from architectural perspective:
        - What if there is really a business case we need to do 2 commands from 2 topics? optimistic locking will be a possibility? How to resolve that?
        - How to discuss and record the discussion and rationale of this kind of design?
- [[holding people accountable]] is something very tough for me. I think underlying psychology is that I don't trust people and I don't trust myself. Lack of confidence to be vulnerable and failure in trusting people. How can I improve this? #[[🧘🏻‍♂️ Self Awareness]] #[[🤔 Questions]] #[[☝🏻 Leadership]]
- [[[[GOGOX]] [[[[2021]] Q1]] [[OKR]] #2: Set up and keep error rate budget as SLO for all supported products]] [[Young]] for his information
    - There is no way for us to publish our crash-free rate in 7 days to slack without BigQuery. There are only a few basic notifications listed here.
        - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FIndieHacker%2FA95WSgYxh9.png?alt=media&token=fc2b1c55-0218-4865-814e-8c5d55ba99c5)
- 
