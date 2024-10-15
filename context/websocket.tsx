'use client'

import { decryptData } from '@/utils/encription';
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

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
    socket: WebSocket | null;
    isConnected: boolean;
};

type SocketContextType = {
    connections: Record<SocketEvents, SocketConnection>;
    messages: Record<SocketEvents, any[]>;
    connect: (event: SocketEvents) => void;
    disconnect: (event: SocketEvents) => void;
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

    const [messages, setMessages] = useState<Record<SocketEvents, any[]>>(() =>
        Object.values(SocketEvents).reduce((acc, event) => ({
            ...acc,
            [event]: []
        }), {} as Record<SocketEvents, any[]>)
    );

    const connect = useCallback((event: SocketEvents) => {
        if (connections[event].isConnected) return;

        const socket = new WebSocket(`ws://localhost:6832/${event}`);

        socket.onopen = () => {
            setConnections(prev => ({
                ...prev,
                [event]: { socket, isConnected: true }
            }));
        };

        socket.onclose = () => {
            setConnections(prev => ({
                ...prev,
                [event]: { ...prev[event], isConnected: false }
            }));
        };

        socket.onmessage = (messageEvent) => {
            console.log(messageEvent.data)
            console.log(decryptData(messageEvent.data))
            const data = JSON.parse(decryptData(messageEvent.data));
            setMessages(prev => ({
                ...prev,
                [event]: [...prev[event], data]
            }));
        };

        setConnections(prev => ({
            ...prev,
            [event]: { socket, isConnected: false }
        }));
    }, [connections]);

    const disconnect = useCallback((event: SocketEvents) => {
        const connection = connections[event];
        if (connection.socket) {
            connection.socket.close();
            setConnections(prev => ({
                ...prev,
                [event]: { socket: null, isConnected: false }
            }));
        }
    }, [connections]);

    const send = useCallback((event: SocketEvents, data: any) => {
        const connection = connections[event];
        if (connection.socket && connection.isConnected) {
            connection.socket.send(JSON.stringify(data));
        } else {
            console.error(`Socket for ${event} is not connected`);
        }
    }, [connections]);

    useEffect(() => {
        return () => {
            Object.values(SocketEvents).forEach(event => {
                const connection = connections[event];
                if (connection.socket) {
                    connection.socket.close();
                }
            });
        };
    }, []);

    return (
        <SocketContext.Provider value={{ connections, messages, connect, disconnect, send }}>
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