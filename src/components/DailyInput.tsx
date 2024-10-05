import React, { useState } from 'react';

interface DailyInputProps {
  onSubmit: (hours: number) => void;
}

const DailyInput: React.FC<DailyInputProps> = ({ onSubmit }) => {
  const [hours, setHours] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(hours);
    setHours(0);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex items-center space-x-4">
        <label htmlFor="hours" className="text-gray-700 font-medium">
          Hours spent today:
        </label>
        <input
          type="number"
          id="hours"
          min="0"
          max="24"
          value={hours}
          onChange={(e) => setHours(Math.min(24, Math.max(0, parseInt(e.target.value) || 0)))}
          className="border border-gray-300 rounded-md px-3 py-2 w-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Log Hours
        </button>
      </div>
    </form>
  );
};

export default DailyInput;