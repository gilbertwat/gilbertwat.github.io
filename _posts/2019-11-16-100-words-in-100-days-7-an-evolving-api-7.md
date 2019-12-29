---
title: 100 Words in 100 Days 7/100&#58; An evolving API (7)
---

In [last article](2019/11/15/100-words-in-100-days-6-an-evolving-api-6.html), Lucy had run a post mortem with the team and things went pretty well afterwards.

Until today, they faced an untraceable problem. Some of the `ServiceRequest` doesn't get the right price.

```ruby
class Api::ServiceRequestController
    # ... some other Concerns
    include ServiceRequestParamsSanitizer
    # ... some other Concerns
    # POST v10/service_request
    def place_request_of_service_v10
        begin
            sanitize(service_request_params)
            #...
            @service_request = ServiceRequest.new(service_request_params)
            @service_request.calculate_additional_requirement!
            @service_request.calculate_bonus_percentage!
            # ... some other update
            @service_request.save!
            render(json: { id: @service_request.id }, status: :created)
        rescue
            render_error
        end
    end
end
```

On the surface, the code of the whole API doesn't give up any clue that where does it goes wrong. We must dig deep into each of the sub-routine to see what is going on.

After a while of reading through the code and going into the code for a long time, Lucy finally traced that there is only a specific input of API causing the bug. And here is the culprit.

```ruby
def ServiceRequestParamsSanitizer < ActiveSupport::Concern
    def sanitize(&service_request_params)
        if (service_request_params.has_no_price?)
            service_request_params.price = 100
        end
    end
end
```

```ruby
def ServiceRequest < ActiveRecord
    def calculate_breakdown
        if (has_no_price? && price == 0)
            #... generate breakdowns for no price
        end
    end
end
```

So only a `service_request_params` with `has_no_price?` will get a default price of `100`, and this mutation of variable value will trigger another sub-routine in **ANOTHER** files! How can a developer be able to trace so many code across multiple files?

In our next article, Bob, a new developer who is always eager to learn new techniques, introduce a way to avoid the problem of abstraction leak.
