import { create } from 'zustand';

interface LoginModalStore {
  location: number[];
  setLocation: ([]) => void;
}

const useLocation = create<LoginModalStore>((set) => ({
  location: [51, -0.09],
  setLocation: (center) => set({ location: center }),
}));


export default useLocation;