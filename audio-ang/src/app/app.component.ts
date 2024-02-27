import { Component, ElementRef, ViewChild } from '@angular/core';
import { ISound } from './model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  displayedColumns = ['id', 'name', 'fileName'];
  selectedSound: ISound | null = null;


  @ViewChild('audioPlayer') audioPlayer!: ElementRef;

  sounds: ISound[] = [
    { id: 1, name: 'Звук 1', fileName: 'лунная соната', url: 'https://cdn.drivemusic.club/dl/online/Awm4Qmlac9Zuj2Wrpprh_w/1709063025/download_music/2015/06/betkhoven-lunnaja-sonata.mp3' },
    { id: 2, name: 'Звук 2', fileName: 'к элизе', url: 'https://cdn.drivemusic.club/dl/online/0Li9VfW0_psmf7miiIaOMA/1709063025/download_music/2013/02/betkhoven-k-jelize.mp3' },
    { id: 3, name: 'Звук 3', fileName: 'симфония 5', url: 'https://cdn.drivemusic.club/dl/online/0ucRbAsrREJW7y8IROjE3Q/1709063025/download_music/2015/06/betkhoven-simfonija-5-allegro-con-brio.mp3' },
    { id: 4, name: 'Звук 4', fileName: 'симфония 3', url: 'https://cdn.drivemusic.club/dl/online/S8P0jeCWHDC3yTZNw99Nnw/1709063025/download_music/2015/06/betkhoven-simfonija-3.mp3' }
  ];

  playSound(sound: ISound) {
    if (this.audioPlayer) {
      this.audioPlayer.nativeElement.pause();
      this.audioPlayer.nativeElement.load();
    }
    this.selectedSound = sound;
  }
}
