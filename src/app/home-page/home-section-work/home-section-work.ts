import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

export interface WorkItem {
  title: string;
  description: string;
  imageUrl: string;
  tags?: string[];
}

@Component({
  selector: 'app-home-section-work',
  imports: [CommonModule, ButtonModule, RouterLink],
  templateUrl: './home-section-work.html',
  styleUrls: ['./home-section-work.scss'],
})
export class HomeSectionWorkComponent {
  works: WorkItem[] = [
    {
      title: 'Project One',
      description: 'Description of your first project or work experience',
      imageUrl: 'assets/work1.jpg',
      tags: ['Angular', 'TypeScript']
    },
    {
      title: 'Project Two',
      description: 'Description of your second project or work experience',
      imageUrl: 'assets/work2.jpg',
      tags: ['Web Development']
    },
    {
      title: 'Project Three',
      description: 'Description of your third project or work experience',
      imageUrl: 'assets/work3.jpg',
      tags: ['Full Stack']
    }
  ];
}
