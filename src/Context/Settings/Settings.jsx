import React, { useState, useEffect } from 'react';

// Create context
const SettingsContext = React.createContext();

// Provider
export function SettingsProvider({ children }) {
  const [showCompleted, setShowCompleted] = useState(true);
  const [pageItems, setPageItems] = useState(5);

  // Load settings from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('settings'));
    if (saved) {
      setShowCompleted(saved.showCompleted);
      setPageItems(saved.pageItems);
    }
  }, []);

  // Save settings
  const saveSettings = (newValues) => {
    localStorage.setItem('settings', JSON.stringify(newValues));
  };

  return (
    <SettingsContext.Provider
      value={{
        showCompleted,
        pageItems,
        setShowCompleted,
        setPageItems,
        saveSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

// Default export is the context object
export default SettingsContext;
