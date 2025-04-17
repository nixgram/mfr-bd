import { Component, HostListener, ViewChild, inject } from '@angular/core';
import { AsyncPipe, CommonModule, NgTemplateOutlet } from '@angular/common';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatExpansionModule, MatExpansionPanel } from "@angular/material/expansion";
import { VideoInfoResponse } from "@interface/video-info.interface";
import { HotToastService } from "@ngneat/hot-toast";
import { AuthService } from "@services/auth.service";
import { YoutubeService } from "@services/youtube.service";
import { YoutubeUtil } from "@utils/youtube.util";
import { youtubeUrlValidator } from "@validators/youtube.validators";
import { Observable } from "rxjs";
import { MatButtonModule } from "@angular/material/button";
import { InputComponent } from "@components/input/input.component";
import { PlayerComponent } from "@components/player/player.component";

@Component({
  selector: 'app-access',
  standalone: true,
  imports: [CommonModule,
    PlayerComponent,
    AsyncPipe,
    FormsModule,
    InputComponent,
    MatButtonModule,
    ReactiveFormsModule,
    MatExpansionModule,
    NgTemplateOutlet
  ],
  templateUrl: './access.component.html',
  styleUrl: './access.component.scss',
})
export class AccessComponent {
  @ViewChild('panel') panel!: MatExpansionPanel;

  youtubeService = inject(YoutubeService);
  youtubeUtil = inject(YoutubeUtil);
  authUser = inject(AuthService).authUser;
  toastService = inject(HotToastService);

  videoInfos$ !: Observable<VideoInfoResponse[]>;
  private formBuilder = inject(FormBuilder);



  publicForm = this.formBuilder.group({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    videoId: new FormControl('', [Validators.required, youtubeUrlValidator()]),
  })
  shouldExpand: unknown;

  ngOnInit(): void {
    try {
      this.videoInfos$ = this.youtubeService.getVideos('videos', 'public')
    } catch (err) {
      this.toastService.error('Failed to fetch videos.')
    }
  }

  async submit() {
    const authUser = this.authUser();
    if (!authUser) {
      this.toastService.error('You must have to login before submit');
      return;
    }
    const validateVideoInfo = await this.youtubeUtil.getValidVideoInfoFromForm(this.publicForm, authUser);
    if (!validateVideoInfo.isValid && validateVideoInfo.error) {
      this.toastService.error(validateVideoInfo.error.toString());
      return;
    }

    if (validateVideoInfo.isValid && validateVideoInfo.data) {
      await this.youtubeService.saveVideo(validateVideoInfo.data, 'videos');
      this.publicForm.reset();
      this.toastService.success('Added to public playlist');
    }
  }

  async ngAfterViewInit() {
    await this.youtubeService.videosRealtimeUpdateInit()
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    // @ts-ignore
    if (!this.panel._body.nativeElement.contains(event.target)) {
      // Close the expansion panel if it's open
      if (this.panel.expanded) {
        this.panel.close();
      }
    }
  }
}
