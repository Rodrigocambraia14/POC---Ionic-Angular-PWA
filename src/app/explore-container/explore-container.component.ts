import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
  imgUrl: any;
  webviewPath: string;
  base64: string;
  constructor() { }

  ngOnInit() {}

  onFileChoose(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    const pattern = /image-*/;
    const reader = new FileReader();

    if (!file.type.match(pattern)) {
      return;
    }

    reader.onload = () => {
      this.base64 = reader.result.toString();
      this.webviewPath = URL.createObjectURL(file);
    };

    reader.readAsDataURL(file);
  }

}
