# The time Meteor Blaze data context screw me up

Consider this two templates,

* * *

### The time Meteor Blaze data context screw me up

Consider this two templates,

    
    
    <template name='a'>
    
    
    {{> b }}
    
    
    </template>
    
    
    <template name='b'>
    
    
    <b class="{{if not data }}hide{{/if}}">{{ data context of b }}</b>
    
    
    </template>

Here is another template,

    
    
    <template name='a'>
    
    
    {{> b }}
    
    
    </template>
    
    
    <template name='b'>
    
    
    {{if}}<b>{{?? what is the data context here ??}}</b> {{/if}}
    
    
    </template>

You would guess the data context will be the data context of template “b”.

Nope.

The data context is “a”

**WTF?!**

By [Gilbert Wat](https://medium.com/@gilbertwat) on [December 15,
2015](https://medium.com/p/6eb84abb6f6).

[Canonical link](https://medium.com/@gilbertwat/the-time-meteor-blaze-data-
context-screw-me-up-6eb84abb6f6)

Exported from [Medium](https://medium.com) on April 18, 2024.

