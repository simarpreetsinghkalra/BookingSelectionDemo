import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css']
})
export class CustomSelectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.outer-box >div').click(function () {
      $('.box-options').hide();
      $(this).addClass('border-selected');
      $(this).children('.box-options').show();
    });
    $('.container').click(function () {
      $('.border-selected').removeClass('border-selected');
      $('.box-options').hide();
    }).children().click(function (e) {
      return false;
    });
  }

}
