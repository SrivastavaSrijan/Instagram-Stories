// jest.setup.js
import { loadEnvConfig } from '@next/env';

import '@testing-library/jest-dom';

loadEnvConfig(process.cwd());
