const customObjectsArray = [{
    id: 'a28a27b4-1237-11ed-861d-0242ac120002',
    arrayValue: 'one',
}, {
    id: 'a28a296c-1237-11ed-861d-0242ac120002',
    arrayValue: 'four',
}, {
    id: 'a28a2a52-1237-11ed-861d-0242ac120002',
    arrayValue: 'three',
}, {
    id: 'a28a2b2e-1237-11ed-861d-0242ac120002',
    arrayValue: 'three',
}, {
    id: 'a28a2dae-1237-11ed-861d-0242ac120002',
    arrayValue: 'three',
}, {
    id: 'a28a3132-1237-11ed-861d-0242ac120002',
    arrayValue: 'two',
}, {
    id: 'a28a320e-1237-11ed-861d-0242ac120002',
    arrayValue: 'two',
}];

const mapping = {
    one: 1,
    three: 3,
    two: 2,
    four: 4,
}

customObjectsArray.map( function({id, arrayValue} ) {
    return {id, arrayValue: mapping[arrayValue]}
}).sort(function ({arrayValue: left}, {arrayValue: right}) { 
    return (left > right) ? 1 : -1 }).forEach(function ({id}) {
    document.write(id);
    document.write('<br>')
});