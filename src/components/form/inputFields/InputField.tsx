import React, { forwardRef, HTMLProps, useId } from 'react';
// import { useId } from 'react';

interface InputFieldProps extends HTMLProps<HTMLInputElement> {
  label?: string;
  type?: 'text' | 'text-area' | 'number' | 'email';
  placeholder?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, type = 'text', className = '', placeholder, ...props }, ref) => {
    const [id] = useId();

    return (
      <div className="w-full mb-5">
        {label && (
          <label
            className="capitalize text-gray-500 inline-block mb-1 pl-1 text-base font-semibold"
            htmlFor={id}
          >
            {label}
          </label>
        )}

        {type === 'text-area' ? (
          <textarea
            className={`${className} transition duration-300 ease w-full border rounded-xl border-slate-700/40 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:border-blue-500`}
            placeholder={placeholder}
            rows={6}
            id={id}
            ref={ref}
            {...props}
          />
        ) : (
          <input
            className={`${className} transition duration-300 ease flex w-full border-b border-slate-700/40 bg-transparent px-3 py-1  text-sm placeholder:text-gray-600   focus:border-blue-500 focus:outline-none`}
            type={type}
            placeholder={placeholder}
            id={id}
            ref={ref}
            {...props}
          />
        )}
      </div>
    );
  }
);

export default InputField;
