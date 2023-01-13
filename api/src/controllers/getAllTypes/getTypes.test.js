const getTypesDb = require("./getTypesDb")
const typesAPI = require("../../helpers/typesAPI.js") 

describe('Obtener los tipos de pokemons', () => { 
    let types;
    beforeAll( async () => {
    return    types = await getTypesDb()
    });
    it("Los tipos deben de estar en un array", ()=> {
        expect(types).toBeInstanceOf(Array);
    })
    it('Deben de ser 20 tipos de pokemons', () => {
        expect(types).toHaveLength(20)
    });
    it('Debe contener los nombres de los siguientes tipos', () => {
        expect(types).toEqual(typesAPI)
    });

 })