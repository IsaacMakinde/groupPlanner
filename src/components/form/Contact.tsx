import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Contact: React.FC = () => {
  const [result, setResult] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const ACCESSKEY = import.meta.env.VITE_FORM_ACCESS_KEY;

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", ACCESSKEY);

    try {
      const response = await axios.post(
        "https://api.web3forms.com/submit",
        JSON.stringify(Object.fromEntries(formData)),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        Swal.fire("Success!", "Form Submitted Successfully!", "success");
        setResult("Form Submitted Successfully");
      } else {
        Swal.fire(
          "Error!",
          response.data.message || "Form Submission Failed!",
          "error"
        );
        setResult(response.data.message || "Form Submission Failed");
      }
    } catch (error) {
      console.error("Unexpected Error:", error);
      Swal.fire(
        "Error!",
        error.response?.data?.message || "An unexpected error occurred!",
        "error"
      );
      setResult(
        error.response?.data?.message || "An unexpected error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="hidden"
          name="subject"
          value="New Submission from Web3Forms"
        />
        <input
          type="hidden"
          name="redirect"
          value="https://web3forms.com/success"
        />
        <div className="field">
          <div className="control">
            <input
              className="input is-primary"
              type="email"
              placeholder="Your Email"
              name="email"
              required
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <textarea
              className="textarea is-primary"
              placeholder="Your Message"
              name="message"
              required
            ></textarea>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button
              type="submit"
              className="button is-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Message"}
            </button>
          </div>
        </div>
        <div>
          <input
            type="checkbox"
            name="botCheck"
            className="hidden"
            style={{ display: "none" }}
          />
        </div>
      </form>
      <span>{result}</span>
    </div>
  );
};

export default Contact;
