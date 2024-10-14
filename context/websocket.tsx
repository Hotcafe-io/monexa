'use client'

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import io, { Socket } from 'socket.io-client';

// Define the SocketEvents enum
export enum SocketEvents {
    NewPairs = 'new-pairs',
    TrustedPairs = 'trusted-pairs',
    VerifiedPairs = 'verified-pairs',
    LockedPairs = 'locked-pairs',
    RennouncedPairs = 'rennounced-pairs',
    RuggedPairs = 'rugged-pairs',
    NewContracts = 'new-contracts',
}

type SocketConnection = {
    socket: Socket | null;
    isConnected: boolean;
};

type SocketContextType = {
    connections: Record<SocketEvents, SocketConnection>;
    connect: (event: SocketEvents) => void;
    disconnect: (event: SocketEvents) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    send: (event: SocketEvents, data: any) => void;
};

const SocketContext = createContext<SocketContextType | undefined>(undefined);

export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [connections, setConnections] = useState<Record<SocketEvents, SocketConnection>>(() =>
        Object.values(SocketEvents).reduce((acc, event) => ({
            ...acc,
            [event]: { socket: null, isConnected: false }
        }), {} as Record<SocketEvents, SocketConnection>)
    );

    const connect = useCallback((event: SocketEvents) => {
        if (connections[event].isConnected) return;

        const socket = io(`http://seu-servidor.com/${event}`);

        socket.on('connect', () => {
            setConnections(prev => ({
                ...prev,
                [event]: { socket, isConnected: true }
            }));
        });

        socket.on('disconnect', () => {
            setConnections(prev => ({
                ...prev,
                [event]: { ...prev[event], isConnected: false }
            }));
        });
    }, [connections]);

    const disconnect = useCallback((event: SocketEvents) => {
        const connection = connections[event];
        if (connection.socket) {
            connection.socket.disconnect();
            setConnections(prev => ({
                ...prev,
                [event]: { socket: null, isConnected: false }
            }));
        }
    }, [connections]);

    const send = useCallback((event: SocketEvents, data: unknown) => {
        const connection = connections[event];
        if (connection.socket && connection.isConnected) {
            connection.socket.emit(event, data);
        } else {
            console.error(`Socket for ${event} is not connected`);
        }
    }, [connections]);

    useEffect(() => {
        return () => {
            Object.values(SocketEvents).forEach(event => {
                const connection = connections[event];
                if (connection.socket) {
                    connection.socket.disconnect();
                }
            });
        };
    }, []);

    return (
        <SocketContext.Provider value={{ connections, connect, disconnect, send }}>
            {children}
        </SocketContext.Provider>
    );
};

export const useSocket = () => {
    const context = useContext(SocketContext);
    if (context === undefined) {
        throw new Error('useSocket must be used within a SocketProvider');
    }
    return context;
};