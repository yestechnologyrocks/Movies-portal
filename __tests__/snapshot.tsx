import { render } from '@testing-library/react'

import Page from '@/app/components/Page'

it('renders homepage unchanged', () => {
  const { container } = render(<Page />)
  expect(container).toMatchSnapshot()
})