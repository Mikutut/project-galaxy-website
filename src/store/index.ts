import { createStore, Store } from 'vuex';
import { InjectionKey } from "vue";

export interface State {
  discordMembersCount: number;
  modalsStates: {
    connectingToServer: boolean;
    reportIssue: boolean;
  };
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    discordMembersCount: 0,
    modalsStates: {
      connectingToServer: false,
      reportIssue: false
    }
  },
  getters: {
    getDiscordMembersCount: (state: State) => state.discordMembersCount,
    getModalsStates: (state: State) => state.modalsStates
  },
  mutations: {
    updateDiscordMembersCount: (state: State, payload: number) => state.discordMembersCount = payload,
    switchModalState: (state: State, name: string) => state.modalsStates[name as keyof typeof state.modalsStates] = !state.modalsStates[name as keyof typeof state.modalsStates]
  },
  actions: {
    updateDiscordMembersCountAsync: ({ commit }, payload: number) => commit('updateDiscordMembersCount', payload),
    switchModalStateAsync: ({ commit }, name: string) => commit('switchModalState', name)
  },
  modules: {
  }
});
