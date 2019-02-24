---
title: How to build robust GraphQL APIs
---

Just read this awesome article\[[1]\] in building GraphQL APIs. Github and facebook have created their own public facing GraphQL APIs. When I first dapple with this topic last year, one of the crucial question is resource management. Resource management is specifically the CPU and memory usage of data persistence layer.

In RESTful world, API designers can require the callers to bound the request. Take some naïve example in place I work, when the caller of `/orders`, we require them to specify the limit of number of orders or the date range. So the Swagger looks a bit like this.

```yml
/orders:      
  get:        
    security:          
      - CourierAuth: []        
    parameters:          
        - name: page  
          in: query  
          type: integer  
          description: 'default set to 1'  
        - name: limit  
          in: query  
          type: integer  
          description: 'default set to 30'  
        - name: status  
          in: query  
          type: string  gtgt
          required: true  
          enum:  
            - pending  
            - in_progress  
            - is_completed  
      responses:  
        '200':  
          description: OK  
          schema:  
            $ref: '#/definitions/Orders'  
      summary: List orders  
      description: List orders  
      tags:  
        - Order  
      produces:  
        - application/json
```

But in the world of GraphQL, there is no elegant way to specify this. Also, the limit can be different, even for the same application, with different usage, the result set can be differ so much.

In the context of database, we can separate into 2 questions:

1.  How can we make sure an arbitrary GraphQL query won’t run too long and use up all CPU of the database?
2.  How can we make sure an arbitrary GraphQL query won’t return a yuuuuuuuggeeeeeee results and use up all memory / bandwidth of client?

Turns out there can be mathematical / academic ways to deal with these problem.

So first this paper established that for every queries in GraphQL, there is a way to transform it into _non-redundant queries in ground-typed normal form._ Sounds intimidating? Yes it is. I am still grasping what is that. Anyone has an idea let me know.

And then based on the algorithm mentioned in the original paper[2], we can determine the size of the result in polynomial time. After that, we can choose to really run the query or just return an error of “result set too large”.

In the following weeks, I would like to have time to prototype it, but I cannot guarantee anything.

P.S: A little bit takeaway in reading this:

1.  Formalization of problem really helps us to think about it. Formalization essentially separate convoluting concepts and parameters into mathematical notations. Real world socio-political or human dynamics problems may not be applicable but most other problems, I would argue, is at least partly applicable to this approach.
2.  Everytime I read mathematical notations I got cognitive overload. Anyway to solve this? I am drawing mindmap but still very overloaded.

[1]: https://blog.acolyer.org/2018/05/21/semantics-and-complexity-of-graphql/

[2]: http://delivery.acm.org/10.1145/3190000/3186014/p1155-hartig.pdf?ip=112.120.183.216&id=3186014&acc=TRUSTED&key=4D4702B0C3E38B35%2E4D4702B0C3E38B35%2E4D4702B0C3E38B35%2EE47D41B086F0CDA3&__acm__=1527397179_9e01bfe3eeb804a42401631de23d564b