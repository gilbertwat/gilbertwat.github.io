# Golang journey 101 — defer

I am trying to explore the possibilities of adding another tools in the
arsenal of my team. Rails is awesome in rapid development…

* * *

### Golang journey 101 — defer

I am trying to explore the possibilities of adding another tools in the
arsenal of my team. Rails is awesome in rapid development, developing and
iterating business logic, and most of the tasks in a web / mobile app are
being taken care of. But everyone knows the elephant in the room —
performance. Ruby is notoriously bad in performance, some of our services
areas slow as 20 rps in 14 core machine! Data engineer in our company
suggested us to try node / Golang. Coming from nodeJS / JS background, I am
quite familiar with the Good, Bad and ugly of node and its ecosystem.(That’s
another post)

So I decided to jump to prototype a bit using Golang to implement a lottery
system. So first thing I found handy is `defer` . This is very convenient for
people who is as careless as me. So it will run the function when the method
exits. For example:

    
    
    func main() {  
      f := createFile("/tmp/defer.txt")  
      defer closeFile(f)  
      writeFile(f)  
    }

The `closeFile(f)`will **run when the**`**main()**`**exits.** This is so great
as in the university days when I am studying C/ Java, I almost periodically
forget to put in `close(file)` in the end of my function. Although in modern C
we are safe[1], but this is still not a very good code smell. But now I am now
a good programmer again! Thanks to this handy `defer` .

[1]: <https://stackoverflow.com/questions/28253569/what-happens-if-i-never-
call-close-on-an-open-file-stream#28253592>

By [Gilbert Wat](https://medium.com/@gilbertwat) on [May 14,
2018](https://medium.com/p/e719acfbc5f7).

[Canonical link](https://medium.com/@gilbertwat/golang-
journey-101-defer-e719acfbc5f7)

Exported from [Medium](https://medium.com) on April 18, 2024.

