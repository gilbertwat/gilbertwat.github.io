- https://render.com/ #tools [[PaaS]] [[Heroku]] replacement
- [[Theodore]] on day prep
    - [[List from [[Tony Ha]]]]
    - For [[Wifey]]:
        - On day
            - 走佬袋
        - Afterward 
            - 月子餐
    - For [[Theodore]]:
        - Clothes
            - Summer
            - Winter
        - Hygiene
            - Diapers
            - Cotton
            - Laundry
            - Clothes wash
        - Eatery
            - Bottle x 6
            - Breast pump
            - Formula powder
            - Formula powder holder.  
        - Travel
            - Stroller
        - Name:
            - 中文名
                - https://kinopio.club/baby--to1x3NNy61n9AZgBmOO9F
- https://www.kaggle.com/benhamner/wordle-1-6
    - Using the distribution of tweets ⬛ 🟨 🟩, we are already have information to guess the correct word in the 1st guess
    - Information needed
        - Tweets of the current day Wordle
        - Possible answers
            - 5-character English words from source code + other valid but less common WORD
        - Simulate 1000 games for each possible answers, based on the frequency of the word in English language and feedback received.
    - 3 measures to evaluate observed result of tweets
        - Frequency of 243 possible combinations in observed  / simulated games.
            - Rank all valid words by cosine similarity between simulated and observed distributions
        - the fraction of these combinations that occur right before the correct guess
            - rank valid words based on the cosine similarity distance between the observed and simulated distrubtion
        - based on the valid words there's invalid combinations for each possible answer.
            - rank valid words on the number of invalid combination we observe.
