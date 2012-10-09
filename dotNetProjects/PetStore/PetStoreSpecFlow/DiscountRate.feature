Feature: Discount Rates Exercise
   Choose one acceptance criteria from the story below.  Think
   about which criteria might be most interesting to use in collaboration with business owners, or which might have the most risk.

   Write a BDD Acceptance Test for that criteria.  Re-use as much of the steps from the pre-existing scenarios as possible.

   Identify which steps of the test re-use existing automation, and which steps need programmer help to automate

   Repeat.

	As a store manager
	I want to set discount rates
	So that I can do marketing and sales

	Acceptance Criteria
   1.  Pets should not be discounted below $5
   2.  Exotic Pets (Emu, Llamas, Jaguars) should not be discounted at all
   3.  Discount rates over 50% should be rejected.

@Discounts
@Sprint25
Scenario: Discount Happy Path
	Given a Dog costs 25
	And a Cat costs 45
	When I set the discount rate to 10%
	And I enter Dog and search for price
	Then the result should be 22.50