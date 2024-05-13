"use client";

import { FormEventHandler, InputHTMLAttributes, useState } from "react";
import TextField from "../TextField";
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

type ApiErrors = Map<keyof typeof FormFieldList, Set<string>>;

const defaultFormFields = Object.keys(FormFieldList);

interface Props {
  fields?: (keyof typeof FormFieldList)[];
}

const ContactForm = ({ fields = defaultFormFields }: Props) => {
  const [loading, setLoading] = useState(false);
  const [formComplete, setFormComplete] = useState(false);
  const [errors, setErrors] = useState<ApiErrors>(() => new Map());

  const formFields = Object.fromEntries(
    Object.entries(FormFieldList).filter(([key, _]) => fields?.includes(key))
  );

  const hasErrors = errors.size > 0;

  const addError = (field: keyof typeof FormFieldList, err: string) => {
    setErrors((prev) => {
      if (!prev.has(field)) {
        prev.set(field, new Set());
      }

      prev.get(field)?.add(err);

      return prev;
    });
  };

  const resetErrors = () => {
    setErrors(new Map());
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const address = formData.get("address")?.toString() ?? "";
    const website = formData.get("website_url")?.toString() ?? "";

    if (address.length > 0 || website.length > 0) {
      return false;
    }

    resetErrors();

    sendContactRequest(formData);

    return false;
  };

  const sendContactRequest = async (formData: FormData) => {
    try {
      setLoading(true);

      const res = await fetch(
        `http://${process.env.NEXT_PUBLIC_API_HOSTNAME}/api/v1/contacts`,
        {
          headers: {
            Accept: "application/json",
          },
          method: "POST",
          body: formData,
        }
      );

      if (res.status !== 200) {
        throw new Error("Invalid server response", { cause: res });
      }
      // @todo add error to textfield
      setFormComplete(true);
    } catch (e) {
      console.error("An error occurred: ", e);
      if ("cause" in e) {
        const json = await e.cause.json();
        if ("error" in json) {
          Object.entries(json.error).forEach(([key, value]) => {
            if (Array.isArray(value)) {
              value.forEach((str) => addError(key, str));
            } else {
              addError(key, value as string);
            }
          });
        } else if ("message" in json && !("error" in json)) {
          addError("message", json.message);
        }
      }
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
              placeholder="Enter message..."
            />
          </div>
        </div>
        {/* Honeypot fields START */}
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
        {/* Honeypot fields END */}
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
