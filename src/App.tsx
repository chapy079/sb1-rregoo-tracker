import React, { useState } from 'react';
import { Activity, DollarSign, Heart } from 'lucide-react';
import ContributionGraph from './components/ContributionGraph';
import CategorySelector from './components/CategorySelector';
import DailyInput from './components/DailyInput';

const categories = [
  { name: 'Health', icon: Activity },
  { name: 'Wealth', icon: DollarSign },
  { name: 'Relationships', icon: Heart },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
  const [contributions, setContributions] = useState<{ [key: string]: number[] }>({
    Health: Array(365).fill(0),
    Wealth: Array(365).fill(0),
    Relationships: Array(365).fill(0),
  });

  const updateContribution = (hours: number) => {
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
    
    setContributions(prevContributions => ({
      ...prevContributions,
      [selectedCategory]: prevContributions[selectedCategory].map((value, index) => 
        index === dayOfYear - 1 ? Math.min(hours, 4) : value
      )
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Daily Progress Tracker</h1>
      <CategorySelector
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <DailyInput onSubmit={updateContribution} />
      <ContributionGraph category={selectedCategory} contributions={contributions[selectedCategory]} />
    </div>
  );
}

export default App;