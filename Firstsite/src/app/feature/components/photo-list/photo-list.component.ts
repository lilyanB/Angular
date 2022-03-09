import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject, take, takeUntil, tap } from 'rxjs';
import { Partage } from 'src/app/core/models/partage.models';
import { partagePhotoService } from 'src/app/core/services/partage-photo.services';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  //myphoto!: Partage[];
  myphoto$!: Observable<Partage[]>;
  private destroy$!: Subject<boolean>

  constructor(private partagephotoservice : partagePhotoService) { }

  ngOnInit(): void {

    this.destroy$ = new Subject<boolean>();
    //this.myphoto = this.partagephotoservice.getAllPhoto();
    this.myphoto$ = this.partagephotoservice.getAllPhoto();

    /* interval(1000).pipe(
      take(2),
      tap(console.log)
    ).subscribe();  */

    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(console.log)
    ).subscribe(); 

  }


  ngOnDestroy(): void {
      this.destroy$.next(true)
  }

}
