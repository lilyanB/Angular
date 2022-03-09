import { NgModule } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { AuthGuard } from "../core/guards/auth.guard";
import { NewPartageComponent } from "./components/new-partage/new-partage.component";
import { PhotoListComponent } from "./components/photo-list/photo-list.component";
import { SinglePhotoComponent } from "./components/single-photo/single-photo.component";

const routes = [
    { path: 'create', component: NewPartageComponent, canActivate: [AuthGuard] },
    { path: ':id', component: SinglePhotoComponent, canActivate: [AuthGuard] },
    { path: '', component: PhotoListComponent, canActivate: [AuthGuard] }
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