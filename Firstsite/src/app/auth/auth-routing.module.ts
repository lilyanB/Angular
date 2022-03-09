import { NgModule } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";

const routes = [
    { path : 'auth/login', component: LoginComponent}
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AuthRoutingModule {}