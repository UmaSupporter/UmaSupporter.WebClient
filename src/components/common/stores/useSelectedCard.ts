import create from "zustand";
import { devtools } from "zustand/middleware";
import type { StateCreator } from "zustand/vanilla";
import { Mixpanel, TRACK } from "../../../common/mixpanel";

export type Store = {
  favoriteCardUuids: number[],
  umaUuid: number,
  cardUuid: number,
  showUmaPage: boolean,
  showCardPage: boolean,
  resetFavorite: () => void,
  toggleFavoriteCard: (uuid: number) => void,
  deleteFavoriteCard: (uuid: number) => void,
  setCard: (uuid: number) => void,
  setUmamusume: (uuid: number) => void,
  toggleUmaPage: () => any,
  toggleCardPage: () => any
}

let creator: StateCreator<Store> = (set, get) => ({
  favoriteCardUuids: [],
  cardUuid: 0,
  umaUuid: 0,
  showUmaPage: true,
  showCardPage: true,
  resetFavorite: () => set({
    favoriteCardUuids: [],
  }, true),
  toggleFavoriteCard(uuid: number) {
    Mixpanel.track(TRACK.SET_FAVORITE, {uuid})
    if(get().favoriteCardUuids.includes(uuid)) {
      get().deleteFavoriteCard(uuid)
      return
    }
    if(get().favoriteCardUuids.length >= 6) return
    set(state => ({ favoriteCardUuids: [...state.favoriteCardUuids, uuid] }))
  },
  deleteFavoriteCard: (uuid: number) => set(state => ({ favoriteCardUuids: state.favoriteCardUuids.filter(x => x !== uuid) })),
  setCard(uuid: number) {
    Mixpanel.track(TRACK.SET_CARD, { uuid })
    set({ cardUuid: uuid })
  },
  setUmamusume(uuid: number) {
    Mixpanel.track(TRACK.SET_UMA, { uuid })
    set({ umaUuid: uuid })
  },
  toggleUmaPage: () => set(state => ({ showUmaPage: !state.showUmaPage })),
  toggleCardPage: () => set(state => ({ showCardPage: !state.showCardPage }))
})

if(process.env.NODE_ENV !== 'production') creator = devtools(creator)

export default create<Store>(creator)