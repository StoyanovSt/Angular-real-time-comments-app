import { Component, OnDestroy, OnInit } from '@angular/core';

import { SignalRService } from '../../shared/services/signal-r.service';

@Component({
    selector: 'app-discussion',
    templateUrl: './discussion.component.html',
    styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit, OnDestroy {
    constructor(private signalRService: SignalRService) { }

    ngOnInit(): void {
        this.signalRService.startConnection()
            .then(() => {
                //adds listener
                this.signalRService.connection.on('ReceiveComment', (...args: any[]): void => {
                });
            })
            .catch(err => {
                console.error(err);
            })
    }

    ngOnDestroy(): void {
        //removes listener
        this.signalRService.connection.off('ReceiveComment', (): void => {
            console.log('Connection is dropped.');
        });
    }
}