import junit.framework.TestCase;


public class QueueTest extends TestCase {
	private MyQueue myQueue;

	public void testQueueEmptyOnConstruction() {
		assertTrue(myQueue.isEmpty());
	}
	
	public void testEnqueueDequeueIsEmpty() {
		myQueue.enqueue("something");
		myQueue.dequeue();
		assertTrue(myQueue.isEmpty());
	}
	
	protected void setUp() {
		myQueue=new MyQueue();
	}

}
