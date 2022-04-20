import React from 'react'

import { renderWithTheme } from '../../../utils/test/helpers'

import { mockAvatar } from './mock'

import { AvatarList } from '.'

describe('<AvatarList />', () => {
  it('should render 3 circles', () => {
    const { getAllByTestId } = renderWithTheme(
      <AvatarList imageList={mockAvatar.imageList.slice(0, 3)} />,
    )

    const wrapperAvatar = getAllByTestId('wrapperAvatar')

    expect(wrapperAvatar).toHaveLength(3)
  })

  it('should render circle with number of people', () => {
    const { getAllByTestId, getByTestId } = renderWithTheme(
      <AvatarList imageList={mockAvatar.imageList} />,
    )

    const wrapperAvatar = getAllByTestId('wrapperAvatar')
    const fillCircle = getByTestId('fillCircle')

    expect(wrapperAvatar).toHaveLength(3)
    expect(fillCircle).toBeTruthy()
  })

  it('should match snapshot', () => {
    const { toJSON } = renderWithTheme(
      <AvatarList imageList={mockAvatar.imageList} />,
    )

    expect(toJSON()).toMatchSnapshot()
  })
})
