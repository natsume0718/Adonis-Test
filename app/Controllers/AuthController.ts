// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import puppeteer from 'puppeteer-core'

export default class AuthController {
  public async check() {
    const br = await puppeteer.launch({
      // update 2021/08/05
      channel: 'chrome',
      args: ['--no-sandbox', '--disable-dev-shm-usage'],
    })
    const page = await br.newPage()
    const response = await page.goto('https://google.com')
    return {
      response,
    }
  }
}
