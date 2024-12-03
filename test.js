import React from 'react'
import {render, screen, fireEvent} from "@testing-library/react"
import Home from '@/app/page'

test('user can input a number and see it displayed', () =>{
    render (<Home/>)
})
const numberInput = screen.getPlaceholderText('1,2')

fireEvent.change(numberInput, {target: {value: '40'}})

const submitButton = screen.getByText("Complete")
fireEvent.click(submitButton)

const displayedNumber = screen.getByLabelText('Your number is:')
expect(displayedNumber).toHaveValue('40')


