---
title: 100 Words in 100 Days 8/100&#58; An evolving API (8)
---

In [last article](2019/11/18/100-words-in-100-days-7-an-evolving-api-7.html), the team has run into some unclear code with mutating object. This makes debugging very hard. Bob suggest the team picked is to enforce 2 new coding standard.

1. Separating mutating function and non mutating functions with different naming convention
    1. non mutating function: `function_name(a: , b:)`
    1. mutating function: `function_name!(a:, b:)`
2. Only use mutating function in the model layer.

Bob also take the initiative to clarify with Stephanie on the real business case and retain the `default_price` logic.

```ruby
class Api::ServiceRequestController
    # ... some other Concerns
    include ServiceRequestParamsSanitizer
    # ... some other Concerns
    # POST v10/service_request
    def place_request_of_service_v10
        begin
            sanitized_service_request_params = sanitize(service_request_params)
            #...
            @service_request = ServiceRequest.new(sanitized_service_request_params)
            @service_request.fill_default_price!
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

```ruby
def ServiceRequestParamsSanitizer < ActiveSupport::Concern
    def sanitize(&service_request_params)
      # some other sanitization logic
    end
end
```

```ruby
def ServiceRequest < ActiveRecord
    def fill_default_price
        if (self.has_no_price?)
            self.price = 100
        end
    end

    def calculate_breakdown
        if (has_no_price?)
            #... generate breakdowns for no price
        end
    end
end
```

Under the new coding standard, we are able to understand our business easily. In the next article, we are going to introduce coupon to the client and how it complicates this API. 