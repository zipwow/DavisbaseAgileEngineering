using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NUnit.Framework;

namespace NUnitTest1
{
    [TestFixture]
    public class MyQueueTestFixture
    {
        [Test]
        public void QueueIsEmptyOnConstruction()
        {
            MyQueue queue = new MyQueue();
            bool isEmpty = queue.IsEmpty();
            Assert.IsTrue(isEmpty);
        }
    }
}
