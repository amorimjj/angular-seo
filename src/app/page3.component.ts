import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
	constructor(meta: Meta, title: Title) { 
		title.setTitle('Page3');
		meta.addTags([
        	{ name: 'author', content: 'AmorimJJ' },
        	{ name: 'description', content: 'This is a description for page 3.' },
      	]);
	}

  ngOnInit() {
  }

}
