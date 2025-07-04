// NYC Trip Planning AI System
// Inspired by recent research in AI travel planning (MIT-IBM Watson AI Lab, 2025)

export interface Location {
  lat: number;
  lng: number;
  address: string;
  borough: string;
}

export interface OpeningHours {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
}

export interface PlaceDetails {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string;
  location: Location;
  rating: number;
  priceLevel: 1 | 2 | 3 | 4; // 1 = $, 2 = $$, 3 = $$$, 4 = $$$$
  duration: number; // estimated visit time in minutes
  openingHours: OpeningHours[];
  bestTimeToVisit: string[];
  crowdLevel: 'low' | 'medium' | 'high';
  weatherDependent: boolean;
  accessibility: {
    wheelchairAccessible: boolean;
    elevatorAccess: boolean;
    stairsOnly: boolean;
  };
  tags: string[];
  nearbyPlaces: string[]; // IDs of nearby places
  seasonality: string[];
  photoUrl?: string;
  ticketRequired: boolean;
  reservationRequired: boolean;
  kidFriendly: boolean;
  romanticSetting: boolean;
  groupFriendly: boolean;
}

export interface UserPreferences {
  budget: 'low' | 'medium' | 'high';
  interests: string[];
  travelStyle: 'relaxed' | 'packed' | 'balanced';
  groupSize: number;
  groupType: 'solo' | 'couple' | 'family' | 'friends';
  duration: number; // trip duration in days
  mobility: 'high' | 'medium' | 'low';
  weatherPreference: 'indoor' | 'outdoor' | 'mixed';
  timeOfYear: 'spring' | 'summer' | 'fall' | 'winter';
  experienceLevel: 'first-time' | 'returning' | 'local';
}

export interface VisitedPlace {
  placeId: string;
  visitDate: Date;
  rating: number;
  comments: string;
  timeSpent: number; // actual time spent in minutes
  liked: boolean;
  wouldRecommend: boolean;
}

export interface ScheduleItem {
  place: PlaceDetails;
  startTime: Date;
  endTime: Date;
  travelTime: number; // travel time from previous location
  priority: number;
  reason: string; // AI explanation for why this place was chosen
}

export interface DaySchedule {
  date: Date;
  items: ScheduleItem[];
  totalWalkingTime: number;
  totalCost: number;
  theme: string;
}

export interface AIRecommendation {
  place: PlaceDetails;
  score: number;
  reasons: string[];
  bestTime: string;
  groupWith: string[]; // IDs of places to visit together
}

// Comprehensive NYC Places Database
export const NYC_PLACES: PlaceDetails[] = [
  {
    id: 'statue-liberty',
    name: 'Statue of Liberty & Ellis Island',
    category: 'attractions',
    subcategory: 'monument',
    description: 'Iconic symbol of freedom and immigration museum',
    location: {
      lat: 40.6892,
      lng: -74.0445,
      address: 'Liberty Island, New York, NY 10004',
      borough: 'Manhattan'
    },
    rating: 4.5,
    priceLevel: 3,
    duration: 240,
    openingHours: [
      { day: 'Monday', open: '08:30', close: '17:00' },
      { day: 'Tuesday', open: '08:30', close: '17:00' },
      { day: 'Wednesday', open: '08:30', close: '17:00' },
      { day: 'Thursday', open: '08:30', close: '17:00' },
      { day: 'Friday', open: '08:30', close: '17:00' },
      { day: 'Saturday', open: '08:30', close: '17:00' },
      { day: 'Sunday', open: '08:30', close: '17:00' }
    ],
    bestTimeToVisit: ['morning', 'early-afternoon'],
    crowdLevel: 'high',
    weatherDependent: true,
    accessibility: {
      wheelchairAccessible: true,
      elevatorAccess: true,
      stairsOnly: false
    },
    tags: ['historic', 'iconic', 'patriotic', 'island', 'ferry'],
    nearbyPlaces: ['911-memorial', 'battery-park', 'stone-street'],
    seasonality: ['spring', 'summer', 'fall'],
    ticketRequired: true,
    reservationRequired: true,
    kidFriendly: true,
    romanticSetting: true,
    groupFriendly: true
  },
  {
    id: 'empire-state',
    name: 'Empire State Building',
    category: 'attractions',
    subcategory: 'observation',
    description: 'Art Deco skyscraper with breathtaking city views',
    location: {
      lat: 40.7484,
      lng: -73.9857,
      address: '350 5th Ave, New York, NY 10118',
      borough: 'Manhattan'
    },
    rating: 4.4,
    priceLevel: 3,
    duration: 90,
    openingHours: [
      { day: 'Monday', open: '10:00', close: '22:00' },
      { day: 'Tuesday', open: '10:00', close: '22:00' },
      { day: 'Wednesday', open: '10:00', close: '22:00' },
      { day: 'Thursday', open: '10:00', close: '22:00' },
      { day: 'Friday', open: '10:00', close: '22:00' },
      { day: 'Saturday', open: '10:00', close: '22:00' },
      { day: 'Sunday', open: '10:00', close: '22:00' }
    ],
    bestTimeToVisit: ['sunset', 'evening'],
    crowdLevel: 'high',
    weatherDependent: false,
    accessibility: {
      wheelchairAccessible: true,
      elevatorAccess: true,
      stairsOnly: false
    },
    tags: ['observation', 'views', 'art-deco', 'romantic', 'iconic'],
    nearbyPlaces: ['times-square', 'bryant-park', 'koreatown'],
    seasonality: ['spring', 'summer', 'fall', 'winter'],
    ticketRequired: true,
    reservationRequired: false,
    kidFriendly: true,
    romanticSetting: true,
    groupFriendly: true
  },
  {
    id: 'central-park',
    name: 'Central Park',
    category: 'attractions',
    subcategory: 'park',
    description: 'Massive urban park with lakes, meadows, and recreational activities',
    location: {
      lat: 40.7829,
      lng: -73.9654,
      address: 'Central Park, New York, NY',
      borough: 'Manhattan'
    },
    rating: 4.7,
    priceLevel: 1,
    duration: 180,
    openingHours: [
      { day: 'Monday', open: '06:00', close: '01:00' },
      { day: 'Tuesday', open: '06:00', close: '01:00' },
      { day: 'Wednesday', open: '06:00', close: '01:00' },
      { day: 'Thursday', open: '06:00', close: '01:00' },
      { day: 'Friday', open: '06:00', close: '01:00' },
      { day: 'Saturday', open: '06:00', close: '01:00' },
      { day: 'Sunday', open: '06:00', close: '01:00' }
    ],
    bestTimeToVisit: ['morning', 'afternoon', 'evening'],
    crowdLevel: 'medium',
    weatherDependent: true,
    accessibility: {
      wheelchairAccessible: true,
      elevatorAccess: false,
      stairsOnly: false
    },
    tags: ['nature', 'relaxing', 'jogging', 'picnic', 'free'],
    nearbyPlaces: ['met-museum', 'guggenheim', 'american-museum'],
    seasonality: ['spring', 'summer', 'fall'],
    ticketRequired: false,
    reservationRequired: false,
    kidFriendly: true,
    romanticSetting: true,
    groupFriendly: true
  }
];

// AI Trip Planning Engine
export class TripPlannerAI {
  private places: PlaceDetails[];
  private visitedPlaces: VisitedPlace[];
  private userPreferences: UserPreferences;

  constructor(places: PlaceDetails[]) {
    this.places = places;
    this.visitedPlaces = [];
    this.userPreferences = this.getDefaultPreferences();
  }

  private getDefaultPreferences(): UserPreferences {
    return {
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
    };
  }

  // Machine Learning-inspired scoring algorithm
  private calculatePlaceScore(place: PlaceDetails, visited: VisitedPlace[]): number {
    let score = place.rating * 20; // Base score from rating

    // Interest alignment
    const interestMatch = this.userPreferences.interests.filter(interest =>
      place.tags.includes(interest)
    ).length;
    score += interestMatch * 15;

    // Budget compatibility
    const budgetMap = { low: 1, medium: 2, high: 4 };
    const budgetScore = budgetMap[this.userPreferences.budget] >= place.priceLevel ? 10 : -20;
    score += budgetScore;

    // Group compatibility
    if (this.userPreferences.groupType === 'family' && place.kidFriendly) score += 10;
    if (this.userPreferences.groupType === 'couple' && place.romanticSetting) score += 10;
    if (this.userPreferences.groupSize > 4 && place.groupFriendly) score += 10;

    // Experience level
    if (this.userPreferences.experienceLevel === 'first-time' && place.tags.includes('iconic')) {
      score += 20;
    }

    // Weather dependency
    if (place.weatherDependent && this.userPreferences.weatherPreference === 'indoor') {
      score -= 15;
    }

    // Crowd level preference
    if (place.crowdLevel === 'high' && this.userPreferences.travelStyle === 'relaxed') {
      score -= 10;
    }

    // Penalize already visited places
    const alreadyVisited = visited.find(v => v.placeId === place.id);
    if (alreadyVisited) {
      score -= 50;
    }

    return Math.max(0, score);
  }

  // Haversine formula for distance calculation
  private calculateDistance(loc1: Location, loc2: Location): number {
    const R = 6371; // Earth's radius in km
    const dLat = this.deg2rad(loc2.lat - loc1.lat);
    const dLon = this.deg2rad(loc2.lng - loc1.lng);
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(loc1.lat)) * Math.cos(this.deg2rad(loc2.lat)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  }

  private deg2rad(deg: number): number {
    return deg * (Math.PI/180);
  }

  // Generate AI recommendations
  public generateRecommendations(visited: VisitedPlace[], preferences: UserPreferences): AIRecommendation[] {
    this.visitedPlaces = visited;
    this.userPreferences = preferences;

    // Score all places
    const scoredPlaces = this.places.map(place => ({
      place,
      score: this.calculatePlaceScore(place, visited)
    }));

    // Sort by score and take top recommendations
    return scoredPlaces
      .sort((a, b) => b.score - a.score)
      .slice(0, 10)
      .map(item => ({
        place: item.place,
        score: item.score,
        reasons: [`Highly rated (${item.place.rating}/5)`, `Matches your interests`, `${item.place.priceLevel <= 2 ? 'Budget-friendly' : 'Premium experience'}`],
        bestTime: item.place.bestTimeToVisit[0] || 'anytime',
        groupWith: item.place.nearbyPlaces.slice(0, 3)
      }));
  }

  // Analyze visited places
  public analyzeVisitedPlaces(visited: VisitedPlace[]): {
    insights: string[];
    recommendations: string[];
    stats: { totalPlaces: number; averageRating: number; favoriteCategory: string; totalTimeSpent: number; };
  } {
    const insights = [];
    const recommendations = [];
    
    const totalPlaces = visited.length;
    const averageRating = visited.reduce((sum, v) => sum + v.rating, 0) / (totalPlaces || 1);
    const totalTimeSpent = visited.reduce((sum, v) => sum + v.timeSpent, 0);
    
    // Find favorite category
    const categoryCount: { [key: string]: number } = {};
    visited.forEach(v => {
      const place = this.places.find(p => p.id === v.placeId);
      if (place) {
        categoryCount[place.category] = (categoryCount[place.category] || 0) + 1;
      }
    });
    
    const favoriteCategory = Object.entries(categoryCount)
      .sort(([,a], [,b]) => b - a)[0]?.[0] || 'attractions';
    
    // Generate insights
    if (averageRating >= 4.5) {
      insights.push('You have excellent taste in attractions!');
    } else if (averageRating < 3.5) {
      insights.push('Consider visiting more highly-rated places for better experiences.');
    }
    
    const likedPlaces = visited.filter(v => v.liked);
    if (likedPlaces.length > 0) {
      insights.push(`You particularly enjoyed ${likedPlaces.length} out of ${totalPlaces} places.`);
    }
    
    recommendations.push('Based on your preferences, consider visiting Central Park for a relaxing experience.');
    
    return {
      insights,
      recommendations,
      stats: {
        totalPlaces,
        averageRating: parseFloat(averageRating.toFixed(1)),
        favoriteCategory,
        totalTimeSpent
      }
    };
  }
}

// Advanced Graph-based Data Structure for Enhanced Trip Planning
export interface GraphNode {
  id: string;
  place: PlaceDetails;
  connections: GraphEdge[];
  clustering: {
    neighborhood: string;
    walkabilityScore: number;
    touristDensity: number;
    localInsights: string[];
  };
}

export interface GraphEdge {
  targetId: string;
  weight: number;
  transportMode: 'walking' | 'subway' | 'bus' | 'taxi' | 'ferry';
  travelTime: number;
  cost: number;
  accessibility: number;
  scenicValue: number;
}

// Complex Algorithm for Trip Optimization using Graph Theory
export class TripOptimizationEngine {
  private graph: Map<string, GraphNode>;
  
  constructor(places: GraphNode[]) {
    this.graph = new Map();
    places.forEach(place => {
      this.graph.set(place.id, place);
    });
  }

  // Dijkstra's Algorithm for shortest path between places
  findOptimalRoute(startId: string, endId: string): {
    path: string[];
    totalTime: number;
    totalCost: number;
    instructions: string[];
  } {
    const distances = new Map<string, number>();
    const previous = new Map<string, string>();
    const visited = new Set<string>();
    const queue: string[] = [];

    // Initialize distances
    this.graph.forEach((_, id) => {
      distances.set(id, id === startId ? 0 : Infinity);
      queue.push(id);
    });

    while (queue.length > 0) {
      // Find unvisited node with minimum distance
      let current = queue[0];
      for (const node of queue) {
        if (!visited.has(node) && distances.get(node)! < distances.get(current)!) {
          current = node;
        }
      }

      if (current === endId) break;

      visited.add(current);
      queue.splice(queue.indexOf(current), 1);

      const currentNode = this.graph.get(current)!;
      
      // Update distances to neighbors
      currentNode.connections.forEach(edge => {
        if (!visited.has(edge.targetId)) {
          const newDistance = distances.get(current)! + edge.weight;
          if (newDistance < distances.get(edge.targetId)!) {
            distances.set(edge.targetId, newDistance);
            previous.set(edge.targetId, current);
          }
        }
      });
    }

    // Reconstruct path
    const path: string[] = [];
    let current = endId;
    while (current !== startId) {
      path.unshift(current);
      current = previous.get(current)!;
    }
    path.unshift(startId);

    return {
      path,
      totalTime: this.calculateTotalTime(path),
      totalCost: this.calculateTotalCost(path),
      instructions: this.generateInstructions(path)
    };
  }

  // Advanced clustering algorithm for grouping places by neighborhood
  clusterPlacesByNeighborhood(): Map<string, GraphNode[]> {
    const clusters = new Map<string, GraphNode[]>();
    
    this.graph.forEach(node => {
      const neighborhood = node.clustering.neighborhood;
      if (!clusters.has(neighborhood)) {
        clusters.set(neighborhood, []);
      }
      clusters.get(neighborhood)!.push(node);
    });

    return clusters;
  }

  private calculateTotalTime(path: string[]): number {
    let totalTime = 0;
    for (let i = 1; i < path.length; i++) {
      const prevNode = this.graph.get(path[i-1])!;
      const connection = prevNode.connections.find(c => c.targetId === path[i]);
      if (connection) {
        totalTime += connection.travelTime;
      }
    }
    return totalTime;
  }

  private calculateTotalCost(path: string[]): number {
    let totalCost = 0;
    for (let i = 1; i < path.length; i++) {
      const prevNode = this.graph.get(path[i-1])!;
      const connection = prevNode.connections.find(c => c.targetId === path[i]);
      if (connection) {
        totalCost += connection.cost;
      }
    }
    return totalCost;
  }

  private generateInstructions(path: string[]): string[] {
    const instructions: string[] = [];
    for (let i = 1; i < path.length; i++) {
      const prevNode = this.graph.get(path[i-1])!;
      const nextNode = this.graph.get(path[i])!;
      const connection = prevNode.connections.find(c => c.targetId === path[i]);
      
      if (connection) {
        instructions.push(
          `From ${prevNode.place.name} to ${nextNode.place.name}: ` +
          `${connection.transportMode} (${connection.travelTime} min, $${connection.cost})`
        );
      }
    }
    return instructions;
  }
}

// Enhanced NYC Places Database with Graph Connections
export const ENHANCED_NYC_PLACES: GraphNode[] = [
  {
    id: 'statue-liberty',
    place: NYC_PLACES.find(p => p.id === 'statue-liberty')!,
    connections: [
      {
        targetId: 'central-park',
        weight: 0.6,
        transportMode: 'subway',
        travelTime: 45,
        cost: 2.90,
        accessibility: 0.8,
        scenicValue: 0.7
      },
      {
        targetId: 'empire-state',
        weight: 0.7,
        transportMode: 'subway',
        travelTime: 35,
        cost: 2.90,
        accessibility: 0.85,
        scenicValue: 0.8
      }
    ],
    clustering: {
      neighborhood: 'Lower Manhattan',
      walkabilityScore: 0.85,
      touristDensity: 0.95,
      localInsights: [
        'Best visited early morning to avoid crowds',
        'Ferry tickets include Ellis Island access',
        'Crown access requires advance booking'
      ]
    }
  },
  {
    id: 'empire-state',
    place: NYC_PLACES.find(p => p.id === 'empire-state')!,
    connections: [
      {
        targetId: 'central-park',
        weight: 0.8,
        transportMode: 'walking',
        travelTime: 25,
        cost: 0,
        accessibility: 0.9,
        scenicValue: 0.85
      }
    ],
    clustering: {
      neighborhood: 'Midtown Manhattan',
      walkabilityScore: 0.9,
      touristDensity: 0.9,
      localInsights: [
        'Best views at sunset and night',
        'Express elevator to 86th floor'
      ]
    }
  },
  {
    id: 'central-park',
    place: NYC_PLACES.find(p => p.id === 'central-park')!,
    connections: [
      {
        targetId: 'empire-state',
        weight: 0.8,
        transportMode: 'walking',
        travelTime: 25,
        cost: 0,
        accessibility: 0.9,
        scenicValue: 0.85
      }
    ],
    clustering: {
      neighborhood: 'Upper Manhattan',
      walkabilityScore: 0.95,
      touristDensity: 0.7,
      localInsights: [
        'Free entry to most areas',
        'Multiple themed gardens and attractions'
      ]
    }
  }
];

// Export enhanced instances
export const tripOptimizer = new TripOptimizationEngine(ENHANCED_NYC_PLACES);

// Export singleton instance
export const tripPlannerAI = new TripPlannerAI(NYC_PLACES); 