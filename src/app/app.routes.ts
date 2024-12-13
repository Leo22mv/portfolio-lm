import { Routes } from '@angular/router';
import { ProjectListComponent } from './components/views/proyects/project-list/project-list.component';
import { NakamaComponent } from './components/views/proyects/nakama/nakama.component';
import { MoeComponent } from './components/views/proyects/moe/moe.component';
import { AboutMeComponent } from './components/views/about-me/about-me.component';

export const routes: Routes = [
    // { path: 'home' },
    // { path: 'about-me', component: AboutMeComponent, children: [
    //     { path: '', }
    // ]},
    { path: 'projects', children: [
        { path: '2', component: MoeComponent },
        { path: '1', component: NakamaComponent },
        { path: 'list', component: ProjectListComponent }
    ] },
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
];
