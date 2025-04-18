class login{
    constructor(page){
        this.page=page
        this.usn=page.locator("//input[@name='user_name']")
        this.pwd=page.locator("//input[@name='user_password']")
        this.submitbutton=page.locator("#submitButton")
        this.orglink=page.locator("//a[text()='Organizations']")
        this.createorgbutton=page.locator("//img[@title='Create Organization...']")
        this.neworgname=page.locator("//input[@name='accountname']")
        this.saveBtn=page.locator("(//input[@title='Save [Alt+S]'])[2]")
        this.usericon=page.locator("//img[@src='themes/softed/images/user.PNG']")
        this.signoutlink=page.locator("//a[text()='Sign Out']")
    }
    async urll(){
        await this.page.goto("http://localhost:8888/")
    }
    async login(u,p,org){
        await this.usn.fill(u)
        await this.pwd.fill(p)
        await this.submitbutton.click()
        await this.orglink.click()
        await this.createorgbutton.click()
        await this.neworgname.fill(org)
        await this.saveBtn.click()
        await this.usericon.click()
        await this.signoutlink.click()
    }
}
export default login