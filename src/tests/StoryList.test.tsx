import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { StoryList } from '@/components/StoryList';

import '@testing-library/jest-dom'; // for the extra matchers

const mockUserStories = [
  {
    username: 'jett.jenkins',
    profilePicture: 'instagram-stories/assets/zfsjehuddu1ccvk7mm3c',
    stories: [
      {
        id: '6d2d2ae5-8094-4340-9745-c5c185bec0ed',
        url: 'instagram-stories/assets/kkyjsmapm8cbtxbbmwdl',
      },
      {
        id: 'c2e871c5-2131-46af-9bb3-20e8ff0be0cd',
        url: 'instagram-stories/assets/aq1bdbldv1qqc1ibjegu',
      },
    ],
    posts: [
      {
        id: 'c7447bc2-c20f-4b59-ae34-e73cb6d3353a',
        url: 'instagram-stories/assets/opmydltxnt59hwheoqrl',
        caption: 'Appono currus maxime sursum articulus defaeco voluptatum.',
      },
      {
        id: '1555d675-b249-41e9-ac1e-3d06762a4d2b',
        url: 'instagram-stories/assets/wgqfnsw7skarxcw7vywc',
        caption: 'Spiritus autus iste culpa corpus defungo adipisci nemo.',
      },
      {
        id: '0b773705-cf81-4bb6-848c-979c824f943a',
        url: 'instagram-stories/assets/ed9xm3ncxa48uldyssbs',
        caption: 'Arguo voco demens abeo depopulo.',
      },
      {
        id: '367624d5-1793-43c5-8443-02b148d357e4',
        url: 'instagram-stories/assets/v4oa17hwjw9pnwdhtqas',
        caption: 'Possimus aliqua sonitus verto certe cultura vesper vox recusandae.',
      },
      {
        id: 'c8b9d7d7-1b05-4551-a863-efb8725dae7d',
        url: 'instagram-stories/assets/mnugviu29bhyu1cje4kb',
        caption: 'Creator solum speculum cui vestigium.',
      },
      {
        id: '2f1d778c-6917-4d58-8672-2ec186f2492c',
        url: 'instagram-stories/assets/s5tnmjtdaginziqqb2xw',
        caption: 'Cibus assumenda illum voluptates adinventitias texo nisi stips vestrum.',
      },
      {
        id: '70e23f15-f881-4170-a1b7-db1c41d03e3d',
        url: 'instagram-stories/assets/alfcc97hd6uwxfmai3si',
        caption: 'Cerno ambulo commemoro.',
      },
    ],
  },
  {
    username: 'otis53',
    profilePicture: 'instagram-stories/assets/i9sk3zqiai9yassvvejg',
    stories: [
      {
        id: 'e4e51cb1-c6a7-4d40-acb5-a2e2285c9680',
        url: 'instagram-stories/assets/tsc2jxjwiu99lkzcafhq',
      },
      {
        id: '899ff1ba-23ab-4ea3-afb9-54d13c06a37b',
        url: 'instagram-stories/assets/nwibxie9oaaka8r0dwlo',
      },
      {
        id: 'c230c55c-3d8c-4e38-8228-13ec254c498e',
        url: 'instagram-stories/assets/jijcnc8be22vhwidymwf',
      },
      {
        id: '65ab9d96-bd78-4ce1-b556-5cad19077d35',
        url: 'instagram-stories/assets/ldgckkuttrwuf2mu1f9v',
      },
      {
        id: 'a643352f-af89-4585-9c0e-8808b474c21d',
        url: 'instagram-stories/assets/yt9slsihvs5oydrao2gd',
      },
    ],
    posts: [
      {
        id: '367624d5-1793-43c5-8443-02b148d357e4',
        url: 'instagram-stories/assets/v4oa17hwjw9pnwdhtqas',
        caption: 'Claustrum verus timor subseco concedo crinis decens.',
      },
      {
        id: 'c8b9d7d7-1b05-4551-a863-efb8725dae7d',
        url: 'instagram-stories/assets/mnugviu29bhyu1cje4kb',
        caption: 'Ait earum contabesco vorax aequitas asporto defero.',
      },
      {
        id: '2f1d778c-6917-4d58-8672-2ec186f2492c',
        url: 'instagram-stories/assets/s5tnmjtdaginziqqb2xw',
        caption: 'Vulnero absum calculus approbo.',
      },
    ],
  },
  {
    username: 'quentin_kunze65',
    profilePicture: 'instagram-stories/assets/npuz3pzg0s4wqzsg9tlf',
    stories: [
      {
        id: '899ff1ba-23ab-4ea3-afb9-54d13c06a37b',
        url: 'instagram-stories/assets/nwibxie9oaaka8r0dwlo',
      },
      {
        id: 'c230c55c-3d8c-4e38-8228-13ec254c498e',
        url: 'instagram-stories/assets/jijcnc8be22vhwidymwf',
      },
      {
        id: '65ab9d96-bd78-4ce1-b556-5cad19077d35',
        url: 'instagram-stories/assets/ldgckkuttrwuf2mu1f9v',
      },
    ],
    posts: [
      {
        id: 'ecabfb24-5644-4d44-b24d-9a6765125234',
        url: 'instagram-stories/assets/unp1mq3eythwpo9leof3',
        caption: 'Virga autus ustilo taedium.',
      },
      {
        id: '6aaa2a0b-95a2-47de-aaff-117cc0437bcc',
        url: 'instagram-stories/assets/nkfcln5yxvivvki4fse0',
        caption: 'Caritas argentum dolorum velum currus arcus terror tenax careo.',
      },
      {
        id: 'a0cc0710-078f-4808-a067-9670a28fd676',
        url: 'instagram-stories/assets/oxihfoisprgsdkorohrp',
        caption: 'Pax minus debilito aggredior audeo usitas.',
      },
      {
        id: '2d9f01a6-b205-4f90-abf0-b1e32d3ac730',
        url: 'instagram-stories/assets/gtygul68qwvjv8lzfebw',
        caption: 'Turbo adeptio abbas desidero peccatus odio cinis.',
      },
      {
        id: '99bdf778-d5f8-4098-8a9a-9012d6d28862',
        url: 'instagram-stories/assets/wzjreemtmtb0i9mrnp2f',
        caption: 'Clibanus vulgivagus adeptio thalassinus crebro minus cicuta vitium amor.',
      },
      {
        id: '87011351-d323-4628-a35f-bd4edec0cad4',
        url: 'instagram-stories/assets/hu01okotjvdy41uo3uq2',
        caption: 'Defetiscor sol alter ambulo debeo totam iure via.',
      },
      {
        id: '7687e9de-fcd6-498a-a154-499e7dc355d8',
        url: 'instagram-stories/assets/w7g1bclfb6wlsjoliomd',
        caption: 'Illum termes enim autem.',
      },
      {
        id: 'd42499e3-9e01-4867-8bdf-9011d9a377ec',
        url: 'instagram-stories/assets/psqiom69q5o6kufjyvcg',
        caption: 'Soleo tenax callide.',
      },
      {
        id: '635d7b01-b24c-4022-822c-952b1b098bc3',
        url: 'instagram-stories/assets/m5qokmxmalj4iwzf43rb',
        caption: 'Nam patruus consuasor vetus.',
      },
    ],
  },
];

describe('StoryList Component', () => {
  beforeEach(() => {
    // Mock getBoundingClientRect to return fixed values
    Element.prototype.getBoundingClientRect = jest.fn(() => ({
      width: 375,
      height: 750,
      top: 0,
      left: 0,
      bottom: 0,
      right: 375,
      x: 0,
      y: 0,
      toJSON: () => '',
    }));
  });

  it('renders user stories', () => {
    render(<StoryList userStories={mockUserStories} />);
    const text = screen.getByText('jett.jenkins');
    expect(text).toBeInTheDocument();
  });

  it('opens story overlay on click', async () => {
    render(<StoryList userStories={mockUserStories} />);
    const button = screen.getByTestId('jett.jenkins');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    await waitFor(() => expect(screen.getByTestId('overlay-wrapper_0_0')).toBeInTheDocument());
  });

  it('renders correct number of user stories', () => {
    render(<StoryList userStories={mockUserStories} />);
    const userStoryButtons = screen.getAllByRole('button');
    expect(userStoryButtons.length).toBe(mockUserStories.length);
  });

  it('navigates to the next/previous story on click', async () => {
    render(<StoryList userStories={mockUserStories} />);
    // console.log(screen.)
    const button = screen.getByTestId('jett.jenkins');
    fireEvent.click(button);
    await waitFor(() => expect(screen.getByTestId('overlay-inner_0_0')).toBeInTheDocument());

    const overlay = screen.getByTestId('overlay-inner_0_0');
    fireEvent.click(overlay, { clientX: overlay.getBoundingClientRect().right - 5 });
    await waitFor(() => expect(screen.getByTestId('overlay-inner_0_1')).toBeInTheDocument());
    fireEvent.click(screen.getByTestId('overlay-inner_0_1'), {
      clientX: overlay.getBoundingClientRect().left - 5,
    });
    await waitFor(() => expect(screen.getByTestId('overlay-inner_0_0')).toBeInTheDocument());
  });

  it('navigates to the next user on next story click when on the last story', async () => {
    render(<StoryList userStories={mockUserStories} />);
    const button = screen.getByTestId('jett.jenkins');
    fireEvent.click(button);
    await waitFor(() => expect(screen.getByTestId('overlay-inner_0_0')).toBeInTheDocument());
    const overlay = screen.getByTestId('overlay-inner_0_0');
    fireEvent.click(overlay, { clientX: overlay.getBoundingClientRect().right - 5 });
    await waitFor(() => expect(screen.getByTestId('overlay-inner_0_1')).toBeInTheDocument());

    fireEvent.click(screen.getByTestId('overlay-inner_0_1'), {
      clientX: overlay.getBoundingClientRect().right - 5,
    });
    await waitFor(() => expect(screen.getByTestId('overlay-inner_1_0')).toBeInTheDocument());
  });

  it('closes the story overlay on close button click', async () => {
    render(<StoryList userStories={mockUserStories} />);
    const button = screen.getByTestId('jett.jenkins');
    fireEvent.click(button);
    await waitFor(() => expect(screen.getByTestId('overlay-wrapper_0_0')).toBeInTheDocument());

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    await waitFor(() =>
      expect(screen.queryByTestId('overlay-wrapper_0_0')).not.toBeInTheDocument(),
    );
  });
});
