---
title: 100 Words in 100 Days 3/100&#58; An evolving API (3)
---

So in our [last article](/2019/11/11/100-words-in-100-days-2-an-evolving-api-2.html) our CTO Lucy added a new field in our API and implemented a crude version of API versioning. They are happy to get some angel funding and worked with a new developer to increase their delivery speed. The new developer is called Adam. They needed to both work on the same API to put 2 new features in it. Lucy would be responsible for working on the new additional requirement and Adam would be working on the new bonus feature based on percentage of the price of the `ServiceRequest`. So they decided to split their work.

Lucy's v3 looks like this:
```ruby
# POST v3/service_request
def place_request_of_service_v3
  begin
    @service_request = ServiceRequest.new(service_request_params)
    @service_request.calculate_additional_requirement!
    @service_request.save!
    render(json: { id: @service_request.id }, status: :created)
  rescue
    render_error
  end
end

# POST v2/service_request
# POST v1/service_request
```

Adam's v3 looks like this
```ruby
# POST v2/service_request
# POST v1/service_request

# POST v3/service_request
def place_request_of_service_v3
  begin
    @service_request = ServiceRequest.new(service_request_params)
    @service_request.calculate_bonus_percentage!
    @service_request.save!
    render(json: { id: @service_request.id }, status: :created)
  rescue
    render_error
  end
end
```

In the next article, we will talk about what happened in the next morning, after they came back and merged both of their work.
