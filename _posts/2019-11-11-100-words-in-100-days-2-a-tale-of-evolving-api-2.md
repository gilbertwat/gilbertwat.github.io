---
title: 100 Words in 100 Days 2/100&#58; An evolving API 2
---
In [last article](https://getthingsdone.hk/2019/11/10/100-words-in-100-days-1-an-evolving-api-1.html) our startup CTO Lucy shipped their first version of API for announcing a request of van service in the system. Some of the engineers with keen eyes may spot there are a lot of problems with the first version, feel free to comment here and let's chat! 

Anyway the team have worked tirelessly to find product market fit, and closely working with the customers let them discovered that the customers really needed a `pickup_at` fields in the `ServiceRequest` ActiveRecord. So let's revisit the current API.

```ruby
# POST v1/service_request
def place_request_of_service
  begin
    @service_request = ServiceRequest.new(service_request_params)
    @service_request.save!
    render(json: { id: @service_request.id }, status: :created)
  rescue
    render_error
  end
end
```

As Lucy doesn't want to force the callers of the old API to update to the latest version, she decided to do a very crude API versioning in the next changes.

```ruby
# POST v2/service_request
def place_request_of_service_v2
  begin
    @service_request = ServiceRequest.new(service_request_params)
    @service_request.save!
    render(json: { id: @service_request.id }, status: :created)
  rescue
    render_error
  end
end

# POST v1/service_request
def place_request_of_service
  begin
    @service_request = ServiceRequest.new(service_request_params)
    @service_request.pickup_at = "asap"
    @service_request.save!
    render(json: { id: @service_request.id }, status: :created)
  rescue
    render_error
  end
end
```

Lucy then write the appropiate tests to cover the API, both old and new, and call it a day.

I bet the engineers with keen eyes can spot the peril of the practice. Feel free to comment and let's chat! In the next part, we will explore when Lucy and her team secured a funding and started hiring their first engineers.
