import React, { useState, ChangeEvent } from 'react';

interface Currency {
  currency: string;
  flag: string;
}

const CurrencyInputField: React.FC = () => {
  const currencies: Currency[] = [
    {
      currency: 'NRP',
      flag: '/flag/nepal.png',
    },
    {
      currency: 'USD',
      flag: '/flag/usa.png',
    },
    // Add more currencies as needed
  ];

  const [selectedCurrency, setSelectedCurrency] = useState<string>(
    currencies[0].currency
  );

  const handleCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCurrency(e.target.value);
  };

  return (
    <div className="w-full mb-5">
      <label
        htmlFor="currency"
        className="capitalize text-gray-500 inline-block mb-1 pl-1 text-base font-semibold"
      >
        {' '}
        Commit amount:
      </label>

      <div className="flex items-center ">
        <div className="flex items-center w-10 h-7 me-5 transition duration-300 ease-in-out">
          <img
            src={
              currencies.find((item) => item.currency === selectedCurrency)
                ?.flag
            }
            alt="Currency Flag"
            className="w-full h-full object-cover mr-2"
          />
        </div>
        <select
          onChange={handleCurrencyChange}
          value={selectedCurrency}
          name="currency"
          className="transition duration-300 ease flex w-fit border-b border-slate-700/40 bg-transparent px-3 py-1  text-sm placeholder:text-gray-600   focus:border-blue-500 focus:outline-none "
        >
          {currencies.map((item) => (
            <option key={item.currency} value={item.currency}>
              {item.currency}
            </option>
          ))}
        </select>
        <input
          type="number"
          className={` transition duration-300 ease flex w-full border-b border-slate-700/40 bg-transparent px-3 py-1  text-sm placeholder:text-gray-600   focus:border-blue-500 focus:outline-none`}
          placeholder="Enter amount"
        />
      </div>
    </div>
  );
};

export default CurrencyInputField;
