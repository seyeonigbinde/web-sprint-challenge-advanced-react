# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

A stateful component keeps track of changing data, while function component prints out what is given to them via props, or they always render the same thing. 

2. When does a componentWillMount function be called? What about a componentWillUpdate?

ComponentWillMount function is called to implement server-side logic before the actual rendering such as making an API call to the server happens. ComponentWillUpdate function is invoked just before rendering when new props or state are being received. 

3. Define stateful logic.

Stateful logic is logic that is built into a component. It can be a function that handles a click event or maybe a function that sets toggle state or even a function that formats data before it gets displayed.

4. What are the three step of creating a successful test? What is done in each phase?

 1. Arrange - The renders out the components which the test is meant to be performed on.
 2. Act - This is to get the elements to be tested.
 3. Assert - This checks if our element exists.