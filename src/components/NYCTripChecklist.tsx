"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Footer } from '@/components/Footer';
import AITripAdvisor from '@/components/AITripAdvisor';
import { 
  Building, 
  Camera, 
  MapPin, 
  UtensilsCrossed, 
  Sparkles, 
  Luggage,
  RotateCcw,
  Landmark,
  Trophy,
  Target,
  Zap,
  Star,
  CheckCircle2,
  ShoppingBag
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
  color: string;
}

const CHECKLIST_DATA: ChecklistSection[] = [
  {
    id: 'attractions',
    title: 'Must-See Attractions',
    description: 'Iconic NYC landmarks you can\'t miss',
    icon: <Building className="w-4 h-4" />,
    color: 'from-blue-500 to-purple-600',
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
    color: 'from-purple-500 to-pink-600',
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
    color: 'from-green-500 to-blue-600',
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
    color: 'from-orange-500 to-red-600',
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
    color: 'from-yellow-500 to-pink-600',
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
    id: 'shopping',
    title: 'Shopping Destinations',
    description: 'Premier shopping centers and retail destinations',
    icon: <ShoppingBag className="w-4 h-4" />,
    color: 'from-pink-500 to-rose-600',
    items: [
      { id: 'westfield-wtc', text: 'Westfield World Trade Center (The Oculus)', icon: <ShoppingBag className="w-4 h-4" /> },
      { id: 'brookfield-place', text: 'Brookfield Place', icon: <ShoppingBag className="w-4 h-4" /> },
      { id: 'fulton-center', text: 'Fulton Center Mall', icon: <ShoppingBag className="w-4 h-4" /> },
      { id: 'woodbury-common', text: 'Woodbury Common Premium Outlets', icon: <ShoppingBag className="w-4 h-4" /> },
      { id: 'empire-outlets', text: 'Empire Outlets (Staten Island)', icon: <ShoppingBag className="w-4 h-4" /> },
    ]
  },
  {
    id: 'essentials',
    title: 'Essentials to Pack',
    description: 'Important items for your NYC adventure',
    icon: <Luggage className="w-4 h-4" />,
    color: 'from-indigo-500 to-purple-600',
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
  const [showConfetti, setShowConfetti] = useState(false);

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
    const wasChecked = checkedItems[itemId];
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));

    // Show confetti animation when completing an item
    if (!wasChecked) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1000);
    }
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

  const getCompletionPercentage = () => {
    const total = getTotalItemsCount();
    const completed = getTotalCheckedCount();
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  };

  const resetAllItems = () => {
    setCheckedItems({});
  };

  const getSectionCompletionPercentage = (sectionId: string) => {
    const section = CHECKLIST_DATA.find(s => s.id === sectionId);
    if (!section) return 0;
    const completed = getCheckedCount(sectionId);
    return Math.round((completed / section.items.length) * 100);
  };

  return (
    <div className="min-h-screen transition-all duration-500">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-pink-400/20 to-red-600/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-green-400/20 to-blue-600/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-yellow-400/20 to-orange-600/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="flex justify-between items-start mb-8">
            <div className="flex-1"></div>
            <div className="flex-shrink-0">
              <ThemeToggle />
            </div>
          </div>
          
          <div className="inline-block p-8 glass-card rounded-3xl shadow-modern mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text">🗽 NYC Trip Checklist</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-6">
              Your ultimate guide to exploring the Big Apple
            </p>
            
            {/* Enhanced Progress Display */}
            <div className="bg-secondary/30 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  <span className="text-2xl font-bold">{getTotalCheckedCount()}</span>
                  <span className="text-muted-foreground">/ {getTotalItemsCount()}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full">
                  <Target className="w-5 h-5" />
                  <span className="font-semibold">{getCompletionPercentage()}%</span>
                </div>
              </div>
              
              {/* Animated Progress Bar */}
              <div className="w-full bg-muted rounded-full h-4 overflow-hidden shadow-inner">
                <div 
                  className="h-full progress-bar rounded-full shadow-sm"
                  style={{ width: `${getCompletionPercentage()}%` }}
                ></div>
              </div>
              
              <div className="flex justify-center mt-6">
                <Button 
                  variant="outline" 
                  onClick={resetAllItems}
                  className="btn-modern shadow-modern border-2 hover:border-primary/50"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset Progress
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Tabs */}
        <Tabs defaultValue="attractions" className="w-full">
          {/* Modern Tab List */}
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mb-8 p-2 glass-card rounded-2xl shadow-modern">
            {CHECKLIST_DATA.map((section) => {
              const completionPercentage = getSectionCompletionPercentage(section.id);
              return (
                <TabsTrigger 
                  key={section.id} 
                  value={section.id}
                  className="relative flex flex-col gap-2 p-4 h-auto min-h-[80px] rounded-xl transition-all duration-300 data-[state=active]:shadow-lg data-[state=active]:scale-105"
                >
                  <div className="flex items-center justify-center mb-1">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${section.color} text-white shadow-lg`}>
                      {section.icon}
                    </div>
                  </div>
                  <span className="text-xs font-medium text-center leading-tight">
                    {section.title.split(' ')[0]}
                  </span>
                  <div className="flex items-center gap-1">
                    <Badge variant="secondary" className="text-xs px-2 py-1">
                      {getCheckedCount(section.id)}/{section.items.length}
                    </Badge>
                    {completionPercentage === 100 && (
                      <CheckCircle2 className="w-4 h-4 text-green-500 animate-bounce-in" />
                    )}
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="absolute bottom-1 left-2 right-2 h-1 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${section.color} transition-all duration-500`}
                      style={{ width: `${completionPercentage}%` }}
                    ></div>
                  </div>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Enhanced Tab Content */}
          {CHECKLIST_DATA.map((section) => (
            <TabsContent key={section.id} value={section.id} className="mt-0 tab-content">
              <Card className="glass-card shadow-modern border-0 rounded-3xl overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${section.color}`}></div>
                
                <CardHeader className="pb-6 pt-8">
                  <CardTitle className="flex flex-col sm:flex-row sm:items-center gap-3 text-2xl lg:text-3xl">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${section.color} text-white shadow-lg animate-pulse-soft`}>
                        {section.icon}
                      </div>
                      <span className="gradient-text">{section.title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-sm border-2">
                        {getCheckedCount(section.id)} / {section.items.length}
                      </Badge>
                      {getSectionCompletionPercentage(section.id) === 100 && (
                        <div className="flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                          <Star className="w-4 h-4 text-green-600 dark:text-green-400" />
                          <span className="text-sm font-medium text-green-600 dark:text-green-400">Complete!</span>
                        </div>
                      )}
                    </div>
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    {section.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pb-8">
                  <div className="grid gap-4">
                    {section.items.map((item, index) => (
                      <div 
                        key={item.id}
                        className="group flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-background/50 to-background/80 hover:from-background/80 hover:to-background/100 transition-all duration-300 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:scale-[1.02]"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="relative">
                          <Checkbox
                            id={item.id}
                            checked={checkedItems[item.id] || false}
                            onCheckedChange={() => handleItemToggle(item.id)}
                            className="w-6 h-6 transition-all duration-300 hover:scale-110"
                          />
                          {checkedItems[item.id] && showConfetti && (
                            <div className="absolute -top-2 -right-2">
                              <Zap className="w-4 h-4 text-yellow-500 animate-bounce-in" />
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-3 flex-grow min-w-0">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${section.color} text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                            {item.icon}
                          </div>
                          <label 
                            htmlFor={item.id}
                            className={`text-base sm:text-lg cursor-pointer transition-all duration-300 flex-grow font-medium ${
                              checkedItems[item.id] 
                                ? 'text-muted-foreground line-through opacity-70' 
                                : 'text-foreground group-hover:text-primary'
                            }`}
                          >
                            {item.text}
                          </label>
                          {checkedItems[item.id] && (
                            <CheckCircle2 className="w-5 h-5 text-green-500 animate-bounce-in" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Completion Celebration */}
        {getCompletionPercentage() === 100 && (
          <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
            <div className="text-6xl animate-bounce-in">
              🎉 🎊 🗽 🎊 🎉
            </div>
          </div>
        )}
      </div>
      
      {/* AI Trip Advisor Section */}
      <AITripAdvisor checkedItems={checkedItems} />
      
      <Footer />
    </div>
  );
} 