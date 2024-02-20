import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 't';



  //inject transalte service our constructor
  constructor(private translate: TranslateService) {

    //select default language you can change according to your need

  }
  lang = localStorage.getItem('lang');
  /*
      IN COMMENT THE COMMENT IN HTML AND THIS
  selectLanguage(event: any) {
    const lang = localStorage.setItem('lang', event.target.value);
    this.translate.use(event.target.value);
  }

  */

  ngOnInit(): void {
    const lang = localStorage.getItem('lang');
    if (!lang) {
      this.translate.setDefaultLang('en');
    } else {
      this.translate.setDefaultLang(lang);
    }
  }
 // NEW CODE START FROM THIS
  test = true;
  up() {
    this.test = !this.test;
  }

  box1 = {
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kl7GhvZW1_zkEFGgwpR9iAHaE8%26pid%3DApi&f=1&ipt=db85b4ca3ecf02bd95b525e19aaad1ac68dcebe9515b560f9a05d75f87dfcb31&ipo=images",
    lang: "france",
    val: "fr"
  };

  box2 = {
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.e_bbO_MwobphE7AiIzUzyQHaEA%26pid%3DApi&f=1&ipt=78a47fd578257f340440ce8dc9ff2af23e0926ad8ef80d62e293785c75848053&ipo=images",
    lang: "englais",
    val: "en"
  };

  aux: any;

  change(box2: any) {
    if (!this.test) {
      const lang = localStorage.setItem('lang', box2.val);
      this.translate.use(box2.val);
      this.aux = this.box1;
      this.box1 = this.box2;
      this.box2 = this.aux;
      this.test = !this.test;
    }
  }
}
