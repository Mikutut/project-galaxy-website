import { createStore, Store } from 'vuex';
import { InjectionKey } from "vue";

export interface State {
  pageLoaded: boolean;
  discordMembersCount: number;
  modalsStates: {
    connectingToServer: boolean;
    reportIssue: boolean;
  };
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    pageLoaded: false,
    discordMembersCount: 0,
    modalsStates: {
      connectingToServer: false,
      reportIssue: false
    }
  },
  getters: {
    getPageLoaded: (state: State) => state.pageLoaded,
    getDiscordMembersCount: (state: State) => state.discordMembersCount,
    getModalsStates: (state: State) => state.modalsStates
  },
  mutations: {
    switchPageLoaded: (state: State, payload: boolean) => state.pageLoaded = payload,
    updateDiscordMembersCount: (state: State, payload: number) => state.discordMembersCount = payload,
    switchModalState: (state: State, name: string) => state.modalsStates[name as keyof typeof state.modalsStates] = !state.modalsStates[name as keyof typeof state.modalsStates]
  },
  actions: {
    switchPageLoadedAsync: ({ commit }, payload: boolean) => commit('switchPageLoaded', payload),
    updateDiscordMembersCountAsync: ({ commit }, payload: number) => commit('updateDiscordMembersCount', payload),
    switchModalStateAsync: ({ commit }, name: string) => commit('switchModalState', name)
  },
  modules: {
  }
});
