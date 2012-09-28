using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace NUnitTest1
{
    class MyQueue
    {
        private List<Object> queuedItems = new List<Object>();
        
        internal bool IsEmpty()
        {
            return queuedItems.Count == 0;
        }
    }
}
