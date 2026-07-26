var pool = require('./bd');


/* trae todas las promociones, la ultima cargada primero */
async function getPromociones() {
    try {
        var query = 'select * from promocionesespeciales order by id desc';
        var rows = await pool.query(query);
        return rows;

    }   catch (error) {
            console.log(error);
    }

}


/* trae una sola promocion, para el formulario de editar */
async function getPromocionById(id) {
    try {
        var query = 'select * from promocionesespeciales where id = ?';
        var rows = await pool.query(query, [id]);
        return rows[0];

    }   catch (error) {
            console.log(error);
    }

}


/* inserta una promocion nueva */
async function insertPromocion(obj) {
    try {
        var query = 'insert into promocionesespeciales set ?';
        var rows = await pool.query(query, [obj]);
        return rows;

    }   catch (error) {
            console.log(error);
    }

}


/* actualiza una promocion existente */
async function updatePromocionById(obj, id) {
    try {
        var query = 'update promocionesespeciales set ? where id = ?';
        var rows = await pool.query(query, [obj, id]);
        return rows;

    }   catch (error) {
            console.log(error);
    }

}


/* borra una promocion */
async function deletePromocionById(id) {
    try {
        var query = 'delete from promocionesespeciales where id = ?';
        var rows = await pool.query(query, [id]);
        return rows;

    }   catch (error) {
            console.log(error);
    }

}


module.exports = {
    getPromociones,
    getPromocionById,
    insertPromocion,
    updatePromocionById,
    deletePromocionById
};
