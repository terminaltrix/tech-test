import { Page } from './page';

class CustomerType extends Page {

    private readonly elements = {
        checklist: '[data-test-id="product-banner-list"]',
        disclaimer_1: '[data-test-id="disclaimer-1"]',
        disclaimer_2: '[data-test-id="disclaimer-2"]',
        getStartedSola: '[data-test-id="get-started-sola"]',
        addOnlineSaverYesBtn: '[data-test-id="onlineSaver_Yes_wrapper"]',
        addOnlineSaverNoBtn: '[data-test-id="onlineSaver_No_wrapper"]',
        promotionalInfo: '[data-test-id="get-started-promotional-info"]',
        everydayAccount_label: '[data-test-id="everydayAccount_label"]',
        btnSolaBtn: '[data-test-id="schema_SOLA_button"]',
        ptAABtn: '[data-test-id="productType_AccessAdvantage_button"]',
        ptPSBtn: '[data-test-id="productType_ProgressSaver_button"]',
        ptOSBtn: '[data-test-id="productType_OnlineSaver_button"]',
        ctEtbBtn: '[data-test-id="customerType_Existingtobank_button"]',
        ctNtbBtn: '[data-test-id="customerType_Newtobank_button"]',
        atSingleBtn: '[data-test-id="appType_Single_button"]',
        atJointBtn: '[data-test-id="appType_Joint_button"]',
        launchBtn: '[data-test-id="launch_button"]',
        doYouBankYesBtn: '[data-test-id="customerType_Yes_button"]',
        doYouBankNoBtn: '[data-test-id="customerType_No_button"]',
        continueBtn: '[data-test-id="next-submit_button"]',
        previousBtn: '[data-test-id="back-submit_button"]',
        conYesBtn: '[data-test-id="healthCarePensioner_Yes_button"]',
        conNoBtn: '[data-test-id="healthCarePensioner_No_button"]',
        everydayAccountYesBtn: '[data-test-id="everydayAccount_Yes_button"]',
        everydayAccountNoBtn: '[data-test-id="everydayAccount_No_button"]',
        heading: '[data-test-id="product-banner-title"]'
    }

    async clickSingleAccount () {
        await $(this.elements.atSingleBtn).click();
    }

    async clickJointAccount () {
        await $(this.elements.atJointBtn).click();

    }

    async existingCustomerYes () {
        await $(this.elements.doYouBankYesBtn).click();
    }

    async existingCustomerNo () {
        await $(this.elements.doYouBankNoBtn).click();

    }

    async concessionCardYes () {
        await $(this.elements.doYouBankYesBtn).click();

    }

    async concessionCardNo () {
        await console.log('no concession');
        await $(this.elements.conNoBtn).click();

    }

    async continue () {
        await $(this.elements.continueBtn).click();
    }

    async previous () {
        await $(this.elements.previousBtn).click();

    }

    async singleNewNonConcession () {
        await this.clickSingleAccount();
        await this.existingCustomerNo();
        await this.concessionCardNo();
    }

    async checkHeading () {
        let text = await $(this.elements.heading).getText();
        return text;
    }

    async open () {
        return await super.open();
    }
}
let customerType = new CustomerType();
export { customerType };