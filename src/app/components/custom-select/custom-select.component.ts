import { PassengerType } from './../../Enums/passenger-type.enum';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css']
})
export class CustomSelectComponent implements OnInit {
  public adultCount = 1;
  public childCount = 1;
  public babyCount = 1;
  public totalPassengers = this.adultCount +  this.childCount + this.babyCount;
  private maxPassengers = 9;

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

  increaseSelection(passengerType: number) {
    switch (passengerType) {
      case PassengerType.Adult: {
        this.adultCount++;
        break;
      }
      case PassengerType.Child: {
        this.childCount++;
        break;
      }
      case PassengerType.Baby: {
        this.babyCount++;
        break;
      }
    }
    this.updateTotalPassengers();
  }
  decreaseSelection(passengerType: number) {
  }

  updateTotalPassengers() {
    this.totalPassengers = this.adultCount +  this.childCount + this.babyCount;
  }
}
