import React, { useState } from "react";
import { Button, Input } from "@chakra-ui/react";

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [file, setFile] = useState(null);
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() === "") {
      alert("Please enter your name!");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address!");
      return;
    }
    console.log("Send!");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Note: ${note}`);
    console.log(`File: ${file}`);
  };

  return (
    <section className="max-w-[1512px] mx-auto p-10 md:px-24 py-32 text-black bg-white">
      <div className="max-w-[1200] mx-auto">
        <h1 className=" text-center text-2xl md:text-5xl lg:text-7xl leading-normal font-Matter font-bold pb-4 md:pb-16">
          <span className="font-GalleryModern">Describe</span> your challenge 👋
        </h1>
      </div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="font-Matter text-2xl mx-auto"
      >
        <h2>I'm interested in...</h2>
        <div className="my-5">
          <Button
            className="bg-white text-black pb-2 pt-1 px-4 mb-4 mr-5 rounded-full border border-black hover:bg-gray-200 active:bg-black active:text-white"
            type="button"
          >
            CRM
          </Button>
          <Button
            className="bg-white text-black mr-5 mb-4 pb-2 pt-1 px-4 rounded-full border border-black hover:bg-gray-200 active:bg-black active:text-white"
            type="button"
          >
            Marketing
          </Button>
          <Button
            className="bg-white text-black mr-5 mb-4 pb-2 pt-1 px-4 rounded-full border border-black hover:bg-gray-200 active:bg-black active:text-white"
            type="button"
          >
            Marketing Automation
          </Button>
        </div>

        <div className="mt-4 border-b pb-2 mb-10">
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mt-4 border-b pb-2 mb-10">
          <Input
            type="email"
            placeholder="mail@mail.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mt-4 border-b pb-2 mb-10">
          <textarea
            placeholder="Your challenge"
            value={note}
            onChange={(event) => setNote(event.target.value)}
          />
        </div>

        <h2 className="mt-20">Approximately budget (USD)</h2>
        <div className="my-5">
          <Button
            className="bg-white text-black pb-2 pt-1 px-4 mb-4 mr-5 rounded-full border border-black"
            type="button"
          >
            up to 1k
          </Button>
          <Button
            className="bg-white text-black pb-2 pt-1 px-4 mb-4 mr-5 rounded-full border border-black"
            type="button"
          >
            up to 5k
          </Button>
          <Button
            className="bg-white text-black pb-2 pt-1 px-4 mb-4 mr-5 rounded-full border border-black"
            type="button"
          >
            up to 15k
          </Button>
          <Button
            className="bg-white text-black pb-2 pt-1 px-4 mb-4 mr-5 rounded-full border border-black"
            type="button"
          >
            it is up to leadell
          </Button>
        </div>

        <label
          for="fileInput"
          className="mt-4 flex items-center py-2 px-4 cursor-pointer w-1/4"
        >
          <p className="mr-2">🔗</p>
          <input
            id="fileInput"
            type="file"
            onChange={(event) => setFile(event.target.files[0])}
            hidden
          />
          Add attachment
        </label>

        <div class="flex justify-center">
          <Button
            type="submit"
            className="mt-28 px-10 py-5 border border-black rounded-full hover:bg-gray-200 active:bg-black active:text-white"
          >
            Send challenge
          </Button>
        </div>
      </form>
    </section>
  );
}

export default MyForm;
