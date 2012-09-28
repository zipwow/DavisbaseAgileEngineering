using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

/*
 * This is a set of classes/interfaces to demostrate how to use Stubs, Fakes, or Mocks to do Test Driven Development even on code that relies on external
 * dependencies.
 * 
 * In our hypothetical example, we have two pre-existing services, defined by the interfaces below.  One service is the credit card service that withdraws money from customer
 * accounts.  The second service records those transactions in our database, enabling accounts, etc. etc.
 * 
 * What we are building in this example is the "glue" code that integrates these two services, creating a working payment system
 */
namespace AgileEngineering
{
    /*
    * This is the class that we're going to implement -- it puts two services together (charge card, and update account) via two-phase-commit 
    * in order to provide a seamless update service to its callers.
    */
    public class AccountUpdater
    {
        private IBalanceService balanceService;
        private ICreditCardService creditCardService;

        public AccountUpdater(IBalanceService balanceService, ICreditCardService creditCardService)
        {
            this.balanceService = balanceService;
            this.creditCardService = creditCardService;
        }
        //as we are doing TDD, I've given no implementation.  

        public void UpdateAccount(string creditCardNumber, decimal amount, int accountNumber)
        {
            int token = creditCardService.ReserveFunds(creditCardNumber, amount);
            creditCardService.CommitTransaction(token);
        }

    }

    //---------------------------------------------MAKE NO CHANGES BELOW THIS LINE!------------------------------

    //these two interfaces represent 3rd part services.  In our example, these have full implementations, but they are encumbered with the need
    //for the services to be running, have accounts set up, be authenticated, etc. etc.  In this exercise, we will follow the principle of Programming
    //to Interfaces, and just use these interfaces along with Stubs/Fakes/Mocks to implment our AccountUpdater

    /*
     * A service that reserves funds, and executes finalized transactions.
     */
    public interface ICreditCardService
    {
        int ReserveFunds(String creditCardNumber, decimal amount);// throws FundsNotAvailableException
        void CommitTransaction(int transactionId);
    }

    /*
     * A service that updates our internal account balance.
     */
    public interface IBalanceService
    {
        int UpdateAccount(String accountId, decimal amount);// throws AccountInvalidException
        void CommitTransaction(int transactionId);
    }


 public class FundsNotAvailableException : ApplicationException { }
 public class AccountInvalidException : ApplicationException { }

}
