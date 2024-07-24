import { fireEvent, screen } from '@testing-library/dom';
import { render } from '@testing-library/react';

import { StoryList } from '@/components/StoryList';

const mockUserStories = [
  {
    username: 'john_doe',
    profilePicture: 'john_doe.jpg',
    stories: [
      { id: '1', url: 'cat1.jpg' },
      { id: '2', url: 'cat2.jpg' },
    ],
  },
  {
    username: 'jane_doe',
    profilePicture: 'jane_doe.jpg',
    stories: [
      { id: '3', url: 'https://picsum.photos/id/200/200/300' },
      { id: '4', url: 'https://picsum.photos/id/201/200/300' },
    ],
  },
];

describe('StoryList Component', () => {
  it('renders user stories', () => {
    render(<StoryList userStories={mockUserStories} />);
    const text = screen.getByText('john_doe');
    expect(text).toBeInTheDocument();
  });

  it('opens story overlay on click', () => {
    render(<StoryList userStories={mockUserStories} />);
    const button = screen.getByTestId('john_doe');
    expect(button).toBeInTheDocument();
    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
    expect(screen.getByTestId('0_0')).toBeInTheDocument();
  });
});
