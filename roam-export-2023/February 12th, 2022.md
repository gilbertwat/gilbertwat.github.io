- 10:30
    - {{[[DONE]]}} [[Push]] 1
- 14:41
    - https://medium.com/shyft-network-media/understanding-trie-databases-in-ethereum-9f03d2c3325d
        - [[Literature Notes]]
            - Tree [[data structure]] can be defined as follow:
                - ```javascript
var Tree = function(key: string, value: any, children?: Tree[]) {
  return {
    key: key,
    value: value,
    children: children
  }
}```
            - [[Radix [[Tree]]]] is a memory-optimized [[Trie]].
            - [[Trie]] is a tree [[data structure]].
            - [[Trie]] is used to retrieve a [[string]] value by [[depth-first]] traversal.
            - [[Merkle [[Tree]]]] is a tree [[data structure]].
            - The leaf node of a [[Merkle [[Tree]]]] contains the [[hash]]ed data block.
            - The non-leaf node of a [[Merkle [[Tree]]]] contains the [[hash]] of its children
            - [[Merkle [[Tree]]]] is used to detect inconsistencies between replicas with minimal data transfer.
            - [[Merkle Patricia [[Trie]]]] is a modified [[Merkle [[Tree]]]].
            - [[Merkle Patricia [[Trie]]]] is used to represent the [[EVM]]'s world state.
            - Every [[EVM]] client need to be able to verify world state quickly with minimal data transfer.
            - [[Merkle Patricia [[Trie]]]] is cryptographically authenticated.
            - [[Merkle Patricia [[Trie]]]] stores all (key, value) bindings.
            - [[Merkle Patricia [[Trie]]]] is deterministic.
            - [[Merkle Patricia [[Trie]]]] keeps the __O(log(n))__ performance for inserts, lookups and deletes.
            - [[EVM]] stored [[Merkle Patricia [[Trie]]]] on [[LevelDB]].
            - [[LevelDB]] is a Google key-value storage library. Source code is [here](https://github.com/google/leveldb).
            - [[EVM]] uses [[hex-prefixed encoded path]] to retrieve data from [[Merkle Patricia [[Trie]]]]
            - [[hex-prefixed encoded path]] can separate different node types.
            - [[hex-prefixed encoded path]] can guarantee an even length path for all nodes.
            - [[Recursive Length Prefix]] is used to serialize the data in [[EVM]].
            - Leaf node of [[EVM]] [[Merkle Patricia [[Trie]]]] is 
            - Extension node of [[EVM]] [[Merkle Patricia [[Trie]]]] is to optimize the lookup.
            - branch node of [[EVM]] [[Merkle Patricia [[Trie]]]] is to 
            - null node of [[EVM]] [[Merkle Patricia [[Trie]]]]
            - The hash function in [[EVM]] [[Merkle Patricia [[Trie]]]] is a [[Keccak 256-bit hash]].
- 16:00
    - {{[[DONE]]}} [[Meditation]] 2
        - Slept
- [[ethereum]] #bookmarks for calculating gas fee: https://www.cryptoneur.xyz/gas-fees-calculator
- [[ethereum]] #bookmarks https://docs.openzeppelin.com/contracts/2.x/api/token/erc721 
- [[RESTful API]] #bookmarks for Async API https://www.asyncapi.com/
- [[Application Performance Monitoring]] choosing
    - https://www.g2.com/categories/application-performance-monitoring-apm?utf8=%E2%9C%93&order=popular
    - https://www.datadoghq.com/
    - https://sentry.io/welcome/
    - https://www.dynatrace.com/pricing/#full-stack-monitoring
- [[Notes]]
- 22:38
    - Read https://www.infoq.com/articles/measure-outcomes-not-outputs/
        - [[software]] outcome metrics
            - How much code is put into production?
            - What is the rate of code churn?
            - What is the overall code quality?
                - [[Sonarcube]]
- [[Tasting Notes]] of [[1998 [[Penfold]] 407]]
    - 一開始呢一開呢就已經有一大浸好香嘅葡萄味,跟住呢就有大浸豉油味
    - 顏色好深紅色
    - 飲落去個丹寧好少嘅一啲Earth嘅味都未有好啊
    - 但係呢第二啖就有
    - 過咗45分鐘飲落去呢就先來一浸鹹味亦都係海水味咁樣跟住呢就酸味遲啲先至嚟到咁丹寧都係好silky 冇乜嘅有少少鉛筆碎未
    - 就嚟兩個鐘再飲多啖就有青椒味
    - 浸鉛筆綷味再出啲
- Impression for [[Preface]]
    - To put feature flags as the first priority
    - To connect Ronald with With communications and leadership team by having him present a POC for solana NFT
    - Ask Ambrose to put the POS app on foreground in the shop
    - change weekly goal mid week
    - stack rank the backlog
    - Always loop in engineers effort into any major decision making process
    - Documentation about internal photos for internal stakeholders
    - Sort out AI projects goals
    - Enable the scale data pipeline as that someone inside
    - expected tech driven
    - focus coding or design or product feature
    - Devops
    - Murky split of responsibility
    - action on feedback
    - 同事好好
    - First job
    - experiencing startup company success journey
    - Frank culture
    - Closiness 善良
    - buy in vision cant be personalized
        - Loop in Alex to do Datapoint collection design
- 23:50
    - Read https://management30.com/practice/personal-maps/
        - [[Literature Notes]]
            - Mental closeness is important than physical closeness to create a [[ideal team]].
            - Creating a personal mindmap is a good tactic to build mental closeness, a first step to create a [[ideal team]].
            - Present someone else personal mindmap to let the team mingle we can focus on the remarkable and commonality, the second step to create a [[ideal team]]