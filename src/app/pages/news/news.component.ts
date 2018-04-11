import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //Keep all data, use *ngFor directive to render data.
  cardData = [
    {
      title: "Chain Store Age",
      date:"Feb 22, 2016 ",
      headerContent: "Billabong taps NetSuite to power omnichannel strategy",
      image: './assets/images/download.jpg',
      bodyContent: "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
      likes: 132,
    },
    {
      title: "Business Wire",
      date: "Feb 18, 2016 ",
      headerContent: "New Study Shows One Critical Industry Lagging Behind in Software Security",
      image: './assets/images/download.jpg',
      bodyContent: 'Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...',
      likes: 132
    },
    {
      title: "Chain Store Age",
      date: "Feb 13, 2016 ",
      headerContent: "Journelle, Alton Lane streamline process with NetSuite platform",
      image: './assets/images/download.jpg',
      bodyContent: 'Journelle, Alton Lane streamline process with NetSuite platform',
      likes: 140
    }
    ,
    {
      title: "Internet Retailer",
      date: "Feb 14, 2016 ",
      headerContent: "NetSuite rolls out a new e-procurement system for B2B companies",
      image: './assets/images/download.jpg',
      bodyContent: 'Katherine BoccaccioNetSuite Inc. announced that two fashion and apparel retailers — Journelle, a seller of high-end lingerie and loungewear, and Alton Lane, a maker of men’s custom-tailored...',
      likes: 180
    }
    ,
    {
      title: "The Wall Street Journal",
      date: "Feb 13, 2016 ",
      headerContent: "NetSuite to Buy Email Marketing Company for $200 Million",
      image: './assets/images/download.jpg',
      likes: 155,
      bodyContent: "It's been 25 years since Professor Jeffrey Sonnenfeld's landmark book The Hero's Farewell vividly documented the challenges and failures of CEO succession planning at large publicly traded...",
    }
  ];
}
