import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
	constructor(meta: Meta, title: Title) { 
		title.setTitle('Page2');
		meta.addTags([
        	{ name: 'author', content: 'AmorimJJ' },
        	{ name: 'description', content: 'This is a description for page 2.' },
      	]);
	}

  ngOnInit() {
  }

}
