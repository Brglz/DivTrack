import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { DividendComponent} from '../../dividend/dividend.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TradeHistoryComponent} from '../../trade-history/trade-history.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PercentPipe } from 'app/pipes/percent.pipe';
import { DatePipe } from 'app/pipes/date.pipe';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PieChartComponent } from 'app/pie-chart/pie-chart.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
    // MatIconModule,
    MatSortModule,
    MatTableModule,
    // MatToolbarModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    NgApexchartsModule
  ],
  declarations: [
    DashboardComponent,
    DividendComponent,
    TableListComponent,
    TradeHistoryComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    PercentPipe,
    DatePipe,
    PieChartComponent
  ]
})

export class AdminLayoutModule {}
