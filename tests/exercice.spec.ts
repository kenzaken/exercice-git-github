import { test, expect } from '@playwright/test'
import { link } from 'node:fs'

//un test sur le site https://agropeyi.fr/

//cliquer sur le boutton inscription
//remplir les champs  
// ensuite cliquer sur le button valide 


test("un test qui ne permet de s'inscrire sur le site https://agropeyi.fr/",{tag:"@regression"}, async ({ page }) => {
    //email random
    let number = Math.floor(Math.random() * 200) + 10
    let email = "kenza" + number + "@gmail.com"
    // password random
    const password = "pass" + number + "012@"

    await page.goto("https://agropeyi.fr/")

    await page.getByRole("link", { name: "Inscription" }).click()
    await expect(page).toHaveURL("https://agropeyi.fr/inscription.php");
    await page.locator("#nom").fill("tafat")
    await page.locator("#prenom").fill("kenza")
    await page.locator("#email").fill(email)
    await page.locator("#telephone").fill("+33765521819")
    await page.locator("#adresse").fill("2 rue place des republic")
    await page.locator("#code_postal").fill("75825")
    await page.locator("#ville").fill("paris")
    await page.selectOption("#pays", "Guadeloupe")
    await page.locator("#mot_de_passe").fill(password)
    await page.locator("#confirmer_mot_de_passe").fill(password)
    await page.getByRole("button", { name: "S'inscrire" }).click()
    await expect(page.locator(".alert.alert-success")).toBeVisible()
})

//git pull