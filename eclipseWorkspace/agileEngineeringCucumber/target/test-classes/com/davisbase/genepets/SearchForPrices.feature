Feature: Pricing
	As a customer
	I want to be told the price of animals for sale
	so that I can make purchasing decisions

Scenario: Mimmoth Search
	Given a Mimmoth costs 23.00
	When I enter Mimmoth and search for price
	Then the result should be 23.00

Scenario: Gertle Search
	Given a Mimmoth costs 23.00
	And a Gertle costs 14.00
	When I enter Gertle and search for price
	Then the result should be 14.00
	
Scenario Outline: Bulk Pet Searches
	Given a <pet name> costs <price>
	When I enter <pet name> and search for price
	Then the result should be <price>

Examples:
	| pet name	| price |
	| Gertle		| 23.00	|
	| Mimmoth		| 13.00	|