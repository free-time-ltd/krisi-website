"use client";

import { FormEventHandler, InputHTMLAttributes, useState } from "react";
import TextField from "../TextField";
import Button from "../Button";
import LoadingButton from "../Button/LoadingButton";

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
  const [loading, setLoading] = useState(false);
  const formFields = Object.fromEntries(
    Object.entries(FormFieldList).filter(([key, _]) => fields?.includes(key))
  );

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const address = formData.get("address")?.toString() ?? "";
    const website = formData.get("website_url")?.toString() ?? "";

    if (address.length > 0 || website.length > 0) {
      return false;
    }

    sendContactRequest(formData);

    return false;
  };

  const sendContactRequest = async (formData: FormData) => {
    try {
      setLoading(true);

      const res = await fetch(
        `http://${process.env.NEXT_PUBLIC_API_HOSTNAME}/api/v1/contacts`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (res.status !== 200) {
        throw new Error("Invalid server response", { cause: res });
      }

      const json = await res.json();

      console.log({ json });
    } catch (e) {
      console.error("An error occurred: ", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form method="post" action="" onSubmit={handleSubmit}>
      <section className="lg:max-w-xl mx-auto">
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(formFields).map(([key, field]) => (
            <div className="flex flex-col gap-2" key={key}>
              <TextField
                id={`field-${key}`}
                name={key}
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
              name="message"
              className="bg-transparent p-2.5 border border-accent hover:border-secondary focus:rounded-none text-sm block w-full"
              defaultValue="some textare content"
            />
          </div>
        </div>
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="website_url"
            defaultValue=""
            tabIndex={-1}
            placeholder="Enter website"
          />
          <input
            type="text"
            name="address"
            defaultValue=""
            tabIndex={-1}
            placeholder="Enter address"
          />
        </div>
        <div className="text-center pt-2">
          <LoadingButton
            type="submit"
            variant="accent"
            loading={loading}
            message="Submitting..."
          >
            Submit
          </LoadingButton>
        </div>
      </section>
    </form>
  );
};

export default ContactForm;
