
# Instagram Stories Clone

## Overview
This project is a clone of the Instagram Stories feature, built using Next.js, TypeScript, and TailwindCSS. The application is designed for mobile use and provides a horizontally scrollable list of user stories fetched from a backend API. Users can view stories, navigate manually, and see smooth transitions between stories.

## Features
- **Mobile-Only**: The feature is optimized for mobile devices.
- **Horizontally Scrollable Stories**: Stories are displayed in a horizontally scrollable view.
- **Backend API**: Story data is served from a backend API.
- **Automatic and Manual Navigation**: Stories advance automatically after a set duration with manual controls for navigation.
- **Animations**: Smooth animations are used for transitions and UI interactions.
- **TypeScript**: The project is fully typed using TypeScript.
- **Testing**: Basic tests are implemented using Jest and Testing Library.
- **CI/CD**: Continuous integration and delivery pipelines are set up to run tests on every push.

## Setup and Running Instructions
### Prerequisites
- Node.js (v18.18.2 or later)
- npm or yarn (v1.22.22)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/instagram-stories.git
   cd instagram-stories
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```env
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=daprs0abn
   ```

### Running the Development Server
  ```bash
  yarn dev
  ```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Explanation of Design Choices
- **Next.js**: Chosen for its server-side rendering capabilities, API routes, and overall performance.
- **TypeScript**: Provides static typing, enhancing code quality and maintainability.
- **TailwindCSS**: Utilized for rapid and efficient styling.
- **Framer Motion**: Used for animations to enhance user experience.
- **React-Timer-Hook**: Simplifies the implementation of timers for story transitions.
- **Jest and Testing Library**: For comprehensive testing of components and interactions.

## Assumptions Made During Implementation
- The app is primarily designed for mobile devices.
- Users will interact with stories similar to Instagram’s UX patterns (taps, swipes).
- JSON data for stories is pre-fetched and paginated on the server side.

## Running Tests
```bash
npm run test
# or
yarn test
```

## CI/CD
- The project is set up with GitHub Actions for CI/CD. Tests are automatically run on every push to the repository.

## Contributing
If you would like to contribute, please open a pull request with a clear description of the changes.

## License
This project is licensed under the MIT License.
