import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
	constructor(meta: Meta, title: Title) { 
		title.setTitle('Page1');
		meta.addTags([
        	{ name: 'author', content: 'AmorimJJ' },
        	{ name: 'description', content: 'This is a description for page 1.' },
      	]);
	}

  ngOnInit() {
  }

}
