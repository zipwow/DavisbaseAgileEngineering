using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NUnit.Framework;

namespace PetStore
{
   
    public class PetStoreImplTest
    {
        //[TestCase(10.333,10.33)]
        //[TestCase(10.666,10.66)]
        public void TestRounding(decimal unroundedPrice, decimal expectedResult) {
            PetStoreImpl petStore = new PetStoreImpl();
            decimal actualResult = petStore.Round(unroundedPrice);
            Assert.AreEqual(expectedResult, actualResult);
        } 
    }
}
