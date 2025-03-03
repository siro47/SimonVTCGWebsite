import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

const useStore = create(
    persist(
        (set) => (
            {
              items: [],
              increase: (key) => set(
                  (state) => {
                    const existingItem = state.items.find((item) => item.key === key);
              
                    if (existingItem) {
                      // Update count if key exists
                      return {
                        items: state.items.map((item) =>
                          item.key === key ? { ...item, count: item.count + 1 } : item
                        ),
                      };
                    } else {
                      // Add new key if not found
                      return {
                        items: [...state.items, { key, count: 1 }],
                      };
                    }
                  }
                ),
              decrease: (key) => set((state) => {
                return {
                  items: state.items
                    .map((item) =>
                      item.key === key ? { ...item, count: item.count - 1 } : item
                    )
                    .filter((item) => item.count > 0), // Remove item if count is 0
                };
              }),
              clearPersistedState: () => {
                set({ items: []});
                localStorage.removeItem("cart");
              },
            }
        ),
        { name: 'cart' }        
    )
);

export default useStore;