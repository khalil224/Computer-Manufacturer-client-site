import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-24 ml-6 mr-6 mb-24'>
            <h3 className='text-2xl font-bold '>Q1: How will you improve the performance of a React Application?</h3>
            <p className='text-xl font-semibold mt-2'>I will improve the performance of a react application using the following techniques:


                <ul>1. Using Immutable Data Structures
                </ul>
                2. Using Production Mode Flag in Webpack <br />
                3. Useing React.Fragments to Avoid Additional HTML Element Wrappersbr <br />
                4. Avoid Inline Function Definition in the Render Function. <br />
                5. Avoid using Index as Key for map <br />
                6. Avoiding Props in Initial States
            </p>
            <h3 className='text-2xl font-bold mt-6'>Q2. What are the different ways to manage a state in a React application?</h3>
            <p className='text-xl font-semibold mt-2'>There are four differernt wys to manage a state in React Application?
                <ul>
                    1. Local state <br />
                    2. Global state <br />
                    3. Server state <br />
                    4. URL state
                </ul>
            </p>
            <h3 className='text-2xl font-bold mt-6'>Q3. What is a unit test? Why should write unit tests?</h3>
            <p className='text-xl font-semibold mt-2'>UNIT TESTING is a sort of software testing that examines individual software units or components. The goal is to ensure that each unit of software code works as intended. Developers perform unit testing throughout the development  phase of an application. Unit tests are used to isolate a part of code and ensure that it is correct. An singular function, method, procedure, module, or object might be considered a unit.</p>
            <h3 className='text-2xl font-bold mt-6'>Q4. How does prototypical inheritance work?</h3>
            <p className='text-xl font-semibold mt-2'>Every object, along with its methods and properties, has a secret internal property called [[Prototype]]. Prototypal inheritance is a javascript feature that allows you to add methods and properties to objects. It's a method that allows one object to inherit the properties and methods of another. We use Object.getPrototypeOf and Object.setPrototypeOf to get and set the [[Prototype]] of an object, respectively.</p>
            <h3 className='text-2xl font-bold mt-6'>Q5. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h3>
            <p className='text-xl font-semibold mt-2'>Since the state is immutable, we can't simply push a new value to the array like we do normally in plain JavaScript. Instead, we need to use the setProducts method returned by the previous call to useState and the spread operator of JavaScript.</p>

        </div>
    );
};

export default Blogs;