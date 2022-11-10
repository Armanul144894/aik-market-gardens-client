import React from "react";
import blog1 from "../../assets/blogs/blog1.png";
import blog2 from "../../assets/blogs/blog2.png";
import blog3 from "../../assets/blogs/blog3.png";
import blog4 from "../../assets/blogs/blog4.png";
import useTitle from "../../Hooks/useTitles";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-56" src={blog1} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-start">
            Difference between SQL and NoSQL
          </h2>
          <p className="text-justify">
            SQL is the programming language used to interface with relational
            databases. (Relational databases model data as records in rows and
            tables with logical links between them). NoSQL is a class of DBMs
            that are non-relational and generally do not use SQL.SQL databases
            are efficient at processing queries and joining data across tables,
            making it easier to perform complex queries against structured data,
            including ad hoc requests. NoSQL databases lack consistency across
            products and typically require more work to query data, particular
            as query complexity increases.
          </p>
        </div>
      </div>

      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-56" src={blog2} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-start">
            What is JWT, and how does it work?
          </h2>
          <p className="text-justify">
            What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open
            standard (RFC 7519) for securely transmitting information between
            parties as JSON object. It is compact, readable and digitally signed
            using a private key/ or a public key pair by the Identity
            Provider(IdP).Information Exchange: JWTs are a good way of securely
            transmitting information between parties because they can be signed,
            which means you can be sure that the senders are who they say they
            are. Additionally, the structure of a JWT allows you to verify that
            the content hasn't been tampered with.
          </p>
        </div>
      </div>

      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-56" src={blog3} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-start">
            What is the difference between javascript and NodeJS?
          </h2>
          <p className="text-justify">
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node. js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language.Javascript is used in frontend
            development. Nodejs is used in server-side development.Javascript is
            capable enough to add HTML and play with the DOM. Nodejs does not
            have capability to add HTML tags.Javascript can only be run in the
            browsers. We can run Javascript outside the browser with the help of
            NodeJS.
          </p>
        </div>
      </div>

      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-56" src={blog4} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-start">
            How does NodeJS handle multiple requests at the same time?
          </h2>
          <p className="text-justify">
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them.They handle 40K requests
            per second having Node. Multiple clients make multiple requests to
            the NodeJS server. NodeJS receives these requests and places them
            into the EventQueue . NodeJS server has an internal component
            referred to as the EventLoop which is an infinite loop that receives
            requests and processes them. This EventLoop is single threaded.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
