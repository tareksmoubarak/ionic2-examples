import {Page, Alert, NavController, NavParams} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/action-calls/action-calls.html'
})
export class ActionCalls {
	static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
    this.nav = nav;
  }
	
	doBasicAlert() {
    let alert = Alert.create({
      title: 'New Friend!',
      subTitle: 'Your friend',
      buttons: ['Ok']
    });
    this.nav.present(alert);
  }
	
	doPromptAlert(){
		 let prompt = Alert.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
		this.nav.present(prompt);
	}
	
	doConfirmationAlert(){
		 let confirm = Alert.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
		this.nav.present(confirm);
	}
	
	doRadioAlert(){
    let alert = Alert.create();
    alert.setTitle('Lightsaber color');

    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });
		alert.addInput({
			type: 'radio',
			label: 'Red',
			value: 'red',
			checked: false
		});

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
		this.nav.present(alert);
	}
	
	doCheckboxAlert(){
		let checkbox = Alert.create();
		checkbox.setTitle('Which nicknames are the best?');
		
		checkbox.addInput({
			type: 'checkbox',
			label: 'Tastas',
			value: 'value1',
			checked: true
		});
		
		checkbox.addInput({
			type: 'checkbox',
			label: 'SpaceDreamer',
			value: 'value2',
			checked: false
		});
		
		checkbox.addButton('Cancel');
		checkbox.addButton({
			text: 'Okay',
			handler: data => {
				console.log('Checkbox data:', data);
				this.testCheckboxOpen = false;
				this.testCheckboxResult = data;
			}
		});
		this.nav.present(checkbox);
	}
	
}