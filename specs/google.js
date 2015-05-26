describe('Selenium Test Case', function() {
  //var ptor = protractor.getInstance();
  it('should find Track24',function(){
    dv.get("https://www.google.ca");

    // browser.driver.get("https://www.google.ca/");
  	// dv.findElement(webdriver.By.name('q')).sendKeys('webdriver');
 
    dv.findElement(by.id("lst-ib")).sendKeys("Track24");
 
 	dv.sleep(3000);

    // dv.wait(function() {
    // 	return dv.isElementPresent(by.id('rso'));
    // }, 8000);

    var text = dv.findElement(by.id("rso")).getText();

    expect(text).toContain("" + "Track24 Defence");
    // expect('coco').toContain("oc");
  });
});
