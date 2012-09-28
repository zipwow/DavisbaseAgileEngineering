using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AgileEngineering
{
    class StubBalanceService :IBalanceService
    {
        public int UpdateAccount(string accountId, decimal amount)
        {
            if (Broken)
            {
                throw new AccountInvalidException();
            }
            return 0;
        }

        public void CommitTransaction(int transactionId)
        {
        }

        public bool Broken { get; set; }
    }
}
