"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  MapPin, 
  Clock, 
  DollarSign, 
  Star, 
  TrendingUp,
  Lightbulb,
  Route,
  Target
} from 'lucide-react';
import { 
  tripPlannerAI, 
  UserPreferences, 
  VisitedPlace, 
  AIRecommendation
} from '@/lib/tripPlanner';

interface AITripAdvisorProps {
  checkedItems: Record<string, boolean>;
}

export default function AITripAdvisor({ checkedItems }: AITripAdvisorProps) {
  const [preferences, setPreferences] = useState<UserPreferences>({
    budget: 'medium',
    interests: ['culture', 'food', 'history'],
    travelStyle: 'balanced',
    groupSize: 2,
    groupType: 'couple',
    duration: 3,
    mobility: 'high',
    weatherPreference: 'mixed',
    timeOfYear: 'spring',
    experienceLevel: 'first-time'
  });

  const [recommendations, setRecommendations] = useState<AIRecommendation[]>([]);
  const [visitedPlaces, setVisitedPlaces] = useState<VisitedPlace[]>([]);
  const [analysis, setAnalysis] = useState<{
    insights: string[];
    recommendations: string[];
    stats: {
      totalPlaces: number;
      averageRating: number;
      favoriteCategory: string;
      totalTimeSpent: number;
    };
  } | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  // Convert checked items to visited places
  useEffect(() => {
    const checkedPlaceIds = Object.entries(checkedItems)
      .filter(([, checked]) => checked)
      .map(([id]) => id);

    const mockVisitedPlaces: VisitedPlace[] = checkedPlaceIds.map(id => ({
      placeId: id,
      visitDate: new Date(),
      rating: Math.random() * 2 + 3,
      comments: 'Great experience!',
      timeSpent: Math.floor(Math.random() * 120) + 60,
      liked: Math.random() > 0.3,
      wouldRecommend: Math.random() > 0.2
    }));

    setVisitedPlaces(mockVisitedPlaces);
  }, [checkedItems]);

  const generateRecommendations = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const recs = tripPlannerAI.generateRecommendations(visitedPlaces, preferences);
    const analysisResult = tripPlannerAI.analyzeVisitedPlaces(visitedPlaces);
    
    setRecommendations(recs);
    setAnalysis(analysisResult);
    setIsLoading(false);
  };

  const updatePreference = (key: keyof UserPreferences, value: string | string[]) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const PriceIndicator = ({ level }: { level: 1 | 2 | 3 | 4 }) => {
    const dollarSigns = [];
    for (let i = 0; i < 4; i++) {
      dollarSigns.push(
        <DollarSign 
          key={i} 
          className={`w-3 h-3 ${i < level ? 'text-green-500' : 'text-gray-300'}`}
        />
      );
    }
    return <div className="flex">{dollarSigns}</div>;
  };

  const RatingStars = ({ rating }: { rating: number }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        />
      );
    }
    return <div className="flex">{stars}</div>;
  };

  return (
    <div className="space-y-6 p-6 max-w-6xl mx-auto">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Brain className="w-8 h-8 text-blue-500" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Trip Advisor
          </h1>
        </div>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Powered by advanced algorithms and machine learning, get personalized recommendations 
          based on your preferences and visited places.
        </p>
      </div>

      <Tabs defaultValue="recommendations" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="recommendations">AI Recommendations</TabsTrigger>
          <TabsTrigger value="preferences">Your Preferences</TabsTrigger>
          <TabsTrigger value="insights">Travel Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="recommendations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Personalized Recommendations
              </CardTitle>
              <CardDescription>
                AI-powered suggestions based on your preferences and travel history
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={generateRecommendations}
                disabled={isLoading}
                className="mb-4"
              >
                {isLoading ? 'Analyzing...' : 'Get AI Recommendations'}
              </Button>

              {recommendations.length > 0 && (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {recommendations.slice(0, 6).map((rec) => (
                    <Card key={rec.place.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-sm">{rec.place.name}</h3>
                          <Badge variant="secondary" className="text-xs">
                            Score: {rec.score.toFixed(0)}
                          </Badge>
                        </div>
                        
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-3 h-3 text-gray-500" />
                            <span className="text-gray-600">{rec.place.location.borough}</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <RatingStars rating={rec.place.rating} />
                            <span className="text-gray-600">({rec.place.rating}/5)</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Clock className="w-3 h-3 text-gray-500" />
                            <span className="text-gray-600">{rec.place.duration} min</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <PriceIndicator level={rec.place.priceLevel} />
                          </div>
                        </div>

                        <div className="mt-3">
                          <p className="text-xs text-gray-500 mb-2">Why recommended:</p>
                          <div className="flex flex-wrap gap-1">
                            {rec.reasons.slice(0, 2).map((reason, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {reason}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mt-3 pt-2 border-t">
                          <p className="text-xs text-blue-600">
                            Best time: {rec.bestTime}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Travel Preferences</CardTitle>
              <CardDescription>
                Customize your preferences to get better recommendations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium mb-2">Budget Level</label>
                  <select 
                    value={preferences.budget}
                    onChange={(e) => updatePreference('budget', e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="low">Budget-friendly ($)</option>
                    <option value="medium">Moderate ($$)</option>
                    <option value="high">Premium ($$$)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Travel Style</label>
                  <select 
                    value={preferences.travelStyle}
                    onChange={(e) => updatePreference('travelStyle', e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="relaxed">Relaxed (2-3 places/day)</option>
                    <option value="balanced">Balanced (3-4 places/day)</option>
                    <option value="packed">Packed (4+ places/day)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Group Type</label>
                  <select 
                    value={preferences.groupType}
                    onChange={(e) => updatePreference('groupType', e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="solo">Solo Travel</option>
                    <option value="couple">Couple</option>
                    <option value="family">Family</option>
                    <option value="friends">Friends</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Experience Level</label>
                  <select 
                    value={preferences.experienceLevel}
                    onChange={(e) => updatePreference('experienceLevel', e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="first-time">First-time visitor</option>
                    <option value="returning">Returning visitor</option>
                    <option value="local">Local/Frequent visitor</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Interests</label>
                <div className="flex flex-wrap gap-2">
                  {['culture', 'food', 'history', 'art', 'nature', 'nightlife', 'shopping', 'architecture', 'sports'].map(interest => (
                    <Badge
                      key={interest}
                      variant={preferences.interests.includes(interest) ? 'default' : 'outline'}
                      className="cursor-pointer"
                      onClick={() => {
                        const newInterests = preferences.interests.includes(interest)
                          ? preferences.interests.filter(i => i !== interest)
                          : [...preferences.interests, interest];
                        updatePreference('interests', newInterests);
                      }}
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Travel Analytics
              </CardTitle>
              <CardDescription>
                AI-powered insights based on your visited places
              </CardDescription>
            </CardHeader>
            <CardContent>
              {analysis ? (
                <div className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-4">
                    <Card className="p-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          {analysis.stats.totalPlaces}
                        </div>
                        <div className="text-sm text-gray-500">Places Visited</div>
                      </div>
                    </Card>
                    <Card className="p-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">
                          {analysis.stats.averageRating}
                        </div>
                        <div className="text-sm text-gray-500">Avg Rating</div>
                      </div>
                    </Card>
                    <Card className="p-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">
                          {Math.floor(analysis.stats.totalTimeSpent / 60)}h
                        </div>
                        <div className="text-sm text-gray-500">Total Time</div>
                      </div>
                    </Card>
                    <Card className="p-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-orange-600 capitalize">
                          {analysis.stats.favoriteCategory}
                        </div>
                        <div className="text-sm text-gray-500">Favorite Type</div>
                      </div>
                    </Card>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4" />
                      AI Insights
                    </h3>
                    <div className="space-y-2">
                      {analysis.insights.map((insight, index) => (
                        <div key={index} className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <p className="text-sm">{insight}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Route className="w-4 h-4" />
                      Personalized Suggestions
                    </h3>
                    <div className="space-y-2">
                      {analysis.recommendations.map((rec, index) => (
                        <div key={index} className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <p className="text-sm">{rec}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">
                    Visit some places first to get personalized insights!
                  </p>
                  <Button onClick={generateRecommendations} disabled={visitedPlaces.length === 0}>
                    {visitedPlaces.length === 0 ? 'Check off some places first' : 'Analyze My Visits'}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 