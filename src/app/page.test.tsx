import { describe, it, expect, vi } from 'vitest';

vi.mock('next/navigation', () => ({ 
    redirect: vi.fn(), 
}));

import Home from './page';
import { redirect } from 'next/navigation'

describe('Home (server redirect)', () => {
    it('calls redirect to /plants', () => {
        Home();

        expect(redirect).toHaveBeenCalledWith('/plants');
    });
});