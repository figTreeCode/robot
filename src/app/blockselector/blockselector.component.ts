import { Component, OnInit } from '@angular/core';
import { BlockSelectorService } from '../block-selector.service';

@Component({
  selector: 'blockselector',
  templateUrl: './blockselector.component.html',
  styleUrls: ['./blockselector.component.css']
})
export class BlockselectorComponent implements OnInit {

constructor(private blockSelectorService: BlockSelectorService) { }
  
  ngOnInit(): void {
  }

  getBlockSelected(color: string) {
    this.blockSelectorService.getBlockSelected(color).subscribe((results => 
      { 
        console.log(results)
      }));

  }
}
