import { Injectable } from '@angular/core';

import * as SignalR from '@microsoft/signalr';

@Injectable()
export class SignalRService {
    private hubConnection!: SignalR.HubConnection;

    constructor(
    ) { }

    public startConnection(): Promise<void> {
        this.hubConnection = new SignalR.HubConnectionBuilder()
            .withUrl('http://localhost:5000/commentsHub')
            .withAutomaticReconnect()
            .build();

        return this.hubConnection
            .start()
            .then(() => {
                console.log('Hub connection successful!');
            })
            .catch((err) => {
                console.error(err);
            });
    }

    public get connection(): SignalR.HubConnection {
        return this.hubConnection;
    }
}
