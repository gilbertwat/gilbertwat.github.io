---
title: 100 Words in 100 Days 9/100&#58; An evolving API (9)
---

In [last article](/2019/11/17/100-words-in-100-days-8-an-evolving-api-8.html), the team has put in new coding standard to make our code easier to understand and modify. In the next few weeks, they started to realize they can boost their number of service requests by giving out discount code. And after a few iterations of the discount code, the logic of the discount code module became complex, just like this.

```ruby
class Api::ServiceRequestController
    # ... some other Concerns
    include ServiceRequestParamsSanitizer
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
            if (@service_request.has_valid_discount_code?) do
                #some other logics for discount_code such as mark the discount code as used
                @service_request.price -= @service_request.discount_code.price
            end
            # ... some other update
            @service_request.save!
            render(json: { id: @service_request.id }, status: :created)
        rescue
            render_error
        end
    end
end
```

From the first glance there is no big problem when the application was small. But whenever iteration on `discount_code`, it would always trigger tests on `place_request_of_service_v13` to fail. Moreover, there were 2 different developers working on the APIs and the discount_code implementation, there were a lot of code merge errors. It has slowed the iteration speed. 

In the next article, the team has to come up with a way to decouple the development and speed up the team.
