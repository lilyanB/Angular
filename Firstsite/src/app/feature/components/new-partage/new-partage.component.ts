import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { Partage } from '../../../core/models/partage.models';
import { partagePhotoService } from '../../../core/services/partage-photo.services';

@Component({
  selector: 'app-new-partage',
  templateUrl: './new-partage.component.html',
  styleUrls: ['./new-partage.component.scss']
})
export class NewPartageComponent implements OnInit {

  photoForm!: FormGroup
  photoPreview$!: Observable<Partage>;
  urlRegex!: RegExp;

  constructor(private formBuilder: FormBuilder,
              private partagePhotoService: partagePhotoService,
              private router: Router) { }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.photoForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      imageURL: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location: [null]
    }, {
      updateOn: 'blur'
    });
    this.photoPreview$ = this.photoForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        date: new Date(),
        id: 0,
        like: 0
      }))
    )
  }

  onSubmitForm()/*:  void */ {
    /* console.log(this.photoForm.value); 
    this.partagePhotoService.addphoto(this.photoForm.value);
    this.router.navigateByUrl('/photopartage')*/
    this.partagePhotoService.addphoto(this.photoForm.value).pipe(
      tap(() => this.router.navigateByUrl('photopartage'))
    ).subscribe()
}

}
