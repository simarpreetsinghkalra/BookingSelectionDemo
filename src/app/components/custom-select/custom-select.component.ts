import { PassengerType } from './../../Enums/passenger-type.enum';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css']
})
export class CustomSelectComponent implements OnInit {
  public PassengerType = PassengerType;
  public adultCount = 1;
  public childCount = 0;
  public babyCount = 0;
  public totalPassengers = this.adultCount +  this.childCount + this.babyCount;
  private maxPassengers = 9;
  public canAddAdult = true;
  public canRemoveAdult = false;
  public canAddChild = true;
  public canRemoveChild = true;
  public canAddBaby = true;
  public canRemoveBaby = false;
  public resultString = '';
  constructor() {
    this.updateTotalPassengers();
    this.verifyRules();
    this.generateResultString();
  }
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
    this.verifyRules();
    this.generateResultString();
  }
  decreaseSelection(passengerType: number) {
    switch (passengerType) {
      case PassengerType.Adult: {
        this.adultCount--;
        break;
      }
      case PassengerType.Child: {
        this.childCount--;
        break;
      }
      case PassengerType.Baby: {
        this.babyCount--;
        break;
      }
    }
    this.updateTotalPassengers();
    this.verifyRules();
    this.generateResultString();
  }
  updateTotalPassengers() {
    this.totalPassengers = this.adultCount +  this.childCount + this.babyCount;
  }
  verifyRules() {
    this.canAddAdult = this.totalPassengers < this.maxPassengers;
    this.canAddChild = this.totalPassengers < this.maxPassengers
                      && this.childCount < (4 * (this.adultCount - this.babyCount) + this.babyCount);
    this.canAddBaby = this.totalPassengers < this.maxPassengers
                      && this.babyCount < Math.floor((4 * this.adultCount - this.childCount) / 3);
    this.canRemoveAdult = this.adultCount > 1;
    this.canRemoveChild = this.childCount > 0;
    this.canRemoveBaby = this.babyCount > 0;
  }
  generateResultString() {
    this.resultString = '';
    this.resultString += this.adultCount + ' Adult' + (this.adultCount > 1 ? 's' : '');
    this.resultString += (this.childCount > 0) ? (', ' + this.childCount + ' Child' + (this.childCount > 1 ? 'ren' : '')) : '';
    this.resultString += (this.babyCount > 0) ? (', ' + this.babyCount + (this.babyCount > 1 ? ' Babies' : 'Baby')) : '';
  }
}
