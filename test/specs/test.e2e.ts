import  { customerType } from "../pageobjects/customerType";

describe('Begin Access Advantage Application', () => {
    beforeEach(async ()=> {
        await customerType.open();
    });

    it('should display the correct heading', async () => {
        let headingText = await customerType.checkHeading();
        expect(headingText).toEqual("ANZ Access Advantage");
    });

    it('should present the click on things', async () => {
        await customerType.singleNewNonConcession();
        await customerType.continue();
    });


});


