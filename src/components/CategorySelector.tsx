import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Category {
  name: string;
  icon: LucideIcon;
}

interface CategorySelectorProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex space-x-4 mb-8">
      {categories.map((category) => (
        <button
          key={category.name}
          className={`flex items-center px-4 py-2 rounded-full ${
            selectedCategory === category.name
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-800 hover:bg-gray-200'
          }`}
          onClick={() => onSelectCategory(category.name)}
        >
          <category.icon className="w-5 h-5 mr-2" />
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;