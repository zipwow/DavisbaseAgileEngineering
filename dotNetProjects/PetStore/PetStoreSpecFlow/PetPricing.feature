Feature: Pricing
	As a customer
	I want to be told the price of animals for sale
	so that I can make purchasing decisions

Scenario: Dog Search
	Given a Dog costs 23
	When I enter Dog and search for price
	Then the result should be 23

Scenario: Broken Cat Search
	Given a Dog costs 23
	And a Cat costs 14
	When I enter Cat and search for price
	Then the result should be 13
	
Scenario Outline: Bulk Pet Searches
	Given a <pet name> costs <price>
	When I enter <pet name> and search for price
	Then the result should be <price>

Examples:
	| pet name	| price |
	| Dog		| 23	|
	| Cat		| 13	|