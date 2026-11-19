import { test} from '@playwright/test'

test("Google - Sign in Link Test",async ({page})=>{

    await page.goto("http://google.com")
    await page.getByRole('link',{name:'Demo'}).click()
    
   
})

