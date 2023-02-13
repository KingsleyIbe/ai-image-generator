/* eslint-disable react/prop-types */
import React from 'react';

const FormField = ({
  labelName, type, name, isSurpriseMe, placeholder, value, handleChange, handleSurpriseMe,
}) => {
  const text = 'Surprise me';
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={name} className="block text-sm font-medium text-gray-900">
          {labelName}
        </label>
        {isSurpriseMe && (
        <button type="button" onClick={handleSurpriseMe} className="font-semibold text-xs bg-[#ececf1 py-1 px-2] rounded-[5px] text-black">
          {text}
        </button>
        )}
      </div>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default FormField;
