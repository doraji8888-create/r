import React, { useState } from 'react';
import Layout from './components/Layout';
import LorePage from './components/LorePage';
import LocationView from './components/LocationView';
import CharacterDetailView from './components/CharacterDetailView';
import { Location, Character, PlayerStats } from './types';

type ViewState = 'LORE' | 'LOCATION' | 'CHARACTER_DETAIL';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('LORE');
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);
  const [currentCharacter, setCurrentCharacter] = useState<Character | null>(null);
  
  const [stats, setStats] = useState<PlayerStats>({
    ep: 100,
    crystals: 5,
    coins: 200,
    locationId: 'neutral'
  });

  // Navigate to Location View
  const handleSelectLocation = (location: Location) => {
    setCurrentLocation(location);
    setView('LOCATION');
    setStats(prev => ({ ...prev, locationId: location.id }));
  };

  // Navigate to Character Detail directly
  const handleSelectCharacter = (character: Character) => {
    setCurrentCharacter(character);
    setView('CHARACTER_DETAIL');
  };

  // Back to Main Lore Page (Home)
  const handleNavigateHome = () => {
    setCurrentLocation(null);
    setCurrentCharacter(null);
    setView('LORE');
  };

  // Back from Character Detail
  const handleBackFromDetail = () => {
    setCurrentCharacter(null);
    if (currentLocation) {
      setView('LOCATION');
    } else {
      setView('LORE');
    }
  };

  return (
    <Layout 
      stats={stats} 
      currentLocationName={currentLocation ? currentLocation.name : ''} 
      onNavigateHome={handleNavigateHome}
    >
      {view === 'LORE' && (
        <LorePage 
          onNavigateToLocation={handleSelectLocation}
          onNavigateToCharacter={handleSelectCharacter}
        />
      )}

      {view === 'LOCATION' && currentLocation && (
        <LocationView 
          location={currentLocation} 
          onEnterChat={handleSelectCharacter}
          onBack={handleNavigateHome}
        />
      )}

      {view === 'CHARACTER_DETAIL' && currentCharacter && (
        <CharacterDetailView 
          character={currentCharacter}
          onBack={handleBackFromDetail}
        />
      )}
    </Layout>
  );
};

export default App;