---
title: 100 Words in 100 Days 5/100&#58; An evolving API (5)
---

In our [last article](/2019/11/13/100-words-in-100-days-4-an-evolving-api-4.html), we preview about there will be a production bug coming up. Here are the production bug reports Lucy and Adam saw.

> BUG-1 Why do you charge our bonus more!? the price is 50HKD and 10% should be 55HKD, instead of 56HKD?! Hate you cheater, never again!!!! --Angry customer

> BUG-4 How do you calculate the bonus? I am confused.

> BUG-7 The price is wrong.

Flooded with feedback from customers, Lucy is very stressed. Her teammate CEO Stephanie sat down with Lucy and read through the reports. Suddenly she picked up the frontend and said, "Yep, I guess I know why now! The mechanism of bonus is not clear to the customer. When should we calculate the bonus? Before we include the additional requirements or exclude them?

Lucy immediately aware it is not a bug, it is a miscommunication. Immediately she altered the v3 to this:

```ruby
# POST v4/service_request
def place_request_of_service_v4
  begin
    @service_request = ServiceRequest.new(service_request_params)
    @service_request.calculate_additional_requirement!
    @service_request.calculate_bonus_percentage!
    @service_request.generate_breakdown! #separate base_price, combined_price and total_price
    @service_request.save!
    render(json: { id: @service_request.id }, status: :created)
  rescue
    render_error
  end
end

# POST v3/service_request (BUGGG!)
# POST v2/service_request
# POST v1/service_request
```

And she deployed that and update all clients using v3 to v4, and call it a day.

In the next article, we will explore how Lucy and her team reflect on the incident.
