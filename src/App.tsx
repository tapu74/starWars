import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FilmList } from './components/FilmList';
import { DetailsView } from './components/DetailsView';
import { Film, ResourceType, SelectedItem } from './types';

const queryClient = new QueryClient();

export const App: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);

    const handleFilmSelect = (film: Film) => {
        setSelectedItem({ type: 'film', data: film });
    };

    const handleResourceSelect = (type: ResourceType, url: string) => {
        setSelectedItem({ type, data: { url } });
    };

    return (
        <QueryClientProvider client={queryClient}>
            <div className="min-h-screen bg-gray-900 text-yellow-400">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-5xl font-bold mb-8 text-center font-starwars">Star Wars</h1>
                    <div className="mb-8">
                        <FilmList onSelectFilm={handleFilmSelect} />
                    </div>
                    {selectedItem && (
                        <DetailsView item={selectedItem} onResourceSelect={handleResourceSelect} />
                    )}
                </div>
            </div>
        </QueryClientProvider>
    );
};
