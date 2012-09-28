using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AgileEngineering
{
    class StubCreditCardService : ICreditCardService
    {
        public int ReserveFunds(string creditCardNumber, decimal amount)
        {
            return -1;
        }

        public void CommitTransaction(int transactionId)
        { }
    }
}
