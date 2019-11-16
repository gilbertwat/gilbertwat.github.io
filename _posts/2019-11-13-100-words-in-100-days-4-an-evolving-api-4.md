---
title: 100 Words in 100 Days 4/100&#58; An evolving API (4)
---
In our [last article](/2019/11/12/100-words-in-100-days-3-an-evolving-api-3.html), our CTO Lucy and her new teammates Adam had developed 2 new features on the same API and in this article, they needed to merge them together. A simple `git merge` resulted like this. 

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
# ...Lucy's changes
# ...Adam's changes
# POST v1/service_request
# ...Lucy's changes
# ...Adam's changes

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

Upon looking into the result, Lucy pulled her hair's out! She doesn't think of the problem of combining both's work. So she need to painstakingly merge the 2 APIs, and their test cases together.

```ruby
# POST v3/service_request
def place_request_of_service_v3
  begin
    @service_request = ServiceRequest.new(service_request_params)
    @service_request.calculate_additional_requirement!
    @service_request.calculate_bonus_percentage!
    @service_request.save!
    render(json: { id: @service_request.id }, status: :created)
  rescue
    render_error
  end
end

# POST v2/service_request
# ...Lucy's changes
# ...Adam's changes
# POST v1/service_request
# ...Lucy's changes
# ...Adam's changes
```

After wrestling with the merge tool, test cases for some hours, Lucy was finally able to put the code to the production.  

In the next article we will talk about the first production bugs they encountered and how they have resolved it.
