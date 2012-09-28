using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PetStore
{
    public interface IPetStore
    {
        decimal getPrice(String animalName);
    }
    
    public class PetStoreImpl: IPetStore
    {
        public Dictionary<String, decimal> priceTable;
        public decimal discountRate;

        public decimal DiscountRate
        {
            set
            {
                if (value < 0)
                {
                    throw new Exception("negative discount rates not allowed");
                }
                discountRate = value;
            }

            get
            {
                return discountRate;
            }
        }

        public PetStoreImpl()
        {
            priceTable = new Dictionary<string, decimal>();
        }
        public decimal getPrice(String animalName)
        {
            if (! priceTable.ContainsKey(animalName)) {
                throw new SystemException("no price found for ["+animalName+"].");
            }
            //return priceTable[animalName] * discountRate;
            return priceTable[animalName];
        }

        internal decimal Round(decimal unroundedPrice)
        {
            return Decimal.Round(unroundedPrice, 2);
        }
    }


}
