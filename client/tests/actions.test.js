import axios from "axios";
import configureStore from "redux-mock-store";
import nock from "nock";
import nodeFetch from "node-fetch";
import thunk from "redux-thunk";

import * as actions from "../src/redux/actions/index";

describe("Actions", () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({ pokemons: [] });
  const apiMock = nock("http://localhost:3001");

  apiMock.get("/pokemons").reply(200, "OK");

  it("getPokemons - deberia hacer un dispatch  con las propiedades type GET_ALL_POKEMONS y como payload el resultado del fetch al link provisto", async () => {
    return store
      .dispatch(actions.getAllPokemons())
      .then(() => {
        const actionsStore = store.getActions();
        expect(actionsStore[0].payload.length).toBe(1);
        expect(actionsStore[0]).toBe({
          type: "GET_ALL_POKEMONS",
          payload: [],
        });
      })
      .catch((err) => {
        console.error(err);
        expect(err).toBeUndefined();
      });
  });
});
