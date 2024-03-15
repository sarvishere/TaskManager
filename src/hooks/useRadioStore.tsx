import create from "zustand";

interface RadioStore {
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}

const useRadioStore = create<RadioStore>((set) => ({
  selectedValue: "",
  setSelectedValue: (value: string) => set({ selectedValue: value }),
}));

export default useRadioStore;
