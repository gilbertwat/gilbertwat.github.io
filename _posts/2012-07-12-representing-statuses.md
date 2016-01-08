---
layout: post
title: Representing Statuses
date: '2012-07-12T17:10:00+08:00'
categories: ["Software Engineering"]
tags:
- software Design
- system Design
---
When I am doing system Design, there are some recurring problems. One of the problem is to represent status of certain records. Take an example of a transaction table.

Solution #1: Saving the actual name of the status as is.

<table><thead><tr><th colspan="4">Transaction</th></tr><tr><th>id</th><th>user_id</th><th>item_id</th><th>status</th></tr></thead><tr><td>1</td><td>456</td><td>416</td><td>pending</td></tr><tr><td>2</td><td>425</td><td>416</td><td>processing</td></tr><tr><td>3</td><td>1</td><td>211</td><td>completed</td></tr></table>

So, originally there are 3 statuses. Easy enough? Software is a continuously evolving process and now the requirement changes. There will be another status called “contact CS”. Or there will be changes naming, such as “processing” is renamed in to “accounting”. What if there are 5 different classes which have the same query criteria of looking for transaction records with “processing” status? What if there is a select box which show all statuses?

```sql
SELECT DINSTINCT(status) FROM transaction
```
is a very expensive procedure.

Solution #2: Separate status and actual record into 2 tables.

<table><thead><tr><th colspan="4">Transaction</th></tr><tr><th>id</th><th>user_id</th><th>item_id</th><th>status_id</th></tr></thead><tr><td>1</td><td>456</td><td>416</td><td>1</td></tr><tr><td>2</td><td>425</td><td>416</td><td>2</td></tr><tr><td>3</td><td>1</td><td>211</td><td>3</td></tr></table><table><thead><tr><th colspan="2">Transaction Status</th></tr><tr><th>id</th><th>name</th></tr></thead><tr><td>1</td><td>pending</td></tr><tr><td>2</td><td>processing</td></tr><tr><td>3</td><td>completed</td></tr></table>

This has a lot of advantages over solution 1. Firstly the query of all statuses can be done quickly, as the procedure speed is proportional to the size of status table. And growth of status records must be less then transaction records. Secondly the status_id column can be indexed. Double speed boost is guaranteed. But it is still not the perfect solution. Our average Gilbert is always lazy in writing programs. When he is assigned to implement a function to query all pending transaction. I am confident he will write this SQL query:

```sql
SELECT * FROM transaction WHERE status_id = 2;
```

And the maintainers are doomed with a non-descriptive 2. Improved Average Gilbert is enlightened by associative array and changed to:

```sql
$status = get_status_map();
...
SELECT * FROM transaction WHERE status_id = status[''pending''];
```

This is also not very helpful. As some of the time we needed to display the word, for example in the view, and sometimes vice versa. We need the key to be the lock and the lock to be the key. Or a more technical analogy would be the relationship of asymmetric key encryption and public key signature.

And More Improved Average Gilbert changed get_status_map() to use name as key and added a parameter for get_status_map(‘full’) to add id into the value. He didn’t celebrate for long. He received yet another feature request to support multiple languages for the system as a mainland China customer and a Vanuatuan customer are using it.

Solution #3: Put the status name as the key for i18n language library.

In the view:

```php
echo i18n.get_string(''status[''pending''][''name'']'');
```

In my limited experience and intelligence, this should be the best solution for the problem. It has the speed of the solution #2 and has more flexibility because the presentation and model class is separated. The customer can change whatever status and the developer only needed to change the language config files and the database to support such changes.

Do you have a better idea?
