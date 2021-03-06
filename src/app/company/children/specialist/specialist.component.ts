import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Specialist } from 'src/app/_models/specialist';

@Component({
  selector: 'app-specialist',
  templateUrl: './specialist.component.html',
  styleUrls: ['./specialist.component.scss'],
})
export class SpecialistComponent implements OnInit {
  specialist: Specialist;
  specialistId: number;
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.specialistId = this.activatedRoute.snapshot.params.specialistId;
    this.dataService.getSpecialist(this.specialistId)
      .subscribe(
        (s: Specialist) => {
          this.specialist = s;
        }
      );
  }
}
