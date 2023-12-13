import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { toHaveTextContent } from '@testing-library/jest-dom';

expect.extend({ toHaveTextContent });