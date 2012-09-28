using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NUnit.Framework;
using NUnit.Mocks;

namespace AgileEngineering
{
    [TestFixture]
    class AccountUpdaterTest
    {
        [Test]
        public void testHappyPath()
        {
            //write just enough code for the happy path -- make a handmade implementation of the two interfaces,
            //pass them to the AccountUpdateFacade class and call them from that class.  Make up any data you need.
            IBalanceService balanceService = new StubBalanceService();
            ICreditCardService creditCardService = new StubCreditCardService();

            AccountUpdater updater = new AccountUpdater(balanceService, creditCardService);
            updater.UpdateAccount("444444444444", 50.00M, 424242);
        }

        [Test]
        [ExpectedException(typeof(AccountInvalidException))]
        public void simulateFailure()
        {
            //now adjust your stub implementation of the interfaces so that it throws one of the exceptions described in FacadeExample.cs.
            //be sure to change it in such a way that testHappyPath still passes!
            StubBalanceService balanceService = new StubBalanceService();
            ICreditCardService creditCardService = new StubCreditCardService();

           // balanceService.SetBroken(true);
            AccountUpdater updater = new AccountUpdater(balanceService, creditCardService);
            updater.UpdateAccount("444444444444", 50.00M, 424242);
        }

        [Test]
        public void testCommitTransactionCalled()
        {
            //STOP -- check with instructor before beginning this test~
            //now go break your code -- don't call the 'commit transaction' or the 'update account' methods.  Does the test above fail?  
            //use dynamic mocks to verify that these methods are called.

            //here's an example of creating the credit card service.  You'll need another thing just like this for
            //the account update.  These mocks will replace the stub code from the happyPathTest
            DynamicMock mockCreditCardService = new DynamicMock(typeof (ICreditCardService));
            //some expectations
            int token = 42;
            String ccNum = "4324 3924 4382 3888";
            Decimal amount = 199.99M;
            mockCreditCardService.ExpectAndReturn("ReserveFunds", token, new Object[2] { ccNum, amount });
            mockCreditCardService.Expect("CommitTransaction", new Object[1] { token });
            ICreditCardService creditCardServiceInstance = (ICreditCardService) mockCreditCardService.MockInstance;

            //calls to the actual class under test goes here
            AccountUpdater au = new AccountUpdater(new StubBalanceService(), creditCardServiceInstance);
            au.UpdateAccount(ccNum, amount, 3982834);

            //this should be the last line.
            mockCreditCardService.Verify();
        }
    }
}
