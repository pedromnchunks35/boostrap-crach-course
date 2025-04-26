import { Routes } from '@angular/router';
import {RowAndColExampleComponent} from "./row-and-col-example/row-and-col-example.component";
import {LinksComponent} from "./links/links.component";
import {TableComponent} from "./table/table.component";
import {StackComponent} from "./stack/stack.component";
import {DisplayComponent} from "./display/display.component";

export const routes: Routes = [
    {
        path: '',
        pathMatch: "full",
        component: LinksComponent
    },
    {
        path: 'row-and-col-example',
        pathMatch: "full",
        component: RowAndColExampleComponent
    },
    {
        path: 'table-example',
        pathMatch: "full",
        component: TableComponent
    },
    {
        path: 'stack-example',
        pathMatch: "full",
        component: StackComponent
    },
    {
        path: 'display-example',
        pathMatch: "full",
        component: DisplayComponent
    }
];
