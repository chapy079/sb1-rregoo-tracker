import React from 'react';

interface ContributionGraphProps {
  category: string;
  contributions: number[];
}

const ContributionGraph: React.FC<ContributionGraphProps> = ({ category, contributions }) => {
  const getColor = (value: number) => {
    const colors = [
      'bg-gray-200',
      'bg-green-200',
      'bg-green-300',
      'bg-green-400',
      'bg-green-500',
    ];
    return colors[value];
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">{category} Contributions</h2>
      <div className="grid grid-cols-53 gap-1">
        {contributions.map((value, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-sm ${getColor(value)}`}
            title={`${value} hour${value !== 1 ? 's' : ''} on day ${index + 1}`}
          ></div>
        ))}
      </div>
      <div className="flex justify-end items-center mt-4">
        <span className="text-sm text-gray-600 mr-2">Less</span>
        {[0, 1, 2, 3, 4].map((value) => (
          <div
            key={value}
            className={`w-3 h-3 rounded-sm ${getColor(value)} mr-1`}
          ></div>
        ))}
        <span className="text-sm text-gray-600 ml-1">More</span>
      </div>
    </div>
  );
};

export default ContributionGraph;