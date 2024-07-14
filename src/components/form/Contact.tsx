import React, { useState } from "react";

const Contact: React.FC = () => {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Form Submitted Successfully");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "690241ff-ba2b-466d-97f6-98d53f7eb0fb");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data);

      if (data) {
        event.currentTarget.reset();
      }
    } catch (error) {
      event.currentTarget.reset();
      setResult("Form Submitted Successfully");
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
            <button type="submit" className="button is-primary">
              Submit Message
            </button>
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="botcheck"
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
