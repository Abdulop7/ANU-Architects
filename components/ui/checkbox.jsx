"use client";

import React from "react";

export function Checkbox({ checked, onCheckedChange }) {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onCheckedChange}
        className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:ring-offset-0"
      />
      <span className="ml-2 text-gray-700 select-none">{/* label handled externally */}</span>
    </label>
  );
}
