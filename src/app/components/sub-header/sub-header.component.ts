import { Component, OnInit } from '@angular/core';
import { SubHeaderServiceService } from '../../services/sub-header-service.service'
@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {
  title: String = '';
  constructor(private subHeaderService: SubHeaderServiceService) { }

  ngOnInit(): void {
    this.subHeaderService.title.subscribe(title => {
      this.title = title;
    })
  }

}
