import { Component, OnDestroy, OnInit } from '@angular/core';

import { SignalRService } from '../../shared/services/signal-r.service';

@Component({
    selector: 'app-discussion',
    templateUrl: './discussion.component.html',
    styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit, OnDestroy {
    public comment: string = '';
    public comments: string[] = [];

    constructor(private signalRService: SignalRService) { }

    ngOnInit(): void {
        this.signalRService.startConnection()
            .then(() => {
                //adds listener
                this.signalRService.connection.on('ReceiveComment', (...args: string[]): void => {
                    const [, comment] = [...args];

                    this.comments.push(comment);
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

    public onFocusInTextArea(textAreaRef: any): void {
        (textAreaRef as HTMLElement).classList.add('focused');
    }

    public onFocusOutTextArea(textAreaRef: any): void {
        (textAreaRef as HTMLElement).classList.remove('focused');
    }

    public onLeavingAComment(): void {
        this.signalRService.connection.invoke('SendComment', '', this.comment.trim());
        this.comment = '';
    }

}