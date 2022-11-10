import React from "react";

const AddServices = () => {
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const serviceId = form.serviceId.value;
    const image = form.image.value;
    const price = form.price.value;

    const description = form.description.value;
    console.log(title, serviceId, image, description, price);

    const addService = {
      title,
      service_id: serviceId,
      img: image,
      price,
      description,
    };

    fetch("http://localhost:5000/services", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addService),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if (data.acknowledged) {
          alert("order placed successfully");
          form.reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <div className="my-10">
        <div className="card bg-gray-100 my-10">
          <div className="card-body">
            <form onSubmit={handleAddService}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="input input-bordered w-full"
                />
                <input
                  type="number"
                  name="serviceId"
                  placeholder="Service Id"
                  className="input input-bordered w-full"
                />

                <input
                  type="url"
                  name="image"
                  placeholder="Service Image"
                  className="input input-bordered w-full"
                  required
                />

                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </div>
              <textarea
                name="description"
                className="textarea textarea-bordered w-full h-40 mt-8"
                placeholder="Description"
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
