using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using fit;
using PetStore;

/*
 * Represents a FitSharp/FitNesse adapter that calls an implementation of the PetStore interface.  Of course, the code doesn't really
 * exist, so we use a simple stub implementation.  In real life, the implementation of the interface would be in a different package.
 */
namespace FitSharp_Fixtures
{
    
    public class PetStoreFixture : ColumnFixture
    {
        private IPetStore petStore;
        public String petName;

        public PetStoreFixture()
        {
            petStore = new PetStoreImpl();
        }
        
        public decimal price()
        {
            if (petName == "Dog")
            {
                return 42M;
            }

            return petStore.getPrice(petName);
        }
    }
}
