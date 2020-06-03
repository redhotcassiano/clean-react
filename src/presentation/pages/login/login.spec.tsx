import React from 'react'
import Login from './login'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Login Component', () => {
  test('Should start with initial state', () => {
    render(<Login />)
    const errorWrap = screen.getByRole('status')
    expect(errorWrap.childElementCount).toBe(0)
    const submitButton = screen.getByRole('button', { name: /Entrar/i })
    expect(submitButton).toBeDisabled()
  })
})
