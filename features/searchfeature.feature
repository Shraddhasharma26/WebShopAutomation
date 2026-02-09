Feature:user adds a new item by searching


Background:
Given user visit website and login to it
Given user selects the search bar

@positivesearch
Scenario:user search for valid item
When user types the item title
Then user finds the typed item 

@negativesearch
Scenario: user search for invalid item
When user types the invalid item title
Then user does not find the item

@searchAddToCart
Scenario: user searched the item and added to cart
When user finds the item
Then user adds to wishlist