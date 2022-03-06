import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { GamesService } from '../shared/services/games.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss'],
})
export class AddGameComponent {
  public addGameGroup: FormGroup;

  public image?: {
    name: string;
    base64: SafeUrl;
  };

  constructor(
    private readonly fb: FormBuilder,
    private readonly domSanitizer: DomSanitizer,
    private readonly gamesService: GamesService,
    private readonly router: Router
  ) {
    this.addGameGroup = this.fb.group({
      title: ['', Validators.required],
      platforms: this.fb.array([this.emptyPlatform], Validators.required),
      text: ['', Validators.required],
    });
  }

  public onImageUpload(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    this.image = file
      ? {
          name: file.name,
          base64: this.domSanitizer.bypassSecurityTrustUrl(
            URL.createObjectURL(file)
          ),
        }
      : undefined;
  }

  public get platformsArray(): FormArray {
    return this.addGameGroup.get('platforms') as FormArray;
  }

  public get platformsGroup(): FormGroup[] {
    return this.platformsArray.controls as FormGroup[];
  }

  public addPlatform(): void {
    this.platformsArray.push(this.emptyPlatform);
  }

  public get emptyPlatform(): FormGroup {
    return this.fb.group({
      platform: [''],
      label: [''],
    });
  }

  public deletePlatform(index: number): void {
    this.platformsArray.removeAt(index);
  }

  public onSubmit(): void {
    this.gamesService
      .createGame({
        ...this.addGameGroup.value,
        imageURL: `assets/images/${this.image?.name}`,
      })
      .pipe(
        tap(() => {
          this.router.navigateByUrl('/home');
        })
      )
      .subscribe();
  }
}
