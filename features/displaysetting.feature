Feature:Quantity displayed

Background:
Given user launch the website and login to the page
Given user selects any naviagtion option

@quantitydisplayed
Scenario: user changed displayed quantity per page
When user changes the quantity per page
Then number of item displayed on that page is equal to the number of quantity selected

@sortBy
Scenario: user changed the sortBy option
When user changes the sortBy option
Then user must get the outcome as expected

@grid
Scenario: user changed the grid option
When user changed the grid option
Then user must get item displayed as per the change