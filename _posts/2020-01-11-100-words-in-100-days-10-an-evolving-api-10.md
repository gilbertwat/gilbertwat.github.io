---
title: 100 Words in 100 Days 10/100&#58; An evolving API (10)
---

In [last article](/2020/01/07/100-words-in-100-days-9-an-evolving-api-9.html), the structure of the code is not adequate for 2 developers to separate their work and be focus. And [lack of focus is the number 1 productivity destroyer](https://hackernoon.com/top-12-things-that-destroy-developer-productivity-2ddf0abc190). So CTO Lucy have started to look for ways to decouple the API.She found a technique to hide all `discount_code` related logic into a single function.

```ruby
class Api::ServiceRequestController
    # ... some other Concerns
    include ServiceRequestParamsSanitizer
    include DiscountCode
    # ... some other Concerns
    
    # POST v10/service_request
    def place_request_of_service_v13
        begin
            sanitized_service_request_params = sanitize(service_request_params)
            #...
            @service_request = ServiceRequest.new(sanitized_service_request_params)
            @service_request.fill_default_price!
            @service_request.calculate_additional_requirement!
            @service_request.calculate_bonus_percentage!

            reduced_price = DiscountCode.process(@service_request.customer, @service_request.discount_code)
            # Some other operations that are unrelated to service_request

            @service_request.save!
            render(json: { id: @service_request.id }, status: :created)
        rescue
            render_error
        end
    end
end
```

So by doing this Lucy and Bob who is responsible for `service_request` and `discount_code` can work independently for now.

Next let's fast forward into a few months later, when the company take off and separate their `discount_code` with a separate service.
