import React from "react";

const AddServices = () => {
  const handleAddService = (event) => {};
  return (
    <div>
      <div className="my-10">
        <div className="card bg-gray-100 my-10">
          <div className="card-body">
            <form onSubmit={handleAddService}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="input input-bordered w-full"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="input input-bordered w-full"
                />

                <input
                  type="url"
                  name="image"
                  placeholder="Your Image"
                  className="input input-bordered w-full"
                  required
                />

                <input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  //   defaultValue={user?.email}
                  className="input input-bordered w-full"
                  readOnly
                />
              </div>
              <textarea
                name="message"
                className="textarea textarea-bordered w-full h-40 mt-8"
                placeholder="Your Message"
              ></textarea>
              <input
                className="btn btn-accent text-white font-bold w-full mt-5 mb-10"
                type="submit"
                value="Add Service"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
