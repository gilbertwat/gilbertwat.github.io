---
title : What a good team taught me about software engineering
categories: ["Software Engineering"]
---
Last year I was very privileged to work with some of best engineers you can find in the region. Together we delivered products in the top-most software engineering quality. Here I learned a lot from my colleagues. Here is a summary of my learning in the last year.

##Abstraction, abstraction, abstraction

Software engineering is all about abstraction. The abstraction is what the whole complication about building a software. Consider there are 2 classes.


{% highlight js %}
Task = {
  update : () => {
    ...
  },
  remove : (id) => {

  },
  /**
   * @id
   * @customerId
   * @title
   * ...
   */
  Prototype : {
    //some getter function
  }
}
{% endhighlight %}

{% highlight js %}
Customer = {
  update : () => {
    ...
  },
  remove : (id) => {

  },
  /**
   * @id
   * @title
   * ...
   */
  Prototype : {
    //some getter function
  }
}
{% endhighlight %}

Now there are some interactions between them, what is the best way to abstract those behavior? For example, we need to update a certain attribute in all tasks of a customer. There are several ways.

We could update the `task.es` file,

{% highlight js %}
Task = {
  update : () => {
    ...
  },
  remove : (id) => {

  },
  /**
   * @id
   * @customerId
   * @title
   * ...
   */
  Prototype : {
    //some getter function
    updateTimeFromThisCustomer(customerId) {
      //impl
    }
  }
}
{% endhighlight %}

Or we could update `customer.es` file,

{% highlight js %}
Customer = {
  update : () => {
    ...
  },
  remove : (id) => {

  },
  /**
   * @id
   * @title
   * ...
   */
  Prototype : {
    //some getter function
    updateMyTask() {
      //impl
    }
  }
}
{% endhighlight %}

Both ways seem to face a scalability problem, what if there is one more method need, say find customers with certain task category? You could also argue this is an abstraction leak, the Customer / Task will now need to know the other classes. We could group them into a new file called `TaskCustomer.es6` (or `CustomerTask.es6`, does it matter?)

{% highlight js %}
TaskCustomer = {
  Task : {
    updateTime : (customer) => {
      //impl
    }
  },
  Customer : {
    findWithTaskCategory(taskCategory) {
      //impl
    }
  }
}
{% endhighlight %}

Clearly this is easier to understand. The neat thing about Javascript is that the namespace is very clear and easy. Programmers like me are lazy. The way of thinking is like normalizing database schema. Whenever there is relationship between two concept, combination logic with be in a separate file.

##Clarity is the sole measurement of quality

Software code is written for people to read. There is no difference between writing an article and writing a piece of code. Consider this,

{% highlight js %}
checkSth = function(sthelse) {
  return this.sth === sthelse;
}
//when using it
_.bind(checkSth, obj)();
{% endhighlight %}

And another one,

{% highlight js %}
checkSth = function(obj, sthelse) {
  return obj.sth === sthelse;
}
//when using it
checkSth(obj, sthelse);
{% endhighlight %}

Which one you can easily make sense of? Your code should be as clear as possible. Surprisingly I learned such thing also in the machine learning class, sometimes it is very hard to do matrix arithmetics in traditional programming languages such as Java or Javascript. Using linear algebra you can easily do so with just

{% highlight m %}
a = [] %some content of matrix here
b = [] %some other content of matrix

c = a * b;
{% endhighlight %}

No need to worry the dimension of a and b, even more so, you can check if your algorithm is correct by those dimension check.

##Message passing solves most of the problems

For example, we have two mechanisms to charge our customers. One is purchase on behalf, say you want to order some goods or services from a third party vendors of your choice. Another is our monthly invoice.

As there is different security concerns between internal dashboard and external web application, we put all external communication logic in another system. Here is the resultant diagram.

![Diagram](/assets/images/2016-01-07-what-a-good-team-taught-me-about-software-engineering/transaction-sub-system.svg)

This approach force us to think in smaller chunks of responsibilities for each class/system. For both flexibility and maintainability point of view, this approach provides great plus. The variant of such thinking, such as publish-subscription, job queue etc. is a great tool in the arsenal of every software engineer.

##TDD… is counter-intuitive at best

For the record, I have tried to follow TDD twice in my job. I think the problem of TDD is that the incentive is not aligned. What is my incentive to write a piece of code: to create a product that many people want. Does TDD help me to archieve what I am coding for? Yes. But you have to jump through many hoops, and the green red thing is actually getting into my way of creating solutions. I am well aware of the benefit, but until I do something mission critical. TDD will just be another tools in my belt.
