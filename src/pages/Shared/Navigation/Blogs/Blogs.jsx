import useTitle from "../../../../hooks/useTitle";


const Blogs = () => {
    useTitle('Blogs')
    return (
        <div>
            <h1 className="text-3xl mb-2">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
            <p className="mb-2">
                Access tokens are short-lived tokens that grant limited access to protected resources. Refresh tokens are long-lived tokens that can be used to obtain new access tokens. Access tokens are typically stored in the browser's local storage or session storage, while refresh tokens are typically stored in the browser's IndexedDB or Web SQL Database.

                Access tokens are used to access resources that are only needed for a short period of time, such as a user's profile information. Refresh tokens are used to access resources that are needed for a longer period of time, such as a user's email inbox.

                It is important to store access tokens and refresh tokens securely. Access tokens should be stored in a secure location, encrypted, and invalidated when they are no longer needed. Refresh tokens should be stored in a secure location, encrypted, and not invalidated unless they are compromised.
            </p>
            <h1 className="text-3xl mb-2">Compare SQL and NoSQL databases?</h1>
            <p className="mb-2">
                SQL databases are based on a structured schema, use a relational data model, and employ SQL for querying. They have strong consistency, ACID transactions, and vertical scalability. They are suitable for structured data and complex relationships. <br />

                NoSQL databases are schema-less or have a flexible schema, support various data models, and use different query languages. They prioritize scalability, availability, and horizontal scalability. They offer eventual consistency, are well-suited for unstructured data, and provide flexibility in handling large volumes of data.</p>

            <h1 className="text-3xl mb-2">What is express js? What is Nest JS?</h1>
            <p className="mb-2">
                Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. <br />

                NestJS is a TypeScript-based framework for building server-side applications in Node.js. It combines the best features of Angular and Express.js to provide a structured and scalable environment.
            </p>
            <h1 className="text-3xl mb-2">What is MongoDB aggregate and how does it work ?</h1>
            <p className="mb-2">
                The MongoDB aggregate function is a feature that allows you to perform advanced data analysis and processing operations on collections of documents. It works by creating a pipeline of stages, where each stage performs a specific operation on the data and passes the results to the next stage. This allows you to perform tasks such as grouping, filtering, sorting, and transforming data to retrieve aggregated results. The aggregate function provides a flexible and powerful way to manipulate and analyze data in MongoDB.
            </p>
        </div>
    );
};

export default Blogs;