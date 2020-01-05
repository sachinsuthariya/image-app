import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryComponent } from './gallery.component';

const routes: Routes = [
    {
        path: '',
        component: GalleryComponent
    }
];

@NgModule({
    declarations: [
        GalleryComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: [],
    bootstrap: []
})
export class GalleryModule { }
