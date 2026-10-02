import { test, expect } from '@playwright/test'

test('deve poder cadastrar uma nova tarefa', async ({ page, request }) => {

    // Dado que eu tenho uma nova tarefa
    // E que estou na página de cadastro
    // Quando faço um cadastro dessa forma
    // Então essa tarefa deve ser exibida na lista

    const taskName = 'task1'

    await request.delete(
        'http://localhost:3333/helper/tasks/' + taskName
    )

    await page.goto('http://localhost:8080')

    const inputTaskName = page.locator('input[class*=InputNewTask]')

    await inputTaskName.fill(taskName)

    await page.getByRole('button', { name: 'Create' }).click()

    const target = page.locator('.task-item p', {
        hasText: taskName
    })

    await expect(target).toHaveText(taskName)
})