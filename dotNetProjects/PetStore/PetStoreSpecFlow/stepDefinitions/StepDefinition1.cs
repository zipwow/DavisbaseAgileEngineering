using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TechTalk.SpecFlow;
using PetStore;
using NUnit.Framework;

namespace PetStoreSpecFlow
{
    [Binding]
    public class SimpleStepdefinitions
    {
        private PetStoreImpl petStore;
        private String petName;

        [BeforeScenario]
        public void CreatePetStore()
        {
            petStore = new PetStoreImpl();
        }

        [When("I enter (.*) and search for price")]
        public void WhenISearchPrice(String petNameEntered)
        {
            petName = petNameEntered;
        }

        [Then("the result should be (.*)")]
        public void ThenTheResultShouldBe(decimal result)
        {
            Assert.That(petStore.getPrice(petName), Is.EqualTo(result));
        }

        [Given(@"a (.*) costs (.*)")]
        public void APetCostsPrice(String petName, decimal price)
        { 
            petStore.priceTable.Add(petName, price);
        }

        [Given(@"the following data exists:")]
        public void loadData(Table table)
        {
            petStore.priceTable.Clear();
            foreach (TableRow row in table.Rows)
            {
                string petName = row[0];
                decimal price = decimal.Parse(row[1]);
                APetCostsPrice(petName, price);
            }
        }
    }
}
