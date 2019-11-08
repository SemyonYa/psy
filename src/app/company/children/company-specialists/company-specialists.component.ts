import { Component, OnInit } from '@angular/core';
import { Specialist } from 'src/app/models/specialist';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-company-specialists',
  templateUrl: './company-specialists.component.html',
  styleUrls: ['./company-specialists.component.scss'],
})
export class CompanySpecialistsComponent implements OnInit {
  specialists: Specialist[];
  companyId: number;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.companyId = this.activatedRoute.snapshot.params.cId;
    this.dataService.getSpecialists(this.companyId)
      .subscribe(
        (data: Specialist[]) => {
          this.specialists = data;
          console.log('specs', this.specialists);
        }
      );
  }

}
