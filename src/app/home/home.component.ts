import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HomeComponent implements OnInit {

  selectedPet = '';
  selectedSimilarity = 'neutral';
  singleSelectGroupValue = [];
  selectedGender = '';
  selectedRelationship = '';
  selectedMatch = '';
  boolSubmit = false;

  constructor(private cd: ChangeDetectorRef) { }

  updateSingleSelectGroupValue(value: any): void {
    this.singleSelectGroupValue = value;
    this.cd.markForCheck();
  }



  ngOnInit(): void {
  }

}