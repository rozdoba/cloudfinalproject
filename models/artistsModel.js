let db = require('../util/database');

function getAll() {
    return db.query(
        `SELECT * 
        FROM Artists 
        WHERE Deleted != 1`);
}

function add(artist) {
    let {name, description, url} = artist;
    db.execute(
        `INSERT INTO Artists 
        (Name, Description, URL) 
        VALUES ('${name}', '${description}', '${url}')`
    )
    .then(data => console.log("successful insertion into database!"))
    .catch(error => console.log("error: " + error));
}

function _delete(artistID) {
    db.execute(
        `UPDATE Artists
        SET Deleted = 1
        WHERE ArtistID = ${artistID}`
    )
    .then(data => console.log("successful deletion from database!"))
    .catch(error => console.log(error));
}

function search(searchKey) {
    return db.query(
        `SELECT *
        FROM Artists
        WHERE Deleted != 1
            AND (Name LIKE '%${searchKey}%' OR Description LIKE '%${searchKey}%')`
    );
}

module.exports = {
    getAll: getAll,
    add: add,
    delete: _delete,
    search: search
}
