import React from 'react';

export const Spinner: React.FC = () => (
    <div className="text-yellow-400 rounded-lg shadow-md p-4 flex items-center justify-center h-32">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
    </div>
);
