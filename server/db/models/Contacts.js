const bookshelf = require('./bookshelf')

const Contacts = bookshelf.Model.extend({
    tableName: 'contacts',
    idAttribute: 'id',
    hasTimestamps: true
})

module.exports = Contacts;