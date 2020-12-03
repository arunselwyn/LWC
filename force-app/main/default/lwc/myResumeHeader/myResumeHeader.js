import { LightningElement , api} from 'lwc';

export default class MyResumeHeader extends LightningElement {
    @api socialDetails
    @api userDetails
    @api profileImage

    get emailLink(){
        return `mailto:${this.userDetails.EMAIL}`
    }
}