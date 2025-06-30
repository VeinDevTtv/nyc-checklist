"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Building, 
  Camera, 
  MapPin, 
  UtensilsCrossed, 
  Sparkles, 
  Luggage,
  RotateCcw,
  Landmark
} from 'lucide-react';

interface ChecklistItem {
  id: string;
  text: string;
  icon: React.ReactNode;
}

interface ChecklistSection {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  items: ChecklistItem[];
}

const CHECKLIST_DATA: ChecklistSection[] = [
  {
    id: 'attractions',
    title: 'Must-See Attractions',
    description: 'Iconic NYC landmarks you can\'t miss',
    icon: <Building className="w-4 h-4" />,
    items: [
      { id: 'statue-liberty', text: 'Statue of Liberty & Ellis Island', icon: <Landmark className="w-4 h-4" /> },
      { id: 'empire-state', text: 'Empire State Building', icon: <Building className="w-4 h-4" /> },
      { id: 'central-park', text: 'Central Park', icon: <MapPin className="w-4 h-4" /> },
      { id: 'brooklyn-bridge', text: 'Brooklyn Bridge', icon: <Building className="w-4 h-4" /> },
      { id: 'times-square', text: 'Times Square', icon: <Sparkles className="w-4 h-4" /> },
      { id: 'high-line', text: 'High Line Park', icon: <MapPin className="w-4 h-4" /> },
      { id: 'one-world-trade', text: 'One World Trade Center', icon: <Building className="w-4 h-4" /> },
      { id: 'rockefeller', text: 'Rockefeller Center', icon: <Building className="w-4 h-4" /> },
    ]
  },
  {
    id: 'museums',
    title: 'Museums',
    description: 'World-class museums and cultural institutions',
    icon: <Camera className="w-4 h-4" />,
    items: [
      { id: 'met', text: 'Metropolitan Museum of Art', icon: <Camera className="w-4 h-4" /> },
      { id: 'moma', text: 'Museum of Modern Art (MoMA)', icon: <Camera className="w-4 h-4" /> },
      { id: 'guggenheim', text: 'Guggenheim Museum', icon: <Camera className="w-4 h-4" /> },
      { id: 'natural-history', text: 'Natural History Museum', icon: <Camera className="w-4 h-4" /> },
      { id: '911-memorial', text: '9/11 Memorial & Museum', icon: <Camera className="w-4 h-4" /> },
      { id: 'intrepid', text: 'Intrepid Sea, Air & Space Museum', icon: <Camera className="w-4 h-4" /> },
    ]
  },
  {
    id: 'neighborhoods',
    title: 'Neighborhoods to Explore',
    description: 'Diverse neighborhoods with unique character',
    icon: <MapPin className="w-4 h-4" />,
    items: [
      { id: 'soho', text: 'SoHo (Shopping & Art)', icon: <MapPin className="w-4 h-4" /> },
      { id: 'greenwich', text: 'Greenwich Village', icon: <MapPin className="w-4 h-4" /> },
      { id: 'chinatown', text: 'Chinatown', icon: <MapPin className="w-4 h-4" /> },
      { id: 'little-italy', text: 'Little Italy', icon: <MapPin className="w-4 h-4" /> },
      { id: 'williamsburg', text: 'Williamsburg, Brooklyn', icon: <MapPin className="w-4 h-4" /> },
      { id: 'dumbo', text: 'DUMBO, Brooklyn', icon: <MapPin className="w-4 h-4" /> },
      { id: 'harlem', text: 'Harlem', icon: <MapPin className="w-4 h-4" /> },
      { id: 'east-village', text: 'East Village', icon: <MapPin className="w-4 h-4" /> },
    ]
  },
  {
    id: 'food',
    title: 'Food to Try',
    description: 'NYC\'s iconic foods and dining experiences',
    icon: <UtensilsCrossed className="w-4 h-4" />,
    items: [
      { id: 'pizza', text: 'New York Style Pizza', icon: <UtensilsCrossed className="w-4 h-4" /> },
      { id: 'bagels', text: 'Fresh Bagels with Lox', icon: <UtensilsCrossed className="w-4 h-4" /> },
      { id: 'deli', text: 'Pastrami Sandwich at Katz\'s Deli', icon: <UtensilsCrossed className="w-4 h-4" /> },
      { id: 'hot-dog', text: 'Street Cart Hot Dog', icon: <UtensilsCrossed className="w-4 h-4" /> },
      { id: 'cheesecake', text: 'New York Cheesecake', icon: <UtensilsCrossed className="w-4 h-4" /> },
      { id: 'ramen', text: 'Ramen in East Village', icon: <UtensilsCrossed className="w-4 h-4" /> },
      { id: 'brunch', text: 'Weekend Brunch in Brooklyn', icon: <UtensilsCrossed className="w-4 h-4" /> },
      { id: 'rooftop', text: 'Rooftop Dining Experience', icon: <UtensilsCrossed className="w-4 h-4" /> },
    ]
  },
  {
    id: 'optional',
    title: 'Optional Experiences',
    description: 'Extra activities to enhance your trip',
    icon: <Sparkles className="w-4 h-4" />,
    items: [
      { id: 'broadway', text: 'Broadway Show', icon: <Sparkles className="w-4 h-4" /> },
      { id: 'yankees', text: 'Yankees Game at Yankee Stadium', icon: <Sparkles className="w-4 h-4" /> },
      { id: 'helicopter', text: 'Helicopter Tour of Manhattan', icon: <Sparkles className="w-4 h-4" /> },
      { id: 'ferry', text: 'Staten Island Ferry (Free!)', icon: <Sparkles className="w-4 h-4" /> },
      { id: 'jazz', text: 'Jazz Club in Harlem', icon: <Sparkles className="w-4 h-4" /> },
      { id: 'speakeasy', text: 'Hidden Speakeasy Bar', icon: <Sparkles className="w-4 h-4" /> },
      { id: 'coney-island', text: 'Coney Island & Brighton Beach', icon: <Sparkles className="w-4 h-4" /> },
    ]
  },
  {
    id: 'essentials',
    title: 'Essentials to Pack',
    description: 'Important items for your NYC adventure',
    icon: <Luggage className="w-4 h-4" />,
    items: [
      { id: 'comfortable-shoes', text: 'Comfortable Walking Shoes', icon: <Luggage className="w-4 h-4" /> },
      { id: 'metro-card', text: 'Metro Card/OMNY Setup', icon: <Luggage className="w-4 h-4" /> },
      { id: 'power-bank', text: 'Portable Phone Charger', icon: <Luggage className="w-4 h-4" /> },
      { id: 'weather-clothes', text: 'Weather-Appropriate Clothing', icon: <Luggage className="w-4 h-4" /> },
      { id: 'camera', text: 'Camera or Phone with Good Camera', icon: <Camera className="w-4 h-4" /> },
      { id: 'umbrella', text: 'Compact Umbrella', icon: <Luggage className="w-4 h-4" /> },
      { id: 'cash', text: 'Some Cash for Tips & Street Vendors', icon: <Luggage className="w-4 h-4" /> },
      { id: 'id', text: 'Valid ID for Museums & Shows', icon: <Luggage className="w-4 h-4" /> },
    ]
  },
];

export default function NYCTripChecklist() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Load from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem('nyc-checklist');
    if (saved) {
      try {
        setCheckedItems(JSON.parse(saved));
      } catch (error) {
        console.error('Error loading checklist from localStorage:', error);
      }
    }
  }, []);

  // Save to localStorage whenever checkedItems changes
  useEffect(() => {
    localStorage.setItem('nyc-checklist', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const handleItemToggle = (itemId: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const getCheckedCount = (sectionId: string) => {
    const section = CHECKLIST_DATA.find(s => s.id === sectionId);
    if (!section) return 0;
    
    return section.items.filter(item => checkedItems[item.id]).length;
  };

  const getTotalCheckedCount = () => {
    return Object.values(checkedItems).filter(Boolean).length;
  };

  const getTotalItemsCount = () => {
    return CHECKLIST_DATA.reduce((total, section) => total + section.items.length, 0);
  };

  const resetAllItems = () => {
    setCheckedItems({});
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          🗽 NYC Trip Checklist
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Your ultimate guide to exploring the Big Apple
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Badge variant="secondary" className="text-sm">
            {getTotalCheckedCount()} / {getTotalItemsCount()} completed
          </Badge>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={resetAllItems}
            className="flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Reset All
          </Button>
        </div>
      </div>

      <Tabs defaultValue="attractions" className="w-full">
        <TabsList className="grid w-full grid-cols-3 sm:grid-cols-6 mb-6">
          {CHECKLIST_DATA.map((section) => (
            <TabsTrigger 
              key={section.id} 
              value={section.id}
              className="text-xs sm:text-sm flex flex-col sm:flex-row items-center gap-1 p-2"
            >
              {section.icon}
              <span className="hidden sm:inline">{section.title.split(' ')[0]}</span>
              <span className="sm:hidden">{section.title.split(' ')[0].slice(0, 4)}</span>
              <Badge variant="secondary" className="text-xs">
                {getCheckedCount(section.id)}
              </Badge>
            </TabsTrigger>
          ))}
        </TabsList>

        {CHECKLIST_DATA.map((section) => (
          <TabsContent key={section.id} value={section.id}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
                  {section.icon}
                  {section.title}
                  <Badge variant="outline">
                    {getCheckedCount(section.id)} / {section.items.length}
                  </Badge>
                </CardTitle>
                <CardDescription className="text-base">
                  {section.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:gap-4">
                  {section.items.map((item) => (
                    <div 
                      key={item.id}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Checkbox
                        id={item.id}
                        checked={checkedItems[item.id] || false}
                        onCheckedChange={() => handleItemToggle(item.id)}
                        className="flex-shrink-0"
                      />
                      <div className="flex items-center gap-2 flex-grow">
                        {item.icon}
                        <label 
                          htmlFor={item.id}
                          className={`text-sm sm:text-base cursor-pointer transition-colors ${
                            checkedItems[item.id] 
                              ? 'text-gray-500 line-through' 
                              : 'text-gray-900'
                          }`}
                        >
                          {item.text}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
} 