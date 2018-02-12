import {Controller} from 'stimulus';
import {MDCTextField} from '@material/textfield';

import './text-field.scss';


export default class extends Controller {
  connect() {
    this.textField_ = new MDCTextField(this.element);
  }

  disconnect() {
    if (this.textField_) {
      this.textField_.destroy();
    }
  }
}