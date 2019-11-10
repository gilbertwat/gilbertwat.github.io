---
title: 100 Words in 100 Days(1/100)&#58; A Tale of An Evolving API (1)
---

This is my second attempt to revive a habit to write technical article. Everyday. Let's see how it goes. 

This is a story about a happy story about scaling the codebase of an essential API to the business. Hope you enjoy.

The story started when a startup was creating a marketplace for people who need a van in Hong Kong to be able to place a request of service to the system. The registered drivers of the system then can pick it up via another API. The CTO, let's call her Lucy, picked up her most familiar tools, Ruby on Rails and started cranking out the API to place a request of service in the system.

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

Right! Easy! RESTful and clean. Lucy decided to simply directly save the JSON payload into the ActiveRecord Model. And Lucy and her team were ready to serve the customers, who were just a few of them.

Next we will talk about working with her customers, Lucy decided to add quite a few features and see how the API of placing service request evolve.
