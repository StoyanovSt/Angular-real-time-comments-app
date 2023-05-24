import { Component, OnInit } from '@angular/core';

import { SignalRService } from '../../shared/services/signal-r.service';

@Component({
    selector: 'app-discussion',
    templateUrl: './discussion.component.html',
    styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {
    constructor(private signalRService: SignalRService) { }

    ngOnInit(): void {
        this.signalRService.startConnection();
    }
}