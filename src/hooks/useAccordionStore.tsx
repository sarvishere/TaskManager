import { create } from "zustand";

interface AccordionState {
  openAccordions: string[];
  toggleAccordion: (accordionId: string) => void;
}

const useAccordionStore = create<AccordionState>()((set) => ({
  openAccordions: [],
  toggleAccordion: (accordionId) =>
    set((state) => ({
      openAccordions: state.openAccordions.includes(accordionId)
        ? state.openAccordions.filter((id) => id !== accordionId)
        : [...state.openAccordions, accordionId],
    })),
}));

export { useAccordionStore };
