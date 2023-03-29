import { create } from "zustand";

interface TransitionState {
  transition: number;
  transitionLabel: string;
  change: (n: number) => void;
  changeLabel: (str: string) => void;
}

const useTransitionStore = create<TransitionState>((set) => ({
  transition: 0,
  transitionLabel: "Olá",
  change: (n: number) => set((state: any) => ({ transition: n })),
  changeLabel: (str: string) => set((state: any) => ({ transitionLabel: str })),
}));

export default useTransitionStore;
