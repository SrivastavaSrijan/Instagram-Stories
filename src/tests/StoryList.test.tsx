import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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
      { id: '3', url: 'cat3.jpg' },
      { id: '4', url: 'cat4.jpg' },
    ],
  },
];

describe('StoryList Component', () => {
  it('renders user stories', () => {
    render(<StoryList userStories={mockUserStories} />);
    expect(screen.getByText('john_doe')).toBeInTheDocument();
    expect(screen.getByText('jane_doe')).toBeInTheDocument();
  });

  it('opens story overlay on click', () => {
    render(<StoryList userStories={mockUserStories} />);
    userEvent.click(screen.getByText('john_doe'));
    expect(screen.getByText('Story 1')).toBeInTheDocument();
  });
});
