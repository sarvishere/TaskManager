import create from "zustand";

interface RadioStore {
  selectedValue: number;
  setSelectedValue: (value: number) => void;
}

const useRadioStore = create<RadioStore>((set) => ({
  selectedValue: 0,
  setSelectedValue: (value: number) => set({ selectedValue: value }),
}));

export default useRadioStore;
