const WebSocket = require('ws');
// Etape 1
const wss = new WebSocket.Server({ port: process.env.WS_PORT });

wss.on('connection', (ws) => {
    console.log('connected');
    // Etape 2
    ws.on('close', function() {
        console.log('disconnected');
    });
    // Etape 3
    ws.onmessage = (messageEvent) => {
        const message = messageEvent.data;
        console.log('message received ', message);
    };
});

wss.on('error', (error) => {
    console.log('error occured ', error);
});