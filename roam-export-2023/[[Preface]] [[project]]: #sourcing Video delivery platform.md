- Needs from us:
    - 1 ideal customer will spend 20 minutes / day on Techbites
        - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaChaanTengv3%2FR9eyJlJOCs.13.05.png?alt=media&token=68f4b384-a6b6-4f70-9d24-8e1d787bc6ab)
        - https://www.omnicalculator.com/other/video-size
        - So 1 customer will use 360GB bandwidth
            - With current approach $0.11 / GB
            - {{calc: 360 * 0.11 * 7.78 }} HKD
            - With CloudCDN $0.09 / GB
            - {{calc: 360 * 0.09 * 7.78}} HKD
- Pricing
    - Assumption: Each customers will use **360GB** bandwidth per customers OR **10 hours** per customers
    - [Fastly](https://www.fastly.com/pricing)
        - 532HKD per customers per month
        - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaChaanTengv3%2Fi1Lx-7qaIK.06.04.png?alt=media&token=3f8793c3-b534-42b5-bbab-edbfd8445721)
    - [IBM video platform](https://www.ibm.com/products/video-streaming/pricing)
        - {{calc: 649* 7.78 / (2000 / (600 / 60))}} HKD per customers
        - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaChaanTengv3%2FvwYZtKB-3P.01.14.png?alt=media&token=f07f4c39-c70b-4310-90cf-ac8ca2460c14)
    - https://corp.kaltura.com/pricing/media-services/
        - {{calc: (0.17 * 360+ 0.55 + 0.11*30 + 0.25 * 360)  * 7.78 }} HKD per customers per month
        - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaChaanTengv3%2F_Nh_Gg5laN.00.24.png?alt=media&token=4d4a7914-5ee3-403b-b7ec-45d16c505c70)
    - https://cloud.google.com/cdn/pricing
        - {{calc: 0.09 * 360 * 7.78}} HKD per customer per month
        - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaChaanTengv3%2FYNkci6dfph.57.46.png?alt=media&token=e113c866-8cce-4f72-b0e2-00c1e084a08f)
    - https://www.gumlet.com/pricing/
        - {{calc: 99 * 600 / 10000 * 7.78 }} HKD per customers per month
        - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaChaanTengv3%2F0e6842SM_K.53.13.png?alt=media&token=54c1b301-fec8-4dcb-ac4f-39127b48446b)
- Feature we need
    - https://developers.cloudflare.com/stream/faq
        - a video upload can be at most 30 GB.
    - Automatic variable bitrate switching based on network
- Final #decision
    - Stay on GCS.
    - Use transcoder api to compress the videos. [Ref](https://cloud.google.com/transcoder/docs/transcode-video)
        - 1/10 of compression