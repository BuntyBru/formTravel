import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackService {

  mainData=[
    {
      ques:'How should we calculate your savings?',
      ans:{
        type:'radio',
        label:'savingsCalc',
        options:[
          {item:"total amount of money your govt spends on travel per year",
        id:'x1'},
          {item:"total number of business trips your company takes per year",
            id:'x2'}]
      }
    },
    {
      ques:'What is your total travel spend for a given year?',
      required:true,
      ans:{
        type:'text',
        label:'totalTravel'
      }
    },
    {
      ques:'If your company currently has a travel management solution, what is the average booking fee for flights?',
      required:true,
      ans:{
        type:"text",
        label:'avgBooking'
      }
    },
    {
      ques:'What percentage on your business travel is international?',
      required:false,
      ans:{
        type:"loader",
        label:'businessPerc'
      }
    },
    {
      ques:'Do you have a travel policy?*',
      required:true,
      ans:{
        type:'radio',
        label:'travelPolicy',
        options:[{ item: "true",id:'x3'},{item:'false',id:'x4'}
        ]
    }
  }
  ]
  
  
  constructor() { }


}
