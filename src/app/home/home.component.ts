import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { ServerRequests } from '../ServerRequests';

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
  name = '';
  dob = '';
  adjectives = '';
  essay = '';
  boolSubmit = false;

  constructor(private cd: ChangeDetectorRef, private server: ServerRequests) {}

  updateSingleSelectGroupValue(value: any): void {
    this.singleSelectGroupValue = value;
    this.cd.markForCheck();
  }

  ngOnInit(): void {}

  submitUser() {
    let namex = this.name;
    let userx = {
      dob: this.dob,
      gender: this.selectedGender,
      interested_in: this.selectedMatch,
      desired_matching_similarity: 'No Preference',
      desired_connection: this.selectedRelationship,
      pet_data: {
        type: this.selectedPet,
        essay: this.essay,
        adjectives: this.adjectives,
        fear: '',
        anger: '',
        anticipation: '',
        trust: '',
        surprise: '',
        positive: '',
        negative: '',
        sadness: '',
        disgust: '',
        joy: '',
      },
      openness: '',
      conscientiousness: '',
      extraversion: '',
      agreeableness: '',
      neuroticism: '',
    };
    console.log(namex);
    console.log(userx);

    this.server.setProfile(namex, userx).subscribe((data: any) => {
      console.log(data)
    });
  }
}
