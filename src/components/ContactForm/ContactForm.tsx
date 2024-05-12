"use client";

import { FormEventHandler } from "react";
import TextField from "../TextField";
import Button from "../Button";

const ContactForm = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    console.log(e);

    return false;
  };

  return (
    <form method="post" action="" onSubmit={handleSubmit}>
      <section className="max-w-80 mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div className="name-field flex items-center justify-between">
            <label>Name: </label>
            <TextField id="" placeholder="haha eksdi" />
          </div>
          <div className="name-field flex items-center justify-between">
            <label>Name: </label>
            <TextField id="" placeholder="haha eksdi" />
          </div>
          <div className="name-field flex items-center justify-between">
            <label>Name: </label>
            <TextField id="" placeholder="haha eksdi" />
          </div>
          <div className="name-field flex items-center justify-between">
            <label>Name: </label>
            <TextField id="" placeholder="haha eksdi" />
          </div>
        </div>
        <div className="mt-2">
          <label>Name: </label>
          <textarea value="some textare content" />
        </div>
        <Button type="submit" variant="accent">
          Submit
        </Button>
      </section>
    </form>
  );
};

export default ContactForm;
