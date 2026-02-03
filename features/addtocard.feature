Feature:add item in card

Background:user login to website

@tag
Scenario: user is able to add item to card
When user selects the item
Then user navigate to add cart

@tag1
Scenario: user changes the quantity
When user goes to shopping cart 
Then user can change quantity