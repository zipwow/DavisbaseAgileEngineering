package com.davisbase.genepets;

import java.math.BigDecimal;

import junit.framework.Assert;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PricingStepDefinitions {
	private PetStore petStore;
	private BigDecimal actualPrice;
	
	@Before
	public void setUpPetStoreConnection() {
	    petStore = new PetStore();

	}
	
	
	@Given("^a (.*) costs (.*)$")
	public void a_pet_costs_(String petName, BigDecimal price) throws Throwable {
	    petStore.addPet(petName, price);
	}

	@When("^I enter (.*) and search for price$")
	public void I_enter_petname_and_search_for_price(String petName) throws Throwable {
		actualPrice = petStore.search(petName);
	}

	@Then("^the result should be (.*)$")
	public void the_result_should_be_(BigDecimal price) throws Throwable {
		Assert.assertEquals(price, actualPrice);
	}

	
}
