import {Page, ActionSheet, NavController, NavParams} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/action-sheets/action-sheets.html'
})
export class ActionSheets {
	static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
    this.nav = nav;
  }
	
	showActionsheet(){
		let actionSheet = ActionSheet.create({
    title: 'Action Sheets Test',
    buttons: [
      {
        text: 'Share',
        style: 'share',
        handler: () => {
          console.log('Destructive clicked');
        }
      },{
        text: 'Archive',
        handler: () => {
          console.log('Archive clicked');
        }
      },{
        text: 'Cancel',
        style: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  this.nav.present(actionSheet);
	}
}