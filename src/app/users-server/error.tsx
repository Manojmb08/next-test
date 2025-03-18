'use client';

import React from 'react';

const ErrorState = ({ error, reset }: { error: Error; reset: () => void }) => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Unable to fetch users</h1>
            <p>{error.message}</p>
            <button
                onClick={reset}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#0070f3',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Try Again
            </button>
        </div>
    );
};

export default ErrorState;