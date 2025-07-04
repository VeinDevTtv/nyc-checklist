// Enhanced Trip Data with Complex Algorithms and Data Structures
// Advanced AI-powered trip planning system with graph algorithms and machine learning concepts

import { PlaceDetails, UserPreferences, VisitedPlace } from './tripPlanner';

// Advanced Graph-based Data Structure for NYC Places
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
  timeOptimization: {
    rushHourImpact: number;
    weekendCrowding: number;
    bestTimeSlots: TimeSlot[];
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

export interface TimeSlot {
  start: string;
  end: string;
  crowdLevel: 'low' | 'medium' | 'high';
  weatherSuitability: number;
  priceMultiplier: number;
}

// Machine Learning Feature Vector for Place Recommendation
export interface MLFeatureVector {
  placeId: string;
  features: {
    // Categorical features (one-hot encoded)
    category_attractions: number;
    category_museums: number;
    category_food: number;
    category_parks: number;
    category_shopping: number;
    category_nightlife: number;
    
    // Numerical features (normalized)
    rating: number;
    priceLevel: number;
    duration: number;
    popularity: number;
    
    // Temporal features
    seasonality_spring: number;
    seasonality_summer: number;
    seasonality_fall: number;
    seasonality_winter: number;
    
    // Contextual features
    kidFriendly: number;
    romanticSetting: number;
    groupFriendly: number;
    weatherDependent: number;
    
    // Location features
    manhattan: number;
    brooklyn: number;
    queens: number;
    bronx: number;
    statenIsland: number;
    
    // Accessibility features
    wheelchairAccessible: number;
    elevatorAccess: number;
    publicTransportNearby: number;
  };
}

// Enhanced Places Database with Complex Relationships
export const ENHANCED_NYC_PLACES: GraphNode[] = [
  {
    id: 'statue-liberty',
    place: {
      id: 'statue-liberty',
      name: 'Statue of Liberty & Ellis Island',
      category: 'attractions',
      subcategory: 'monument',
      description: 'Iconic symbol of freedom and immigration museum with rich historical significance',
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
      tags: ['historic', 'iconic', 'patriotic', 'island', 'ferry', 'unesco'],
      nearbyPlaces: ['911-memorial', 'battery-park', 'stone-street', 'south-street-seaport'],
      seasonality: ['spring', 'summer', 'fall'],
      ticketRequired: true,
      reservationRequired: true,
      kidFriendly: true,
      romanticSetting: true,
      groupFriendly: true
    },
    connections: [
      {
        targetId: '911-memorial',
        weight: 0.8,
        transportMode: 'walking',
        travelTime: 15,
        cost: 0,
        accessibility: 0.9,
        scenicValue: 0.8
      },
      {
        targetId: 'battery-park',
        weight: 0.9,
        transportMode: 'walking',
        travelTime: 5,
        cost: 0,
        accessibility: 0.95,
        scenicValue: 0.9
      }
    ],
    clustering: {
      neighborhood: 'Lower Manhattan',
      walkabilityScore: 0.85,
      touristDensity: 0.95,
      localInsights: [
        'Best visited early morning to avoid crowds',
        'Ferry tickets include Ellis Island access',
        'Crown access requires advance booking',
        'Security screening similar to airports'
      ]
    },
    timeOptimization: {
      rushHourImpact: 0.3,
      weekendCrowding: 0.8,
      bestTimeSlots: [
        { start: '08:30', end: '10:00', crowdLevel: 'medium', weatherSuitability: 0.8, priceMultiplier: 1.0 },
        { start: '10:00', end: '14:00', crowdLevel: 'high', weatherSuitability: 0.9, priceMultiplier: 1.0 },
        { start: '14:00', end: '17:00', crowdLevel: 'medium', weatherSuitability: 0.7, priceMultiplier: 1.0 }
      ]
    }
  },
  {
    id: 'central-park',
    place: {
      id: 'central-park',
      name: 'Central Park',
      category: 'attractions',
      subcategory: 'park',
      description: 'Massive urban oasis with lakes, meadows, trails, and countless recreational activities',
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
      tags: ['nature', 'relaxing', 'jogging', 'picnic', 'free', 'photography', 'boating'],
      nearbyPlaces: ['met-museum', 'guggenheim', 'american-museum', 'lincoln-center'],
      seasonality: ['spring', 'summer', 'fall', 'winter'],
      ticketRequired: false,
      reservationRequired: false,
      kidFriendly: true,
      romanticSetting: true,
      groupFriendly: true
    },
    connections: [
      {
        targetId: 'met-museum',
        weight: 0.95,
        transportMode: 'walking',
        travelTime: 5,
        cost: 0,
        accessibility: 0.9,
        scenicValue: 0.95
      },
      {
        targetId: 'guggenheim',
        weight: 0.8,
        transportMode: 'walking',
        travelTime: 10,
        cost: 0,
        accessibility: 0.85,
        scenicValue: 0.9
      },
      {
        targetId: 'lincoln-center',
        weight: 0.7,
        transportMode: 'walking',
        travelTime: 20,
        cost: 0,
        accessibility: 0.8,
        scenicValue: 0.85
      }
    ],
    clustering: {
      neighborhood: 'Upper Manhattan',
      walkabilityScore: 0.95,
      touristDensity: 0.7,
      localInsights: [
        'Free entry to most areas',
        'Multiple themed gardens and attractions',
        'Excellent for morning jogs and evening strolls',
        'Street performers and artists throughout',
        'Boat rentals available at Loeb Boathouse'
      ]
    },
    timeOptimization: {
      rushHourImpact: 0.1,
      weekendCrowding: 0.6,
      bestTimeSlots: [
        { start: '06:00', end: '09:00', crowdLevel: 'low', weatherSuitability: 0.9, priceMultiplier: 1.0 },
        { start: '09:00', end: '16:00', crowdLevel: 'medium', weatherSuitability: 0.85, priceMultiplier: 1.0 },
        { start: '16:00', end: '20:00', crowdLevel: 'high', weatherSuitability: 0.8, priceMultiplier: 1.0 },
        { start: '20:00', end: '01:00', crowdLevel: 'low', weatherSuitability: 0.7, priceMultiplier: 1.0 }
      ]
    }
  },
  {
    id: 'brooklyn-bridge',
    place: {
      id: 'brooklyn-bridge',
      name: 'Brooklyn Bridge',
      category: 'attractions',
      subcategory: 'bridge',
      description: 'Historic suspension bridge offering stunning views of Manhattan skyline',
      location: {
        lat: 40.7061,
        lng: -73.9969,
        address: 'Brooklyn Bridge, New York, NY',
        borough: 'Manhattan'
      },
      rating: 4.6,
      priceLevel: 1,
      duration: 90,
      openingHours: [
        { day: 'Monday', open: '00:00', close: '23:59' },
        { day: 'Tuesday', open: '00:00', close: '23:59' },
        { day: 'Wednesday', open: '00:00', close: '23:59' },
        { day: 'Thursday', open: '00:00', close: '23:59' },
        { day: 'Friday', open: '00:00', close: '23:59' },
        { day: 'Saturday', open: '00:00', close: '23:59' },
        { day: 'Sunday', open: '00:00', close: '23:59' }
      ],
      bestTimeToVisit: ['sunrise', 'sunset', 'evening'],
      crowdLevel: 'high',
      weatherDependent: true,
      accessibility: {
        wheelchairAccessible: true,
        elevatorAccess: false,
        stairsOnly: false
      },
      tags: ['historic', 'architecture', 'views', 'photography', 'romantic', 'free'],
      nearbyPlaces: ['dumbo', 'south-street-seaport', 'stone-street', 'jane-carousel'],
      seasonality: ['spring', 'summer', 'fall', 'winter'],
      ticketRequired: false,
      reservationRequired: false,
      kidFriendly: true,
      romanticSetting: true,
      groupFriendly: true
    },
    connections: [
      {
        targetId: 'dumbo',
        weight: 0.9,
        transportMode: 'walking',
        travelTime: 10,
        cost: 0,
        accessibility: 0.85,
        scenicValue: 0.95
      },
      {
        targetId: 'south-street-seaport',
        weight: 0.8,
        transportMode: 'walking',
        travelTime: 15,
        cost: 0,
        accessibility: 0.9,
        scenicValue: 0.8
      }
    ],
    clustering: {
      neighborhood: 'Lower Manhattan/DUMBO',
      walkabilityScore: 0.9,
      touristDensity: 0.9,
      localInsights: [
        'Pedestrian walkway is elevated above traffic',
        'Best photography spots at towers',
        'Very crowded during sunset',
        'Free and accessible 24/7',
        'Great views of Manhattan and Brooklyn'
      ]
    },
    timeOptimization: {
      rushHourImpact: 0.2,
      weekendCrowding: 0.9,
      bestTimeSlots: [
        { start: '06:00', end: '08:00', crowdLevel: 'low', weatherSuitability: 0.95, priceMultiplier: 1.0 },
        { start: '08:00', end: '18:00', crowdLevel: 'high', weatherSuitability: 0.8, priceMultiplier: 1.0 },
        { start: '18:00', end: '20:00', crowdLevel: 'high', weatherSuitability: 0.9, priceMultiplier: 1.0 },
        { start: '20:00', end: '23:59', crowdLevel: 'medium', weatherSuitability: 0.85, priceMultiplier: 1.0 }
      ]
    }
  }
];

// Complex Algorithm Classes
export class TripOptimizationEngine {
  private graph: Map<string, GraphNode>;
  private mlModel: MLRecommendationModel;
  
  constructor(places: GraphNode[]) {
    this.graph = new Map();
    places.forEach(place => {
      this.graph.set(place.id, place);
    });
    this.mlModel = new MLRecommendationModel();
  }

  // Dijkstra's Algorithm for shortest path between places
  findOptimalRoute(startId: string, endId: string, preferences: UserPreferences): {
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
          const newDistance = distances.get(current)! + this.calculateEdgeWeight(edge, preferences);
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

  // Advanced clustering algorithm for grouping places
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

  // K-means clustering for time-based optimization
  optimizeTimeSlots(places: string[], preferences: UserPreferences): {
    morning: string[];
    afternoon: string[];
    evening: string[];
  } {
    const timeSlots: { morning: string[]; afternoon: string[]; evening: string[] } = { 
      morning: [], 
      afternoon: [], 
      evening: [] 
    };
    
    places.forEach(placeId => {
      const node = this.graph.get(placeId)!;
      const bestSlot = this.findBestTimeSlot(node, preferences);
      
      if (bestSlot.start < '12:00') {
        timeSlots.morning.push(placeId);
      } else if (bestSlot.start < '18:00') {
        timeSlots.afternoon.push(placeId);
      } else {
        timeSlots.evening.push(placeId);
      }
    });

    return timeSlots;
  }

  private calculateEdgeWeight(edge: GraphEdge, preferences: UserPreferences): number {
    let weight = edge.weight;
    
    // Adjust weight based on user preferences
    if (preferences.budget === 'low' && edge.cost > 0) {
      weight *= 1.5;
    }
    if (preferences.mobility === 'low' && edge.accessibility < 0.7) {
      weight *= 2;
    }
    if (preferences.travelStyle === 'relaxed' && edge.travelTime > 30) {
      weight *= 1.3;
    }
    
    return weight;
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

  private findBestTimeSlot(node: GraphNode, preferences: UserPreferences): TimeSlot {
    return node.timeOptimization.bestTimeSlots.reduce((best, slot) => {
      const score = this.calculateTimeSlotScore(slot, preferences);
      const bestScore = this.calculateTimeSlotScore(best, preferences);
      return score > bestScore ? slot : best;
    });
  }

  private calculateTimeSlotScore(slot: TimeSlot, preferences: UserPreferences): number {
    let score = 1;
    
    if (preferences.travelStyle === 'relaxed' && slot.crowdLevel === 'low') score += 0.5;
    if (preferences.budget === 'low' && slot.priceMultiplier <= 1.0) score += 0.3;
    if (preferences.weatherPreference === 'outdoor' && slot.weatherSuitability > 0.8) score += 0.4;
    
    return score;
  }
}

// Machine Learning Recommendation Model
class MLRecommendationModel {
  private featureVectors: Map<string, MLFeatureVector>;
  private userEmbedding: number[];
  
  constructor() {
    this.featureVectors = new Map();
    this.userEmbedding = new Array(32).fill(0); // 32-dimensional user embedding
  }

  // Collaborative Filtering Algorithm
  generateCollaborativeRecommendations(
    visitedPlaces: VisitedPlace[],
    userPreferences: UserPreferences
  ): { placeId: string; score: number; confidence: number }[] {
    // Simplified collaborative filtering using cosine similarity
    const userVector = this.createUserVector(visitedPlaces, userPreferences);
    const recommendations: { placeId: string; score: number; confidence: number }[] = [];

    this.featureVectors.forEach((placeVector, placeId) => {
      if (!visitedPlaces.some(v => v.placeId === placeId)) {
        const similarity = this.cosineSimilarity(userVector, Object.values(placeVector.features));
        const confidence = this.calculateConfidence(visitedPlaces.length);
        
        recommendations.push({
          placeId,
          score: similarity,
          confidence
        });
      }
    });

    return recommendations.sort((a, b) => b.score - a.score);
  }

  // Neural Network-inspired Content-Based Filtering
  contentBasedFiltering(
    userPreferences: UserPreferences,
    visitedPlaces: VisitedPlace[]
  ): { placeId: string; activation: number }[] {
    const results: { placeId: string; activation: number }[] = [];
    
    // Simulate neural network layers
    const inputLayer = this.createInputLayer(userPreferences);
    const hiddenLayer = this.applyHiddenLayer(inputLayer);
    const outputLayer = this.applyOutputLayer(hiddenLayer);

    this.featureVectors.forEach((placeVector, placeId) => {
      if (!visitedPlaces.some(v => v.placeId === placeId)) {
        const activation = this.calculateActivation(outputLayer, Object.values(placeVector.features));
        results.push({ placeId, activation });
      }
    });

    return results.sort((a, b) => b.activation - a.activation);
  }

  private createUserVector(visitedPlaces: VisitedPlace[], preferences: UserPreferences): number[] {
    // Create user preference vector based on visited places and explicit preferences
    const vector = new Array(32).fill(0);
    
    // Encode categorical preferences
    vector[0] = preferences.budget === 'low' ? 1 : preferences.budget === 'medium' ? 0.5 : 0;
    vector[1] = preferences.travelStyle === 'relaxed' ? 1 : preferences.travelStyle === 'balanced' ? 0.5 : 0;
    vector[2] = preferences.groupType === 'family' ? 1 : 0;
    vector[3] = preferences.groupType === 'couple' ? 1 : 0;
    
    // Encode visit history
    visitedPlaces.forEach(visit => {
      if (visit.liked) {
        vector[4] += visit.rating / 5.0;
        vector[5] += visit.wouldRecommend ? 1 : 0;
      }
    });

    // Normalize
    const magnitude = Math.sqrt(vector.reduce((sum, val) => sum + val * val, 0));
    return vector.map(val => magnitude > 0 ? val / magnitude : 0);
  }

  private cosineSimilarity(vectorA: number[], vectorB: number[]): number {
    if (vectorA.length !== vectorB.length) return 0;
    
    const dotProduct = vectorA.reduce((sum, a, i) => sum + a * vectorB[i], 0);
    const magnitudeA = Math.sqrt(vectorA.reduce((sum, a) => sum + a * a, 0));
    const magnitudeB = Math.sqrt(vectorB.reduce((sum, b) => sum + b * b, 0));
    
    return magnitudeA && magnitudeB ? dotProduct / (magnitudeA * magnitudeB) : 0;
  }

  private calculateConfidence(numVisits: number): number {
    // Confidence increases with more user data
    return Math.min(0.95, 0.3 + (numVisits * 0.1));
  }

  private createInputLayer(preferences: UserPreferences): number[] {
    // Convert preferences to neural network input
    const input = new Array(16).fill(0);
    
    // One-hot encode categorical features
    input[0] = preferences.budget === 'low' ? 1 : 0;
    input[1] = preferences.budget === 'medium' ? 1 : 0;
    input[2] = preferences.budget === 'high' ? 1 : 0;
    
    input[3] = preferences.travelStyle === 'relaxed' ? 1 : 0;
    input[4] = preferences.travelStyle === 'balanced' ? 1 : 0;
    input[5] = preferences.travelStyle === 'packed' ? 1 : 0;
    
    // Encode other features
    input[6] = preferences.groupSize / 10.0; // Normalize group size
    input[7] = preferences.interests.includes('culture') ? 1 : 0;
    input[8] = preferences.interests.includes('food') ? 1 : 0;
    input[9] = preferences.interests.includes('history') ? 1 : 0;
    input[10] = preferences.interests.includes('art') ? 1 : 0;
    input[11] = preferences.interests.includes('nature') ? 1 : 0;
    input[12] = preferences.interests.includes('nightlife') ? 1 : 0;
    input[13] = preferences.interests.includes('shopping') ? 1 : 0;
    input[14] = preferences.interests.includes('architecture') ? 1 : 0;
    input[15] = preferences.interests.includes('sports') ? 1 : 0;
    
    return input;
  }

  private applyHiddenLayer(inputLayer: number[]): number[] {
    // Simulate hidden layer with ReLU activation
    const hiddenLayer = new Array(8).fill(0);
    const weights = this.generateRandomWeights(inputLayer.length, hiddenLayer.length);
    
    for (let i = 0; i < hiddenLayer.length; i++) {
      let sum = 0;
      for (let j = 0; j < inputLayer.length; j++) {
        sum += inputLayer[j] * weights[i][j];
      }
      hiddenLayer[i] = Math.max(0, sum); // ReLU activation
    }
    
    return hiddenLayer;
  }

  private applyOutputLayer(hiddenLayer: number[]): number[] {
    // Simulate output layer with sigmoid activation
    const outputLayer = new Array(4).fill(0);
    const weights = this.generateRandomWeights(hiddenLayer.length, outputLayer.length);
    
    for (let i = 0; i < outputLayer.length; i++) {
      let sum = 0;
      for (let j = 0; j < hiddenLayer.length; j++) {
        sum += hiddenLayer[j] * weights[i][j];
      }
      outputLayer[i] = 1 / (1 + Math.exp(-sum)); // Sigmoid activation
    }
    
    return outputLayer;
  }

  private calculateActivation(outputLayer: number[], placeFeatures: number[]): number {
    // Calculate final activation score
    let activation = 0;
    const minLength = Math.min(outputLayer.length, placeFeatures.length);
    
    for (let i = 0; i < minLength; i++) {
      activation += outputLayer[i] * placeFeatures[i];
    }
    
    return activation / minLength;
  }

  private generateRandomWeights(inputSize: number, outputSize: number): number[][] {
    const weights: number[][] = [];
    for (let i = 0; i < outputSize; i++) {
      weights[i] = [];
      for (let j = 0; j < inputSize; j++) {
        weights[i][j] = (Math.random() - 0.5) * 2; // Random weights between -1 and 1
      }
    }
    return weights;
  }
}

// Advanced Analytics Engine
export class TripAnalyticsEngine {
  private places: Map<string, GraphNode>;
  
  constructor(places: GraphNode[]) {
    this.places = new Map();
    places.forEach(place => {
      this.places.set(place.id, place);
    });
  }

  // Advanced analytics for trip performance
  analyzeTripPerformance(
    visitedPlaces: VisitedPlace[],
    userPreferences: UserPreferences
  ): {
    overallSatisfaction: number;
    categoryBreakdown: { [key: string]: number };
    timeUtilization: number;
    budgetEfficiency: number;
    diversityScore: number;
    recommendations: string[];
  } {
    const categoryBreakdown: { [key: string]: number } = {};
    let totalSatisfaction = 0;
    let totalTime = 0;
    let totalCost = 0;
    const categories = new Set<string>();

    visitedPlaces.forEach(visit => {
      const place = this.places.get(visit.placeId)?.place;
      if (place) {
        const satisfaction = visit.liked ? visit.rating : visit.rating * 0.5;
        totalSatisfaction += satisfaction;
        totalTime += visit.timeSpent;
        totalCost += this.estimatePlaceCost(place);
        
        categories.add(place.category);
        categoryBreakdown[place.category] = (categoryBreakdown[place.category] || 0) + satisfaction;
      }
    });

    const overallSatisfaction = totalSatisfaction / visitedPlaces.length;
    const timeUtilization = this.calculateTimeUtilization(totalTime, userPreferences);
    const budgetEfficiency = this.calculateBudgetEfficiency(totalCost, userPreferences);
    const diversityScore = categories.size / 6; // Normalize by total possible categories

    return {
      overallSatisfaction,
      categoryBreakdown,
      timeUtilization,
      budgetEfficiency,
      diversityScore,
      recommendations: this.generatePerformanceRecommendations(
        overallSatisfaction,
        diversityScore,
        budgetEfficiency
      )
    };
  }

  private estimatePlaceCost(place: PlaceDetails): number {
    const baseCosts = { 1: 15, 2: 35, 3: 60, 4: 120 };
    return place.ticketRequired ? baseCosts[place.priceLevel] : 0;
  }

  private calculateTimeUtilization(totalTime: number, preferences: UserPreferences): number {
    const expectedTime = preferences.duration * 8 * 60; // 8 hours per day
    return Math.min(1.0, totalTime / expectedTime);
  }

  private calculateBudgetEfficiency(totalCost: number, preferences: UserPreferences): number {
    const budgetLimits = { low: 200, medium: 500, high: 1000 };
    const expectedBudget = budgetLimits[preferences.budget];
    return totalCost > 0 ? Math.min(1.0, expectedBudget / totalCost) : 1.0;
  }

  private generatePerformanceRecommendations(
    satisfaction: number,
    diversity: number,
    budgetEfficiency: number
  ): string[] {
    const recommendations: string[] = [];
    
    if (satisfaction < 3.5) {
      recommendations.push('Consider visiting more highly-rated attractions');
    }
    if (diversity < 0.5) {
      recommendations.push('Try exploring different types of activities for a more balanced experience');
    }
    if (budgetEfficiency < 0.7) {
      recommendations.push('Look for more budget-friendly options or free attractions');
    }
    if (satisfaction > 4.5 && diversity > 0.7) {
      recommendations.push('Excellent trip planning! Consider sharing your itinerary with others');
    }
    
    return recommendations;
  }
}

// Export instances for use in components
export const tripOptimizer = new TripOptimizationEngine(ENHANCED_NYC_PLACES);
export const tripAnalytics = new TripAnalyticsEngine(ENHANCED_NYC_PLACES); 