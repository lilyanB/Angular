import { NgModule } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { NewPartageComponent } from "./components/new-partage/new-partage.component";
import { PhotoListComponent } from "./components/photo-list/photo-list.component";
import { SinglePhotoComponent } from "./components/single-photo/single-photo.component";

const routes = [
    { path: 'create', component: NewPartageComponent },
    { path: ':id', component: SinglePhotoComponent },
    { path: '', component: PhotoListComponent}
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class featureRoutingModule {}