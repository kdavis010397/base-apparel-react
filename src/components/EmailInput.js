import { useState, useRef } from "react";

import classes from "./EmailInput.module.css";

const EmailInput = () => {
  const [valid, setValid] = useState(true);

  const input = useRef();

  const validate = (event) => {
    event.preventDefault();
    const emailRegex = new RegExp(
      /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
      "gm"
    );

    const userInput = input.current.value;
    setValid(emailRegex.test(userInput));
  };

  return (
    <form aria-label="Form" onSubmit={validate} noValidate>
      <label htmlFor="email">Email Address</label>
      <input
        ref={input}
        type="email"
        name="email"
        placeholder="Email Address"
        onChange={() => setValid(true)}
      />
      <button aria-label="Button">
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="20"
        >
          <path
            fill="none"
            stroke="#FFF"
            strokeWidth="2"
            d="M1 1l8.836 8.836L1 18.671"
          />
        </svg>
      </button>
      {!valid && (
        <svg
          className={classes["error-icon"]}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
        >
          <g fill="none" fill-rule="evenodd">
            <circle cx="12" cy="12" r="12" fill="#F96464" />
            <path
              fill="#FFF"
              fill-rule="nonzero"
              d="M13.256 6v9.056h-2V6h2zm-.944 12.464c-.384 0-.699-.104-.944-.312a1.027 1.027 0 0 1-.368-.824c0-.33.125-.608.376-.832.25-.224.563-.336.936-.336.373 0 .68.112.92.336.24.224.36.501.36.832 0 .341-.117.616-.352.824-.235.208-.544.312-.928.312z"
            />
          </g>
        </svg>
      )}
      {!valid && <p className={classes.error}>Please provide a valid email</p>}
    </form>
  );
};

export default EmailInput;
