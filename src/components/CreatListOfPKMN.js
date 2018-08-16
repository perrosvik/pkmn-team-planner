import Pokemon from '../pokemon';

/* React select needs 'Options' to be on the format [{value: 'value', label: 'Label'}]*/
function CreatListOfPKMN () {
    return Pokemon.all().map((name) => ({value: Pokemon.getId(name), label: name}))
}
export default CreatListOfPKMN;