import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscussionComponent } from './discussion/discussion.component';

@NgModule({
    declarations: [
        DiscussionComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        DiscussionComponent
    ]
})
export class CoreModule { }
