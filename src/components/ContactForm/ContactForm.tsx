"use client";

import { FormEventHandler, InputHTMLAttributes } from "react";
import TextField from "../TextField";
import Button from "../Button";

type FormField = {
  label: string;
  placeholder: string;
  inputMode?: InputHTMLAttributes<HTMLInputElement>["inputMode"];
  required?: boolean;
  defaultValue?: string;
};

type FormFieldRecord = Record<string, FormField>;

const FormFieldList = {
  name: {
    label: "Name",
    placeholder: "Your name",
    inputMode: "text",
    required: true,
  },
  phone: {
    label: "Phone",
    placeholder: "Phone number for contact",
    inputMode: "tel",
    required: true,
  },
  email: {
    label: "E-Mail",
    placeholder: "Your E-Mail address",
    inputMode: "email",
    required: true,
  },
  website: {
    label: "Website",
    placeholder: "Your website (optional)",
    inputMode: "url",
  },
} as FormFieldRecord;

const defaultFormFields = Object.keys(FormFieldList);

interface Props {
  fields?: (keyof typeof FormFieldList)[];
}

const ContactForm = ({ fields = defaultFormFields }: Props) => {
  const formFields = Object.fromEntries(
    Object.entries(FormFieldList).filter(([key, _]) => fields?.includes(key))
  );

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    console.log(e);

    return false;
  };

  return (
    <form method="post" action="" onSubmit={handleSubmit}>
      <section className="lg:max-w-xl mx-auto">
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(formFields).map(([key, field]) => (
            <div className="flex flex-col gap-2" key={key}>
              <TextField
                id={`field-${key}`}
                label={field.label}
                placeholder={field.placeholder}
                inputMode={field.inputMode}
                required={field.required}
              />
            </div>
          ))}
        </div>
        <div className="mt-2">
          <label>Message: </label>
          <div className="w-full py-2">
            <textarea
              className="bg-transparent p-2.5 border border-accent hover:border-secondary focus:rounded-none text-sm block w-full"
              defaultValue="some textare content"
            />
          </div>
        </div>
        <div className="text-center pt-2">
          <Button type="submit" variant="accent">
            Submit
          </Button>
        </div>
      </section>
    </form>
  );
};

export default ContactForm;
