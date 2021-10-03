import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServerRequests } from '../ServerRequests';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']

})
export class ProfilesComponent implements OnInit {
  profiles = [
    {
      "name": "Please wait...",
      "data": 
        {
          "dob": "",
          "gender": "",
          "interested_in": "",
          "desired_matching_similarity": "",
            "desired_connection": "",
            "pet_data": {
              "type": "",
              "essay": "",
              "adjectives": "",
              "fear": "",
              "anger": "",
              "anticipation": "",
              "trust": "",
              "surprise": "",
              "positive": "",
              "negative": "",
              "sadness": "",
              "disgust": "",
              "joy": ""
            },
            "openness": "",
            "conscientiousness": "",
            "extraversion": "",
            "agreeableness": "",
            "neuroticism": ""
      
      }
    }
  ]
  searchterm!: string;
  constructor(private cd: ChangeDetectorRef, private server: ServerRequests) { }

  ngOnInit(): void {
    this.getProfiles();
  }

  
  getProfiles() {
    this.server.getProfiles("Mohit Bhole").subscribe((data: any) => {
      let profilex:any = []
      for (const [key, value] of Object.entries(data)) {
        profilex.push({
          "name": key,
          "data": value
        })
      }
      this.profiles = profilex
      this.cd.detectChanges();
    });
}

  findMatches(){
    this.server.getMatches(this.searchterm).subscribe((data: any) => {
      let profilex:any = []
      console.log(data)
      for(let i=0; i< data.length; i++){
        profilex.push({
          "name": data[i].name,
          "data": data[i]
        })
      }
      this.profiles = profilex
      console.log("Matches found")
      this.cd.detectChanges();
    });
  }

}
