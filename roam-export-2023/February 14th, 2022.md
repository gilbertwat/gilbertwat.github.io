- 10:00
    - [[Ronald Kwok]] [[1:1]]
- 13:00.- 16:30
    - [[[[Preface]] [[NFT]]]] DNS setup
        - Point a sub domain to a [[google storage]] bucket.
        - The trick is:
            - Need to verify we are the domain owner of preface.ai, we need to set a TXT record in CF according to Google. [Link](https://support.google.com/webmasters/answer/9008080?hl=en)
            - Need to name the bucket name correctly. It needs to be the same as the domain we are setting (nft-metadata.preface.ai) in this ticket.
            - Need to set CNAME with the domain we are setting pointing to [c.storage.googleapis.com](http://c.storage.googleapis.com/) CF.
        - https://cloud.google.com/storage/docs/hosting-static-website <--- this is not useful.
