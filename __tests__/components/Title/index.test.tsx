import { screen, render } from '@testing-library/react';
import { Title } from '@components/Title';

describe('Title', () => {
  test('should render the Children', () => {
    render(<Title />);
    expect(screen.getByRole('heading')).toHaveTextContent('HomePage')
  });

});
